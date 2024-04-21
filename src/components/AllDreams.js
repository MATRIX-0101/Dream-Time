// import { toast } from "react-toastify";
// import React, { useState, useEffect } from 'react';
// import { auth, app } from "../firebase.config";
// import {
//   getDatabase,
//   getAuth,
//   ref,
//   get,
//   set,
//   update,
//   remove,
// } from "firebase/database";
// import SortingElements from "./SortingElements";



// export default function AllDreams() {
//   const [dreamdata, setDreamData] = useState(null);
//   //const [userData, setUserData] = useState({ firstname: "", image: "" });
//   const [userId, setUserId] = useState(null);
//   const [userData, setUserData] = useState(null);

//   const [dropdownIndex, setDropdownIndex] = useState(null);
//   useEffect(() => {
//     // const fetchData = async () => {
//     //   const userId = auth.currentUser.uid;
//     //   //  alert(userId);
//     //   const db = getDatabase(app);
//     //   const dbRef = ref(db, `user/${userId}`);
//     //   try {
//     //     const snapshot = await get(dbRef);
//     //     const val = snapshot.val();
//     //     if (val && val.image) {
//     //       setProfilePic(val.image);
//     //     } else {
//     //       setProfilePic(
//     //         "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
//     //       );
//     //     }
//     //   } catch (error) {
//     //     // alert(error.message);
//     //   } finally {
//     //     // setloading(false);
//     //   }
//     // };
  
//     // const fetchUserData = async (userId) => {
//     //   const db = getDatabase(app);
//     //   const userRef = ref(db, `users/${userId}`); // Assuming 'users' is the node where user data is stored
//     //   try {
//     //     const snapshot = await get(userRef);
//     //     const userData = snapshot.val();
//     //     if (userData) {
//     //       setUserData(userData);
//     //     } else {
//     //       setUserData({ firstname: "Unknown", image: "" }); // Set default values if user data not found
//     //     }
//     //   } catch (error) {
//     //     console.error("Error fetching user data:", error);
//     //   }
//     // };
//     const fetchUserData = async (userId) => {
//       const db = getDatabase(app);

//       const userRef = ref(db, `user/`); // Adjust the path as per your database structure
//       try {
//         const snapshot = await get(userRef);
//         const tempdata = snapshot.val();
//         if (tempdata) {
//           setUserData(tempdata);
//          // console.log(tempdata);
//           console.log(userData);
//         } else {
//           setUserData(alert); // Set default values if user data not found
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };


//     const fetchDreamData = async () => {
//       const tempId = auth.currentUser.uid;
//       //  alert(userId);
//       setUserId(tempId);
//       const db = getDatabase(app);
//       const dbRef = ref(db, `Dreams/`);
//       try {
//         const snapshot = await get(dbRef);
//         const val = snapshot.val();
//         if (val) {
//           // setProfilePic(val.image);
//           // setDreamData(val);
//           // console.log(val);
//           // for(let key in val){
//           //   setDreamData({...,val[key]});
//           // }
//           // Object.entries(val).map(([key, value]) => {
//           //   setDreamData(prevData => ({
//           //     ...prevData,
//           //     [key]: value
//           //   }));
//           // });
//           // console.log(dreamdata);

          
  
        


//           setDreamData(Object.values(val));
//           console.log(dreamdata);
//         } else {
//           // setProfilePic(
//           //   "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
//           // );
//           alert('dreams fetching unsuccessful');
//         }
//       } catch (error) {
//         alert(error.message);
//       } finally {
//         // setloading(false);
//       }
//     };
  
  
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         // console.log(auth);
//         // setLoggedin(true);
//         // console.log(user.displayName);
//         // console.log(user.displayName);
//         // console.log(user.email);
//         // setData(user.email); // User is authenticated
//         // fetchData();

//       //  fetchUserData(user.uid); // Fetch user data
//         fetchUserData(user.uid); // Fetch user data
//         fetchDreamData();
//       } else {
//         // setData([]);
//         // setLoggedin(false); // User is not authenticated
//         alert("please login again");
//       }
//     });
//     return unsubscribe; // Cleanup function
//   }, []);


// const toggleDropdown = (index) => {
//   setDropdownIndex(dropdownIndex === index ? null : index);
// };





// return (
//   <div>
//     <SortingElements />
//     {dreamdata &&
//       dreamdata.map((dream, index) => (
//        // dream.user === userId ? null :
//         <div key={index} className="font-sans">
//           <div className="bg-white max-w-md mx-auto my-8 border border-grey-light overflow-hidden">
//             <div className="flex pt-4 px-4">
//               <div className="px-2 pt-2 flex-grow">
//                 <header>
//                   <a href="#" className="text-black no-underline">
//                     <span className="font-medium">User Name:{userData[dream.user].firstname}</span>
//                     {userData[dream.user].image && <img src={userData[dream.user].image} alt="Profile" />}
//                   </a>
//                   <div className="text-xs text-grey flex items-center my-1">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="h-4 w-4 mr-1 feather feather-calendar"
//                     >
//                       <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
//                       <line x1="16" y1="2" x2="16" y2="6" />
//                       <line x1="8" y1="2" x2="8" y2="6" />
//                       <line x1="3" y1="10" x2="21" y2="10" />
//                     </svg> 
//                     <span>post time:{dream.posttime}

//                     </span>
//                   </div>
//                 </header>

//        <div className="py-4 text-grey-darkest">
//                     <div className="relative">
//                       <span className="font-bold cursor-pointer" onClick={() => toggleDropdown(index)}>
//                         {dream.title} &#9660;
//                       </span>
//                       {dropdownIndex === index && (
//                         <div className="absolute bg-gray-100 border border-gray-300 w-full mt-1 py-2 px-4">
//                           {dream.content}
//                         </div>
//                       )}
//                     </div>
//                   </div>


//                 <footer className="border-t border-grey-lighter text-sm flex">
//                   <a
//                     href="#"
//                     className="block no-underline text-blue flex px-4 py-2 items-center hover:bg-grey-lighter"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="feather feather-thumbs-up h-6 w-6 mr-1 stroke-current"
//                     >
//                       <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
//                     </svg>
//                     <span>Liked</span>
//                   </a>
//                   <a
//                     href="#"
//                     className="block no-underline text-black flex px-4 py-2 items-center hover:bg-grey-lighter"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="feather feather-message-circle h-6 w-6 mr-1 stroke-current"
//                     >
//                       <path d="M21 12a9 9 0 0 0-9-9"></path>
//                       <path d="M3 12a9 9 0 0 0 9 9"></path>
//                       <path d="M12 2a9 9 0 0 0-9 9"></path>
//                       <circle cx="19.5" cy="4.5" r="1.5"></circle>
//                       <circle cx="4.5" cy="4.5" r="1.5"></circle>
//                       <circle cx="19.5" cy="19.5" r="1.5"></circle>
//                       <circle cx="4.5" cy="19.5" r="1.5"></circle>
//                     </svg>
//                     <span>Comment</span>
//                   </a>
//                 </footer>
//               </div>
//             </div>
//           </div>
//         </div>
//       )).reverse()}
//   </div>
// );

// }




















import { toast } from "react-toastify";
import React, { useState, useEffect } from 'react';
import { auth, app } from "../firebase.config";
import {
  getDatabase,
  ref,
  get,
  set
} from "firebase/database";
import SortingElements from "./SortingElements";

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
      {filteredDreams &&
        filteredDreams.map((dream, index) => (
          <div key={index} className="font-sans">
            <div className="bg-white max-w-md mx-auto my-8 border border-grey-light overflow-hidden relative">
              {userData && userData[dream.user] && (
                <div className="absolute top-2 left-2">
                  <img
                    src={userData[dream.user].image}
                    alt="Profile"
                    className="w-12 h-12 rounded-full cursor-pointer"
                    onClick={() => handleImageClick(userData[dream.user].image)}
                  />
                </div>
              )}
              <div className="flex pt-4 px-4">
                <div className="px-14 pt-0 flex-grow">
                  <header className="flex justify-between items-center">
                    <div>
                      <span className="font-medium">{userData && userData[dream.user] ? userData[dream.user].firstname : 'Unknown User'}</span>
                      <span className="text-xs text-gray-500 block">{dream.posttime}</span>
                    </div>
                    <div className="font-bold cursor-pointer" onClick={() => toggleDropdown(index, 'title')}>
                      {dream.title} &#9660;
                    </div>
                  </header>
                  {dropdownIndex === index && dropdownType === 'title' && (
                    <div className="bg-gray-100 border border-gray-300 w-full mt-1 py-2 px-4">
                      {dream.content}
                    </div>
                  )}
                  <footer className="border-t border-grey-lighter text-sm flex mt-2">
                    <button onClick={() => handleLike(dream.id)} className="block no-underline text-blue flex px-4 py-2 items-center hover:bg-grey-lighter" style={{ color: userData && userData.likedDreams && userData.likedDreams[dream.id] ? 'yellow' : 'black' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up h-6 w-6 mr-1 stroke-current">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                      </svg>
                      <span>Liked</span>
                    </button>
                    <button onClick={() => toggleDropdown(index, 'comment')} className="block no-underline text-black flex px-4 py-2 items-center hover:bg-grey-lighter">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle h-6 w-6 mr-1 stroke-current">
                        <path d="M21 12a9 9 0 0 0-9-9"></path>
                        <path d="M3 12a9 9 0 0 0 9 9"></path>
                        <path d="M12 2a9 9 0 0 0-9 9"></path>
                        <circle cx="19.5" cy="4.5" r="1.5"></circle>
                        <circle cx="4.5" cy="4.5" r="1.5"></circle>
                        <circle cx="19.5" cy="19.5" r="1.5"></circle>
                        <circle cx="4.5" cy="19.5" r="1.5"></circle>
                      </svg>
                      <span>Comment</span>
                    </button>
                  </footer>
                  {dropdownIndex === index && dropdownType === 'comment' && (
                    <div className="bg-gray-100 border border-gray-300 w-full mt-1 py-2 px-4">
                      {dream.content}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )).reverse()}
      
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
