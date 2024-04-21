
import { toast } from "react-toastify";
import React, { useState, useEffect } from 'react';
import { auth, app } from "../firebase.config";
import {
  getDatabase,
  ref,
  get,
  set
} from "firebase/database";
import SortingElements from "../components/SortingElements";
import DreamList from "../components/DreamList";

export default function AllDreams() {
  const [dreamdata, setDreamData] = useState([]);
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState(null);
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const [dropdownType, setDropdownType] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [category,setCategory] = useState('');
  const [comments,setComments] = useState([]);

  useEffect(() => {
    const fetchUserData = async (userId) => {
      const db = getDatabase(app);
      const userRef = ref(db, `user/`);
      try {
        const snapshot = await get(userRef);
        const tempdata = snapshot.val();
        if (tempdata) {
          setUserData(tempdata);
        } else {
          setUserData(null); // Set default value to null if user data not found
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const fetchDreamData = async () => {
      const tempId = auth.currentUser.uid;
      setUserId(tempId);
      const db = getDatabase(app);
      const dbRef = ref(db, `Dreams/`);
      try {
        const snapshot = await get(dbRef);
        const val = snapshot.val();
        if (val) {
          // Convert the object into an array of objects with IDs
          const dreamArray = Object.entries(val).map(([id, dream]) => ({ id, ...dream }));
          setDreamData(dreamArray);
          
        } else {
          setDreamData([]); // Set an empty array if no dreams found
          alert('No dreams found.');
        }
      } catch (error) {
        console.error("Error fetching dreams:", error);
        alert("An error occurred while fetching dreams.");
      }
    };
  
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fetchUserData(user.uid);
        fetchDreamData();
      } else {
        alert("Please log in again");
      }
    });
    return unsubscribe; // Cleanup function
  }, []);

  
  const handleLike = async (dreamId) => {
    // Check if the user is authenticated
    const user = auth.currentUser;
    if (!user) {
      // If user is not logged in, display a message or redirect to login page
      alert("Please log in to like this dream.");
      return;
    }
  
    // Check if the dream exists in the database
    const db = getDatabase(app)
    const dreamRef = ref(db, `Dreams/${dreamId}`);
    get(dreamRef).then((snapshot) => {
      if (!snapshot.exists()) {
        // If the dream does not exist, display a message or handle accordingly
        alert("Dream not found.");
        return;
      }
  
      // Retrieve the current likes array from the dream data
      const likes = snapshot.val().likes || [];
  
      // Check if the dream is already liked by the user
      if (likes.includes(user.uid)) {
        // If the dream is already liked by the user, display a message or handle accordingly
        alert("You have already liked this dream.");
        return;
      }
  
      // If the dream is not yet liked by the user, update the likes array in dream data
      likes.push(user.uid);
      set(dreamRef, { ...snapshot.val(), likes }).then(() => {
        // Display a success message or update the UI to indicate that the dream is liked
        toast.success("Dream liked successfully!");
      }).catch((error) => {
        console.error("Error updating dream:", error);
        // Display an error message or handle the error accordingly
        toast.error("An error occurred while liking the dream.");
      });
    }).catch((error) => {
      console.error("Error fetching dream:", error);
      // Display an error message or handle the error accordingly
      toast.error("An error occurred while fetching the dream.");
    });
  };
  
  const toggleDropdown = (index, type) => {
    setDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
    setDropdownType(type); // Update the dropdown type
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowImageModal(true);
  };

  const handleChildvalue = (value) =>{
    setCategory(value);
  }

  // Filter dreams based on category if category is not empty
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
      
      {/* Image Modal */}
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
