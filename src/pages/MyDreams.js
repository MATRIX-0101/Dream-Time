
import { toast } from "react-toastify";
import React, { useState, useEffect } from 'react';
import { auth, app } from "../firebase.config";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";

export default function MyDreams() {
  const [profilePic, setProfilePic] = useState("https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png");
  const [editingProfilePic, setEditingProfilePic] = useState(false);
  const [newProfilePic, setNewProfilePic] = useState("https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png");
  const [dreamdata, setDreamData] = useState(null);
  const [loggedin, setLoggedin] = useState(""); // Initialize loggedin state to false
  const [userId, setUserId] = useState(null);
  const [userName, setUsename] = useState(null);

  const handleEditProfilePic = () => {
    setEditingProfilePic(true);
  };

  const handleSaveProfilePic = async (e) => {
    setEditingProfilePic(false);
  };

  const handleCancelEdit = () => {
    setEditingProfilePic(false);
    setNewProfilePic('');
  };

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    if (file.size / 1024 > 400) {
      // File size is larger than 400KB, show toast message and stop the process
      toast.warn("Selected image size exceeds 400KB limit.");
      e.target.value = "";
      return;
    }
    const reader = new FileReader();

    reader.onload = async (event) => {
      const imageData = event.target.result; // Base64 string of the image data

      const db = getFirestore(app);
      const uid = auth.currentUser.uid;

      // Reference to the user document
      const userRef = doc(db, 'user', uid);

      try {
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          console.log("Existing profile photo found. Deleting...");
          // Delete existing profile photo from Firestore
          try {
            await deleteDoc(userRef);
            console.log("Existing profile photo deleted successfully.");
          } catch (removeError) {
            console.error(
              "Error deleting existing profile photo:",
              removeError
            );
          }
        } else {
          console.log("No existing profile photo found.");
        }

        try {
          console.log("Storing new image data...");
          // Store the new image data in the Firestore user document
          await setDoc(userRef, { image: imageData });
          console.log("Image data stored successfully");
          setProfilePic(URL.createObjectURL(file)); // Update profile image on the front end
          
        } catch (storeError) {
          console.error("Error storing image data:", storeError);
        }
      } catch (error) {
        console.error("Error checking for existing profile photo:", error);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
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
        console.error("Error fetching dream data:", error);
      }
    };

    const fetchData = async () => {
      try {
        const user = auth.currentUser;
        if (!user) {
          console.log("User not authenticated.");
          return;
        }
    
        const userId = user.uid;
        console.log("Fetching data for user:", userId);
    
        const db = getFirestore(app);
        const userDocRef = doc(db, 'user', userId);
    
        const docSnapshot = await getDoc(userDocRef);
        console.log("Snapshot:", docSnapshot);
    
        if (!docSnapshot.exists()) {
          console.log("Data not found for user:", userId);
          return;
        }
    
        const userData = docSnapshot.data();
        console.log("Data:", userData);

        if(userData && userData.firstname){
          setUsename(userData.firstname);
        }
    
        if (userData && userData.image) {
          setProfilePic(userData.image);
        } else {
          console.log("Image not found in data:", userData);
          setProfilePic("https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedin(true);
        fetchDreamData();
        fetchData()
      } else {
        alert("login again");
      }
    });
    return unsubscribe; // Cleanup function
  }, []);

  const handleDeleteDream = async (dreamId) => {
    const db = getFirestore(app);
    try {
      await deleteDoc(doc(db, 'Dreams', dreamId));
      setDreamData((prevData) => prevData.filter(dream => dream.id !== dreamId));
      toast.success("Dream deleted successfully.");
    } catch (error) {
      console.error("Error deleting dream:", error);
      toast.error("Failed to delete dream.");
    }
  };

  return (
    <div className="font-sans">
      <div className="flex justify-center items-center py-4">
      <img
              src={profilePic}
              alt="Profile Pic"
              className="w-16 h-16 rounded-full border border-gray-300"
            />
        {editingProfilePic ? (
          <>
            <input
              type="file"
              onChange={handleFileInputChange}
              className="border border-gray-300 rounded-md p-1 mr-2"
            />
            <button
              onClick={handleSaveProfilePic}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Save
            </button>
            <button
              onClick={handleCancelEdit}
              className="border border-gray-300 text-gray-600 font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            
            <button
              onClick={handleEditProfilePic}
              className="ml-2 text-blue-500 hover:underline"
            >
              {userName}
            </button>
          </>
        )}
      </div>


      {dreamdata && dreamdata
        .map(dream => ({ ...dream, posttime: new Date(dream.posttime) })) // Convert posttime string to Date object
        .sort((a, b) => b.posttime - a.posttime)
        .map((dream, index) => (
        dream.user === userId ? null : (
          <div key={index} className="bg-white max-w-md mx-auto my-8 border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl overflow-hidden">
            <div className="flex pt-4 px-4">
              <div className="px-2 pt-2 flex-grow">
                <header>
                  <span className="font-medium text-black no-underline">{dream.title}</span>
                  <div className="text-xs text-gray-500 flex items-center my-1">
                  </div>
                </header>
                <article className="py-4 text-gray-800">
                  {dream.content}
                </article>
              </div>
              <button 
                  onClick={() => handleDeleteDream(dream.id)} 
                  className="bg-red-500 hover:bg-red-700 text-white font-bold m-3 my-7 py-1 px-3 rounded shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Delete
                </button>
            </div>
          </div>
        )
      ))}
    </div>
  );
}
