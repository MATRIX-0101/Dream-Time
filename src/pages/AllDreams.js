
import { toast } from "react-toastify";
import React, { useState, useEffect } from 'react';
import { auth, app } from "../firebase.config";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  getDocs,
  collection,
  addDoc
} from "firebase/firestore";
import SortingElements from "../components/SortingElements";
import DreamList from "../components/DreamList";
// import {io} from "socket.io-client"

export default function AllDreams() {
  const [dreamdata, setDreamData] = useState([]);
  const [replyData,setReplyData] = useState([])
  const [userId, setUserId] = useState(null);
  const [username,setUsename] = useState(null);
  const [userData, setUserData] = useState([]);
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const [dropdownType, setDropdownType] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [category, setCategory] = useState('');
  const [comment, setComment] = useState('');
  const [socket,setSocket] = useState(null)
  const [reply,setReply] = useState('')
  const [not,setNot] = useState('')


  useEffect(() => {

    const fetchUserData = async () => {
      const tempId= auth.currentUser.uid
      setUserId(tempId)
      const db = getFirestore(app);
      const userRef = collection(db, 'user');
      console.log("yes")
      try {
        const userSnapshot = await getDocs(userRef);
        const userdocs = userSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUserData(userdocs); // Update the userData state with the user documents
        console.log(userData)
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    

    const fetchDreamData = async () => {
      const tempId = auth.currentUser.uid;
      setUserId(tempId);
      const db = getFirestore(app);
      const dreamsCollectionRef = collection(db, 'Dreams');
      try {
        const snapshot = await getDocs(dreamsCollectionRef);
        const dreamData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        setDreamData(dreamData);
       // console.log(dreamData.comments)
        // setCommentsData(commentsData)

        // Fetch only the 'replies' field from the Dreams collection
    const repliesData = snapshot.docs.map(doc => {
      const data = doc.data();
      return { replies: data.replies || [] }; // Handle null case by defaulting to an empty array
    });

    setReplyData(repliesData); // Assuming you have a state to store reply data
      } catch (error) {
        console.error("Error fetching dreams:", error);
        alert("An error occurred while fetching dreams.");
      }
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // const currUser = auth.currentUser.uid;
        fetchUserData();
        fetchDreamData();
      } else {
        alert("Please log in again");
      }
    });
    return unsubscribe;
  }, []);

  const handleLike = async (dreamId,dreamuserId) => {
    const user = auth.currentUser;
    if (!user) {
      alert("Please log in to like this dream.");
      return;
    }

    const db = getFirestore(app);
    const dreamRef = doc(db, 'Dreams', dreamId);

    try {
      const dreamDoc = await getDoc(dreamRef);
      if (!dreamDoc.exists()) {
        alert("Dream not found.");
        return;
      }

      
      
      const likes = dreamDoc.data().likes || [];
      
      if (likes.includes(user.uid)) {
        alert("You have already liked this dream.");
        return;
      }
      
      likes.push(user.uid);
      await setDoc(dreamRef, { ...dreamDoc.data(), likes });
      toast.success("Dream liked successfully!");
      handleNotification(dreamuserId,3)
    } catch (error) {
      console.error("Error liking dream:", error);
      toast.error("An error occurred while liking the dream.");
    }
  };
  
  const handleComment = async (dreamId,dreamuserId) => {
    const user = auth.currentUser;
    if (!user) {
      alert("Please log in to like this dream.");
      return;
    }

    const db = getFirestore(app);
    const dreamRef = doc(db, 'Dreams', dreamId);

    try {
      const dreamDoc = await getDoc(dreamRef);
      if (!dreamDoc.exists()) {
        alert("Dream not found.");
        return;
      }
      
      const comments = dreamDoc.data().comments || [];
      // Generate a unique ID for the new comment
      const newCommentId = doc(collection(db, 'Dreams', dreamId, 'comments')).id;

      const newcomment = {
        id: newCommentId,
        author: user.uid,
        text: comment
      }
      
      
      
      comments.push(newcomment);
      await setDoc(dreamRef, { ...dreamDoc.data(), comments });

      // Update the local state
    setDreamData((prevDreamData) =>
      prevDreamData.map((dream) =>
        dream.id === dreamId
          ? { ...dream, comments: [...comments] }
          : dream
      )
    );
    //set reply state


      setComment('')
      toast.success("Dream liked successfully!");
      handleNotification(dreamuserId,2)
      
    } catch (error) {
      console.error("Error liking dream:", error);
      toast.error("An error occurred while liking the dream.");
    }
  };

  const handleReply = async (dreamId,commentId,dreamuserId) => {
    
    const user = auth.currentUser;
    if (!user) {
      alert("Please log in to like this dream.");
      return;
    }

    const db = getFirestore(app);
    const dreamRef = doc(db, 'Dreams', dreamId);

    try {
      const dreamDoc = await getDoc(dreamRef);
      if (!dreamDoc.exists()) {
        alert("Dream not found.");
        return;
      }
      
      const replies = dreamDoc.data().replies || [];
      // Generate a unique ID for the new comment
      const newReplyId = doc(collection(db, 'Dreams', dreamId, 'replies')).id;

      const newreply = {
        id: newReplyId,
        commentid: commentId,
        author: user.uid,
        text: reply
      }
      
      
      replies.push(newreply);
      await setDoc(dreamRef, { ...dreamDoc.data(), replies });

      // Update the local state
    setDreamData((prevDreamData) =>
      prevDreamData.map((dream) =>
        dream.id === dreamId
          ? { ...dream, replies: [...replies] }
          : dream
      )
    );

    


      setReply('')
      toast.success("Dream replied successfully!");
    } catch (error) {
      console.error("Error liking dream:", error);
      toast.error("An error occurred while liking the dream.");
    }
  };

  const handleNotification = async (dreamuserId, type) => {
    try {
        const db = getFirestore();
        const dreamRef = collection(db, 'Notifications');

        // Assuming userData is an array of user objects and contains the current user's data
        const currentUser = userData.find(user => user.id === userId);
        if (!currentUser) {
            console.error("Current user data not found!");
            return;
        }

        const firstName = currentUser.firstname;
        const surname = currentUser.surname;

        let notificationMessage = "";

        if (type === 1) {
            notificationMessage = `${firstName} ${surname} new post added`;
        } else if (type === 2) {
            notificationMessage = `${firstName} ${surname} commented`;
        } else if (type === 3) {
            notificationMessage = `${firstName} ${surname} Liked your post`;
        } else if (type === 4) {
            notificationMessage = `${firstName} ${surname} followed you`;
        }

        
        

        const newNotification = {
            from: userId,
            to: dreamuserId,
            seen: 0,
            text: notificationMessage,
        };

        await addDoc(dreamRef, newNotification);

        toast.success(notificationMessage);
    } catch (error) {
        console.error('Error submitting dream:', error);
        alert('Failed to submit dream');
    }
};


  const handleChange = (e) => {
      setComment(e.target.value);
  }

  const handlereply = (e) => {
     setReply(e.target.value);
  }
  
  const toggleDropdown = (index, type) => {
    setDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
    setDropdownType(type);
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowImageModal(true);
  };

  const handleChildvalue = (value) => {
    setCategory(value);
  }

  const filteredDreams = category !== '' ? dreamdata.filter(dream => dream.category === category) : dreamdata;
  filteredDreams.sort((a,b) => new Date(b.posttime) - new Date(a.posttime))

  return (
    <div>
      <SortingElements onChildvalue={handleChildvalue}/>
      <DreamList
        filteredDreams={filteredDreams}
        userId={userId}
        // commentsData={commentsData}
        userData={userData}
        replyData={replyData}
        dropdownIndex={dropdownIndex}
        dropdownType={dropdownType}
        comment={comment}
        relpy={reply}
        handleImageClick={handleImageClick}
        handleLike={handleLike}
        handleNotification={handleNotification}
        toggleDropdown={toggleDropdown}
        handleComment={handleComment}
        handleReply={handleReply}
        handleChange={handleChange}
        handlereply={handlereply}
      />
      
      {showImageModal && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-75">
          <div className="bg-white p-4 rounded-lg max-w-3xl max-h-3xl overflow-hidden">
            <img src={selectedImage} alt="Full Profile" className="w-full h-full object-contain" />
            <button className="absolute top-0 right-0 p-2 text-white" onClick={() => setShowImageModal(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
