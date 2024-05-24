


// import React, { useState } from 'react';
// import { auth,app } from '../firebase.config';
// import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// import { toast } from "react-toastify";

// function DreamList({ filteredDreams, userId, userData, dropdownIndex, dropdownType, comment, handleImageClick, handleLike, toggleDropdown,handleComment,handleChange,socket }) {
    
//     // console.log(currentuser.uid);
//     console.log(filteredDreams);
//     // console.log(userData);
    
//     // const handleNotification =async(dreamuserId,type) => {
//     //   console.log(dreamuserId)
//     //   socket.emit("sendNotification",{
//     //     sender: userId,
//     //     receiver: dreamuserId,
//     //     type,
//     //   });
//     // }
//     const onClickFollow = async (dreamuserId,type) => {
//       // handleNotification(dreamuserId,type)
//       const user=auth.currentUser;
//       if (!user) {
//         alert("Please log in to like this dream.");
//         return;
//       }
//       const db = getFirestore(app);
//       const userRef = doc(db, 'user', dreamuserId);
  
//       // console.log(currentUserId);
//       // console.log(whomToFollowUserId);
  
//       try {
        
//         const userDoc = await getDoc(userRef);
  
//         if (!userDoc.exists()) {
//           alert("User not found.");
//           return;
//         }
        
//         const userData = userDoc.data()
//         const followers = userData.followers || [];
  
        
  
//         // Add the current user's ID to the followers array
//     followers.push(user.uid);
    
//     // Update the followers array in the user document
//     await setDoc(userRef, { ...userData, followers });
  
//         toast.success("Followed successfully!");
//       } catch (error) {
//         console.error("Error in following:", error);
//         toast.error("An error occurred while following.");
//       }
//     };

    

 
//   return (
//     // <>hello</>
//     <div className="font-sans">
//       {filteredDreams &&
//         filteredDreams.map((dream, index) => (
//           <div key={index} className="bg-white max-w-md mx-auto my-8 border border-grey-light overflow-hidden relative">
//             {userData && userData[dream.userId] && (
//               <div className="absolute top-2 left-2">
//                 <img
//                   src={userData[dream.userId].image}
//                   alt="Profile"
//                   className="w-12 h-12 rounded-full cursor-pointer"
//                   onClick={() => handleImageClick(userData[dream.userId].image)}
//                 />
//               </div>
//             )}
//             <div className="flex pt-4 px-4">
//               <div className="px-14 pt-0 flex-grow">
//                 <header className="flex justify-between items-center">
//                   {/* <div>
//                     <span className="font-medium">{userData && userData[dream.userId] ? userData[dream.userId].firstname : 'Unknown User'}</span>
//                     <span className="text-xs text-gray-500 block">{dream.posttime}</span>
//                   </div> */}
//                   <div>
//                   <span className="font-medium">
//                     {userData && userData.find(user => user.id === dream.userId) ? 
//                       userData.find(user => user.id === dream.userId).firstname : 'Unknown User'}
//                   </span>
//                   <span className="text-xs text-gray-500 block">{dream.posttime}</span>
//                 </div>

//                   <div className="font-bold cursor-pointer" onClick={() => toggleDropdown(index, 'title')}>
//                     {dream.title} &#9660;
//                   </div>
//                 </header>
//                 {/* <Follow 
//                     currentuserId={currentuser.uid}
//                     whomtoFollowUserId={dream.userId}
//                 /> */}

//                 <div>
//       <button onClick={() => onClickFollow(dream.userId,1)} className="block no-underline text-black flex px-4 py-2 items-center hover:bg-grey-lighter ml-4">
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus h-6 w-6 mr-1 stroke-current">
//           <path d="M16 16v-3m-4 4H8m8-4h3m-3 0v-3m-8 8V8m-4-4h8"></path>
//         </svg>
//         <span>Follow</span>
//       </button>
//     </div>
    




//                 {dropdownIndex === index && dropdownType === 'title' && (
//                   <div className="bg-gray-100 border border-gray-300 w-full mt-1 py-2 px-4">
//                     {dream.content}
//                   </div>
//                 )}
//                 <footer className="border-t border-grey-lighter text-sm flex mt-2">
//                   <button onClick={() => handleLike(dream.id,2)} className="block no-underline text-blue flex px-4 py-2 items-center hover:bg-grey-lighter" style={{ color: userData && userData.likedDreams && userData.likedDreams[dream.id] ? 'yellow' : 'black' }}>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up h-6 w-6 mr-1 stroke-current">
//                       <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
//                     </svg>
//                     <span>Liked</span>
//                   </button>
                  
//                   <button onClick={() => toggleDropdown(index, 'comment')} className="block no-underline text-black flex px-4 py-2 items-center hover:bg-grey-lighter">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle h-6 w-6 mr-1 stroke-current">
//                       <path d="M21 12a9 9 0 0 0-9-9"></path>
//                       <path d="M3 12a9 9 0 0 0 9 9"></path>
//                       <path d="M12 2a9 9 0 0 0-9 9"></path>
//                       <circle cx="19.5" cy="4.5" r="1.5"></circle>
//                       <circle cx="4.5" cy="4.5" r="1.5"></circle>
//                       <circle cx="19.5" cy="19.5" r="1.5"></circle>
//                       <circle cx="4.5" cy="19.5" r="1.5"></circle>
//                     </svg>
//                     <span>Comment</span>
//                   </button>
//                 </footer>
//                 {/* {dropdownIndex === index && dropdownType === 'comment' && (
                  
//                   <div className="bg-gray-100 border border-gray-300 w-full mt-1 py-2 px-4">
//                     {filteredDreams && filteredDreams.comments && filteredDreams.comments[dream.id].map((comment, commentIndex) => (
//                   <div key={commentIndex} className="border border-gray-400 mt-2 p-2">
                   
//                     <p>{comment.text}</p>
//                   </div>
//                 ))}
//                   <input type="text" placeholder="Leave your comments" className="border border-gray-400 py-1 px-2" id="comment" name="comment" value={comment} onChange={handleChange} />
//                   <button type="button" className="bg-purple-500  text-center" onClick={()=>handleComment(dream.id,3)}>comment</button>
//                 </div>
//                 )} */}
//                 {dropdownIndex === index && dropdownType === 'comment' && (
//               <div className="bg-gray-100 border border-gray-300 w-full mt-1 py-2 px-4">
//                 {dream.comments && dream.comments.map((comment, commentIndex) => (
//                   <div key={commentIndex} className="border border-gray-400 mt-2 p-2">
//                     <p>{comment.text}</p>
//                   </div>
//                 ))}
//                 <input type="text" placeholder="Leave your comments" className="border border-gray-400 py-1 px-2" id="comment" name="comment" value={comment} onChange={handleChange} />
//                 <button type="button" className="bg-purple-500 text-center" onClick={() => handleComment(dream.id, 3)}>comment</button>
//               </div>
//             )}
          
        
//               </div>
//             </div>
//           </div>
//         )).reverse()}
//     </div>
//   );
// }

// export default DreamList;




// working 


import React, { useState,useEffect } from 'react';
import { auth, app } from '../firebase.config';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { toast } from "react-toastify";

function DreamList({ filteredDreams, userId, userData, dropdownIndex, dropdownType, comment,reply, handleImageClick, handleLike, handleNotification, toggleDropdown, handleComment, handleReply, handleChange,handlereply }) {

  
  const [replyDropdownIndex, setReplyDropdownIndex] = useState(null);
  const [replyDropdownOpen, setReplyDropdownOpen] = useState(false);
  const [profileimg,setProfileimg] = useState("https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png")
  const db = getFirestore(app);

  const onClickFollow = async (dreamuserId) => {
    const user = auth.currentUser;
    if (!user) {
      alert("Please log in to like this dream.");
      return;
    }


   
    
    const userRef = doc(db, 'user', dreamuserId);

    try {

      const userDoc = await getDoc(userRef);

      if (!userDoc.exists()) {
        alert("User not found.");
        return;
      }

      const userData = userDoc.data()
      const followers = userData.followers || [];

      handleNotification(dreamuserId,4)

      followers.push(user.uid);

      await setDoc(userRef, { ...userData, followers });

      toast.success("Followed successfully!");
    } catch (error) {
      console.error("Error in following:", error);
      toast.error("An error occurred while following.");
    }
  };

  const [likedDreams, setLikedDreams] = useState({});

    

      useEffect(() => {
          // Update likedDreams state based on userData or any other source of liked dream information
          if (userData && userData.likedDreams) {
              setLikedDreams(userData.likedDreams);
          }
      }, [userData]);

  handleLike = async (dreamId) => {
          try {
            console.log('Handling like for dreamId:', dreamId);
    
            const dreamRef = doc(db, 'Dreams', dreamId);
            const dreamSnapshot = await getDoc(dreamRef);
    
            if (dreamSnapshot.exists()) {
              console.log('Dream document found:', dreamSnapshot.id);
              const dreamData = dreamSnapshot.data();
              const currentLikes = dreamData.likesCount || 0;
    
    
         // Check if the user already liked this dream
         if (likedDreams && likedDreams[dreamId]) {
          toast.info('You have already liked this dream.');
      } else {
          await setDoc(dreamRef, { ...dreamData, likesCount: currentLikes + 1 }, { merge: true });
          const updatedLikedDreams = { ...likedDreams, [dreamId]: true };
    
           setLikedDreams(updatedLikedDreams);
          toast.success('Dream liked successfully!');
      }
    } 
             else {
              console.error('Dream document not found.');
              toast.error('Dream not found.');
            }
          } catch (error) {
            console.error('Error handling like:', error);
            toast.error('Error handling like.');
          }
        };
  const toggleReplyDropdown = (index) => {
    setReplyDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
    setReplyDropdownOpen(true);
  };
  

  

  return (
    <div className="font-sans flex flex-wrap justify-center ">
      {filteredDreams &&
        filteredDreams.map((dream, index) => (
          <div key={index} className=" bg-white w-full md:w-2/3 lg:w-2/3 xl:w-2/3 my-8 mx-4 rounded-lg shadow-lg overflow-hidden relative">
            {userData && userData.find(user => user.id === dream.userId) && (
  <div className="absolute top-2 left-2">
    <img
      src={userData.find(user => user.id === dream.userId).image || "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"}
      alt="Profile"
      className="w-12 h-12 rounded-full cursor-pointer"
      onClick={() => handleImageClick(userData.find(user => user.id === dream.userId).image)}
    />
  </div>
)}




            <div className="flex align-right pt-4 px-4 bg-white w-full md:w-2/3 lg:w-2/3 xl:w-2/3 my-8 mx-auto rounded-lg shadow-lg overflow-hidden relative transition-transform transform hover:scale-105 hover:shadow-xl">
              <div className="px-14 pt-0 flex-grow">
                <header className="flex justify-between items-center">
                  <div>
                    <span className="font-bold">
                      {userData && userData.find(user => user.id === dream.userId) ? 
                        userData.find(user => user.id === dream.userId).firstname : 'Unknown User'}
                    </span>
                    <span className="text-xs text-gray-500 block">{dream.posttime}</span>
                  </div>
                  <div className="font-bold cursor-pointer" style={{ color: 'brown' }}  onClick={() => toggleDropdown(index, 'title')}>
                    {dream.title} &#9660;
                  </div>
                </header>
                <div>
                  <button onClick={() => onClickFollow(dream.userId)} className="block no-underline text-black flex px-4 py-2 items-center hover:bg-grey-lighter ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus h-6 w-6 mr-1 stroke-current">
                      <path d="M16 16v-3m-4 4H8m8-4h3m-3 0v-3m-8 8V8m-4-4h8"></path>
                    </svg>
                    <span>Follow</span>
                  </button>
                </div>
                {/* {dropdownIndex === index && dropdownType === 'title' && (
                  <div className="bg-gray-100 border border-gray-300 w-full mt-1 py-2 px-4">
                    {dream.content}
                  </div>
                )} */}
                {dropdownIndex === index && dropdownType === 'title' && (
  <div className="bg-gray-100 border border-gray-300 w-full mt-1 py-2 px-4">
    <p>{dream.content}</p>
    {dream.imageUrl && (
      <img src={dream.imageUrl} alt="Dream Image" className="my-4" />
    )}
    {dream.videoUrl && (
      <video controls className="my-4">
        <source src={dream.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )}
    {dream.audioUrl && (
      <audio controls className="my-4">
        <source src={dream.audioUrl} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
    )}
  </div>
)}

                <footer className="border-t border-grey-lighter text-sm flex mt-2">
 <button onClick={() => handleLike(dream.id)} className="block no-underline text-blue flex px-4 py-2 items-center hover:bg-grey-lighter" style={{  color: likedDreams[dream.id] ? 'red' : 'black', }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up h-6 w-6 mr-1 stroke-current">
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                    </svg>
                    <span>Liked ({dream.likesCount})</span>
                  </button>
                  <button onClick={() => toggleDropdown(index, 'comment')} className="block no-underline text-blue-500 flex px-4 py-2 items-center hover:bg-grey-lighter">
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
                  <div className="bg-gray-100 border border-gray-300 w-full mt-1 py-2 px-4 shadow-lg rounded-md">
                    {dream.comments && dream.comments.map((comment, commentIndex) => (
                      <div key={commentIndex} className="border border-gray-400 mt-2 p-2">
                        <p>{comment.text}</p>
                        <footer className="border-t border-grey-lighter text-sm flex mt-2">
                        <button onClick={() => toggleDropdown(index, 'reply')} className="block no-underline text-black flex px-4 py-2 items-center hover:bg-grey-lighter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle h-6 w-6 mr-1 stroke-current">
                      <path d="M21 12a9 9 0 0 0-9-9"></path>
                      <path d="M3 12a9 9 0 0 0 9 9"></path>
                      <path d="M12 2a9 9 0 0 0-9 9"></path>
                      <circle cx="19.5" cy="4.5" r="1.5"></circle>
                      <circle cx="4.5" cy="4.5" r="1.5"></circle>
                      <circle cx="19.5" cy="19.5" r="1.5"></circle>
                      <circle cx="4.5" cy="19.5" r="1.5"></circle>
                    </svg>
                    <span>Reply</span>
                  </button>
                  
                  

                        </footer>
                        <input type="text" placeholder="Leave your comments" className="border border-gray-400 py-1 px-2" id="reply" name="reply" value={reply} onChange={handlereply} />
                    <button type="button" className="bg-purple-500 text-center text-white py-1 px-4 rounded-md mt-2" onClick={() => handleReply(dream.id,comment.id,dream.userId)}>Reply</button>
                  
                      </div>
                    ))}
                    <input type="text" placeholder="Leave your comments" className="border border-gray-400 py-1 px-2" id="comment" name="comment" value={comment} onChange={handleChange} />
                    <button type="button" className="bg-purple-500 text-center text-white py-1 px-4 rounded-md mt-2" onClick={() => handleComment(dream.id,dream.userId)}>Comment</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default DreamList;



