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



export default function AllDreams() {
  const [dreamdata, setDreamData] = useState(null);
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    // const fetchData = async () => {
    //   const userId = auth.currentUser.uid;
    //   //  alert(userId);
    //   const db = getDatabase(app);
    //   const dbRef = ref(db, `user/${userId}`);
    //   try {
    //     const snapshot = await get(dbRef);
    //     const val = snapshot.val();
    //     if (val && val.image) {
    //       setProfilePic(val.image);
    //     } else {
    //       setProfilePic(
    //         "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
    //       );
    //     }
    //   } catch (error) {
    //     // alert(error.message);
    //   } finally {
    //     // setloading(false);
    //   }
    // };
  
  
    const fetchDreamData = async () => {
      const tempId = auth.currentUser.uid;
      //  alert(userId);
      setUserId(tempId);
      const db = getDatabase(app);
      const dbRef = ref(db, `Dreams/`);
      try {
        const snapshot = await get(dbRef);
        const val = snapshot.val();
        if (val) {
          // setProfilePic(val.image);
          // setDreamData(val);
          // console.log(val);
          // for(let key in val){
          //   setDreamData({...,val[key]});
          // }
          // Object.entries(val).map(([key, value]) => {
          //   setDreamData(prevData => ({
          //     ...prevData,
          //     [key]: value
          //   }));
          // });
          // console.log(dreamdata);
          setDreamData(Object.values(val));
          console.log(dreamdata);
        } else {
          // setProfilePic(
          //   "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
          // );
          alert('dreams fetching uncessful');
        }
      } catch (error) {
        alert(error.message);
      } finally {
        // setloading(false);
      }
    };
  
  
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // console.log(auth);
        // setLoggedin(true);
        // console.log(user.displayName);
        // console.log(user.displayName);
        // console.log(user.email);
        // setData(user.email); // User is authenticated
        // fetchData();
        fetchDreamData();
      } else {
        // setData([]);
        // setLoggedin(false); // User is not authenticated
        alert("login again");
      }
    });
    return unsubscribe; // Cleanup function
  }, []);


//   return (

//     {dreamdata && dreamdata.map((dream, index) => (
//       <div>
//       <div className="font-sans">
//       <div className="bg-white max-w-md mx-auto my-8 border border-grey-light overflow-hidden">
//         <div className="flex pt-4 px-4">
//           <div className="px-2 pt-2 flex-grow">
//             <header>
//               <a href="#" className="text-black no-underline">
//                 <span className="font-medium">Account holder name + image</span>
//                 {/* <span className="font-normal text-grey">@rathes</span> */}
//               </a>
//               <div className="text-xs text-grey flex items-center my-1">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="h-4 w-4 mr-1 feather feather-calendar"
//                 >
//                   <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
//                   <line x1="16" y1="2" x2="16" y2="6" />
//                   <line x1="8" y1="2" x2="8" y2="6" />
//                   <line x1="3" y1="10" x2="21" y2="10" />
//                 </svg>
//                 <span>post time</span>
//               </div>
//             </header>
//             <article className="py-4 text-grey-darkest">
//               Title of dream ! + dropdown for content !!! : )
//             </article>
//             <footer className="border-t border-grey-lighter text-sm flex">
//               <a
//                 href="#"
//                 className="block no-underline text-blue flex px-4 py-2 items-center hover:bg-grey-lighter"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="feather feather-thumbs-up h-6 w-6 mr-1 stroke-current"
//                 >
//                   <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
//                 </svg>
//                 <span>Liked</span>
//               </a>
//               <a
//                 href="#"
//                 className="block no-underline text-black flex px-4 py-2 items-center hover:bg-grey-lighter"
//               >
//                 <svg
//                   xmlns="http://

// www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="feather feather-message-circle h-6 w-6 mr-1 stroke-current"
//                 >
//                   <path d="M21 12a9 9 0 0 0-9-9"></path>
//                   <path d="M3 12a9 9 0 0 0 9 9"></path>
//                   <path d="M12 2a9 9 0 0 0-9 9"></path>
//                   <circle cx="19.5" cy="4.5" r="1.5"></circle>
//                   <circle cx="4.5" cy="4.5" r="1.5"></circle>
//                   <circle cx="19.5" cy="19.5" r="1.5"></circle>
//                   <circle cx="4.5" cy="19.5" r="1.5"></circle>
//                 </svg>
//                 <span>Comment</span>
//               </a>
//             </footer>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//     ))}



    
//   )
// }

return (
  <div>
    {dreamdata &&
      dreamdata.map((dream, index) => (
        dream.user === userId ? null :
        <div key={index} className="font-sans">
          <div className="bg-white max-w-md mx-auto my-8 border border-grey-light overflow-hidden">
            <div className="flex pt-4 px-4">
              <div className="px-2 pt-2 flex-grow">
                <header>
                  <a href="#" className="text-black no-underline">
                    <span className="font-medium">Account holder name + image</span>
                  </a>
                  <div className="text-xs text-grey flex items-center my-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 mr-1 feather feather-calendar"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span>post time</span>
                  </div>
                </header>
                <article className="py-4 text-grey-darkest">
                  {dream.title}
                </article>
                <footer className="border-t border-grey-lighter text-sm flex">
                  <a
                    href="#"
                    className="block no-underline text-blue flex px-4 py-2 items-center hover:bg-grey-lighter"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-thumbs-up h-6 w-6 mr-1 stroke-current"
                    >
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                    </svg>
                    <span>Liked</span>
                  </a>
                  <a
                    href="#"
                    className="block no-underline text-black flex px-4 py-2 items-center hover:bg-grey-lighter"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-message-circle h-6 w-6 mr-1 stroke-current"
                    >
                      <path d="M21 12a9 9 0 0 0-9-9"></path>
                      <path d="M3 12a9 9 0 0 0 9 9"></path>
                      <path d="M12 2a9 9 0 0 0-9 9"></path>
                      <circle cx="19.5" cy="4.5" r="1.5"></circle>
                      <circle cx="4.5" cy="4.5" r="1.5"></circle>
                      <circle cx="19.5" cy="19.5" r="1.5"></circle>
                      <circle cx="4.5" cy="19.5" r="1.5"></circle>
                    </svg>
                    <span>Comment</span>
                  </a>
                </footer>
              </div>
            </div>
          </div>
        </div>
      ))}
  </div>
);

// import React, { useState, useEffect } from 'react';
// import { app } from '../firebase.config';
// import { getDatabase, ref, set, onValue } from 'firebase/database';

// export default function AllDreams() {
//   const [postTime, setPostTime] = useState('');

//   // Function to get the post time from Firebase
//   const getPostTime = () => {
//     const db = getDatabase(app);
//     const postTimeRef = ref(db, 'postTimes'); // Assuming 'postTimes' is the node where post times are stored
//     onValue(postTimeRef, (snapshot) => {
//       const time = snapshot.val();
//       setPostTime(time);
//     });
//   };

//   useEffect(() => {
//     getPostTime();
//   }, []); // Run once on component mount

//   return (
//     <div className="font-sans">
//       <div className="bg-white max-w-md mx-auto my-8 border border-grey-light overflow-hidden">
//         <div className="flex pt-4 px-4">
//           <div className="px-2 pt-2 flex-grow">
//             <header>
//               <a href="#" className="text-black no-underline">
//                 <span className="font-medium">Account holder name + image</span>
//               </a>
//               <div className="text-xs text-grey flex items-center my-1">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="h-4 w-4 mr-1 feather feather-calendar"
//                 >
//                   <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
//                   <line x1="16" y1="2" x2="16" y2="6" />
//                   <line x1="8" y1="2" x2="8" y2="6" />
//                   <line x1="3" y1="10" x2="21" y2="10" />
//                 </svg>
//                 <span>{postTime}</span> {/* Display post time */}
//               </div>
//             </header>
//             {/* Rest of your component */}
//             {/* Title of dream ! + dropdown for content !!! : ) */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// // }
}
