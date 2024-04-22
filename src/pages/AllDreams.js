
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
} from "firebase/firestore";
import SortingElements from "../components/SortingElements";
import DreamList from "../components/DreamList";

export default function AllDreams() {
  const [dreamdata, setDreamData] = useState([]);
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState([]);
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const [dropdownType, setDropdownType] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [category, setCategory] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // const fetchUserData = async () => {
    //   const db = getFirestore(app);
    //   const userRef = collection(db, 'user');
    //   try {
    //     const userDoc = await getDocs(userRef);
    //     if (userDoc.exists()) {
    //       const userdocs = userDoc.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    //     // setDreamData(dreamData);
    //       setUserData(userdocs);
    //     } else {
    //       setUserData(null);
    //     }
    //   } catch (error) {
    //     console.error("Error fetching user data:", error);
    //   }
    // };
    const fetchUserData = async () => {
      const db = getFirestore(app);
      const userRef = collection(db, 'user');
      try {
        const userSnapshot = await getDocs(userRef);
        const userdocs = userSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUserData(userdocs); // Update the userData state with the user documents
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

  const handleLike = async (dreamId) => {
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
    } catch (error) {
      console.error("Error liking dream:", error);
      toast.error("An error occurred while liking the dream.");
    }
  };
  
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

  return (
    <div>
      <SortingElements onChildvalue={handleChildvalue}/>
      <DreamList
        filteredDreams={filteredDreams}
        userData={userData}
        dropdownIndex={dropdownIndex}
        dropdownType={dropdownType}
        handleImageClick={handleImageClick}
        handleLike={handleLike}
        toggleDropdown={toggleDropdown}
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
