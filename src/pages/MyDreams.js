import { toast } from "react-toastify";
import React, { useState, useEffect } from 'react';
import { auth, app } from "../firebase.config";
import {
  getDatabase,
  getAuth,
  ref,
  get,
  set,
  update,
  remove,
} from "firebase/database";

export default function MyDreams() {
  const [profilePic, setProfilePic] = useState('');
  const [editingProfilePic, setEditingProfilePic] = useState(false);
  const [newProfilePic, setNewProfilePic] = useState('');
  const [data, setData] = useState([]);
  const [loggedin, setLoggedin] = useState(""); // Initialize loggedin state to false

  const handleEditProfilePic = () => {
    setEditingProfilePic(true);
  };

  const handleSaveProfilePic = () => {
    setProfilePic(newProfilePic);
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

      const db = getDatabase();
      const uid = auth.currentUser.uid;

      // Check if user has an existing profile photo
      const dbRef = ref(db, `user/${uid}/image`);
      try {
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          console.log("Existing profile photo found. Deleting...");
          // Delete existing profile photo from database
          try {
            await remove(dbRef); // Use remove to delete existing data
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
          // Store the new image data in the Realtime Database under the user's node
          await set(ref(db, `user/${uid}/image`), imageData);
          console.log("Image data stored successfully");
          setProfilePic(URL.createObjectURL(file)); // Update profile image on the front end
          
        } catch (storeError) {
          console.error("Error storing image data:", storeError);
        }
      } catch (error) {
        console.error("Error checking for existing profile photo:", error);
      }
      // setTimeout(() => {
      //   window.location.reload();
      // }, 10);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const userId = auth.currentUser.uid;
      //  alert(userId);
      const db = getDatabase(app);
      const dbRef = ref(db, `user/${userId}`);
      try {
        const snapshot = await get(dbRef);
        const val = snapshot.val();
        if (val && val.image) {
          setProfilePic(val.image);
        } else {
          setProfilePic(
            "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
          );
        }
      } catch (error) {
        // alert(error.message);
      } finally {
        // setloading(false);
      }
    };
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // console.log(auth);
        setLoggedin(true);
        // console.log(user.displayName);
        // console.log(user.displayName);
        console.log(user.email);
        // setData(user.email); // User is authenticated
        fetchData();
      } else {
        // setData([]);
        // setLoggedin(false); // User is not authenticated
        alert("login again");
      }
    });
    return unsubscribe; // Cleanup function
  }, []);


  return (

    <div className="font-sans">
      <div className="flex justify-center items-center py-4">
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
            <img
              src={profilePic}
              alt="Profile Pic"
              className="w-16 h-16 rounded-full border border-gray-300"
            />
            <button
              onClick={handleEditProfilePic}
              className="ml-2 text-blue-500 hover:underline"
            >
              Edit Profile Pic
            </button>
          </>
        )}
      </div>
      <div className="bg-white max-w-md mx-auto my-8 border border-grey-light overflow-hidden">
        <div className="flex pt-4 px-4">
          <div className="px-2 pt-2 flex-grow">
            <header>
              <span className="font-medium text-black no-underline">Dream Title</span>
              <div className="text-xs text-grey flex items-center my-1">
              </div>
            </header>
            <article className="py-4 text-grey-darkest">
              Dream content fetched from database.
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
