 // Dreams table coonected to realtime db

// import React, { useState } from 'react';
// import { app } from '../firebase.config';
// import { getDatabase, ref, set } from 'firebase/database';
// import { auth } from '../firebase.config';
// import {  useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// //import firebase from 'firebase';




// const Catform = () => {
//     // State to track the selected category
//     const [selectedCategory, setSelectedCategory] = useState('');
//     // State to track the visibility of dropdown options
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     // State to track the input value for the title
//     const [title, setTitle] = useState('');
//     // Options for the dropdown


//     const [type,setTypeyourDreams] =useState('');  // changes
//     const options = ['Happy', 'Horror', 'Mystery', 'Weird', 'Fantasy', 'Fear'];
//     const [err, seterr] = useState('');
//     const navigate = useNavigate();

//     // Function to handle category selection
//     const handleCategoryChange = (event) => {
//         setSelectedCategory(event.target.value);
//     };

//     // Function to handle title input change
//     const handleTitleChange = (event) => {
//         setTitle(event.target.value);
//     };

//     // Function to toggle dropdown visibility
//     const toggleDropdown = () => {
//         setIsDropdownOpen(!isDropdownOpen);
//     };
//     const userId = auth.currentUser.uid;
//    // console.log(userId)
//     //console.log(userId.uid)

    
    
//     const [curr, setCurr] = useState('');
 
    
//     // const getDate = () => {
//     //     const a = firebase.firestore
//     //         .Timestamp.now()
//     //         .toDate().toString();
//     //     setCurr(a);
//     // }


//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         e.preventDefault();
       

//         const currentDate = new Date().toLocaleDateString();
//         const currentTime = new Date().toLocaleTimeString();


        
//         let newErr = '';
//         if (newErr !== '') {
//             seterr(newErr);
//             alert(err);
//             setTitle();
//             return;
//           }
//           if (newErr !== '') {
//             seterr(newErr);
//             alert(err);
//             setSelectedCategory();
//             return;
//           }
//           if (newErr !== '') {
//             seterr(newErr);
//             alert(err);
//             setTypeyourDreams();
//             return;
//           }
          

//     try {
//     // //     // const userCredential = await createUserWithEmailAndPassword(
//     // //     // auth,
//     // //    title,
//     // //    selectedCategory
//     //     );
// const db = getDatabase(app);
// console.log(title)
// console.log(selectedCategory)
// //console.log(Timestamp)



// //  set(ref(db, `Dreams/${userId}/1`),{
//     // DreamTitle: title,
//     // SelectaCategory:selectedCategory,
//     // TypeYourDreams: type,
//     // // Datetime: getDate,
    
    

    
// //   });
// const res = await fetch(
//         `https://dream-time-30692-default-rtdb.firebaseio.com//Dreams.json`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             user: userId,
//             title: title,
//             category:selectedCategory,
//             content: type,
//             posttime: `${currentDate} ${currentTime}`,
//             // Datetime: getDate,
//           }),
//         }
//       );


//   seterr('');
//   alert("Dream submitted successfully");
//   navigate('/');
// }
// catch(error){
//     alert("Failed to submit");
// }


// };

//     return (
//         <div className="flex justify-center items-center h-screen"> {/* Centering the block */}
//             <div className="max-w-md w-full p-10 bg-gray-800 rounded-lg shadow-md">
//                 {/* Title block */}
//                 <div className="mb-4">
//                     {/* Input block for title */}
//                     <div className="relative">
//                         <input
//                             type="text"
//                             value={title}
//                             onChange={handleTitleChange}
//                             placeholder="Dream Title"
//                             className="w-full px-3 py-2 border rounded-lg bg-gray-800 text-white focus:outline-none focus:border-blue-500"
//                         />
//                     </div>
//                 </div>

//                 {/* Category block with nested dropdown */}
//                 <div className="mb-4">
//                     <label className="block text-white text-sm font-semibold mb-2" htmlFor="categorySelect"></label>
//                     <div className="relative">
//                         <div
//                             className="w-full px-3 py-2 border rounded-lg bg-gray-800 text-white focus:outline-none focus:border-blue-500 cursor-pointer relative"
//                             onClick={toggleDropdown} // Toggle dropdown on click
//                         >
//                             {selectedCategory ? selectedCategory : 'Select a category'}
//                             {/* Inverted triangle symbol */}
//                             <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
//                                 <svg
//                                     className="h-4 w-4 fill-current text-white"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     viewBox="0 0 20 20"
//                                 >
//                                     <path d="M10 12.586l4.293-4.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 12.586z" />
//                                 </svg>
//                             </span>
//                         </div>
//                         {/* Dropdown options */}
//                         {isDropdownOpen && (
//                             <div className="absolute z-10 w-full mt-2 py-2 bg-gray-800 rounded-lg border border-gray-700">
//                                 {options.map((option, index) => (
//                                     <div
//                                         key={index}
//                                         className="px-4 py-2 cursor-pointer hover:bg-gray-700 text-white" // Added 'text-white' class
//                                         onClick={() => {
//                                             setSelectedCategory(option);
//                                             toggleDropdown(); // Close dropdown after selection
//                                         }}
//                                     >
//                                         {option}
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                 </div>
//                 {/* Other form elements */}
//                 <div className="mb-4">
//                     <label className="block text-white text-sm font-semibold mb-2" htmlFor="dream"></label>
//                     <textarea
//                         rows='4'
//                         cols='39'
//                         placeholder="Type your Dreams.."
//                         className="w-full px-3 py-2 border rounded-lg bg-gray-800 text-white focus:outline-none focus:border-blue-500" // Added 'text-white' class
//                         required
//                         type="text"
//                         value={type}  // changes
//                         onChange={(e) => setTypeyourDreams(e.target.value)}  
//                         id="dream"
//                     />
//                 </div>
//                 <div className='flex justify-center'>
//                     <button
//                         type="submit"
//                         onClick={
//                             handleSubmit
//                         }
//                         className="bg-pink-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-pink-600 focus:outline-white"  >
//                         Add
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Catform;





   // dreams table created in firestore only 

   import React, { useState } from 'react';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { auth } from '../firebase.config';
import { useNavigate } from 'react-router-dom';

const Catform = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [type, setTypeYourDreams] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [videoFile, setVideoFile] = useState(null);
    const [audioFile, setAudioFile] = useState(null);
    const [err, setErr] = useState('');
    const navigate = useNavigate();
    const userId = auth.currentUser ? auth.currentUser.uid : null;
    const options = ['Happy', 'Horror', 'Mystery', 'Weird', 'Fantasy', 'Fear'];

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleImageChange = (event) => {
        setImageFile(event.target.files[0]);
    };

    const handleVideoChange = (event) => {
        setVideoFile(event.target.files[0]);
    };

    const handleAudioChange = (event) => {
        setAudioFile(event.target.files[0]);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const currentDate = new Date().toLocaleDateString();
            const currentTime = new Date().toLocaleTimeString();

            let imageUrl = null;
            let videoUrl = null;
            let audioUrl = null;

            if (imageFile) {
                imageUrl = await uploadFile(imageFile);
            }
            if (videoFile) {
                videoUrl = await uploadFile(videoFile);
            }
            if (audioFile) {
                audioUrl = await uploadFile(audioFile);
            }

            const db = getFirestore();
            const dreamRef = collection(db, 'Dreams');

            const newDream = {
                userId: userId,
                title: title,
                category: selectedCategory,
                content: type,
                imageUrl: imageUrl,
                videoUrl: videoUrl,
                audioUrl: audioUrl,
                posttime: `${currentDate} ${currentTime}`,
            };

            await addDoc(dreamRef, newDream);

            setErr('');
            alert('Dream submitted successfully');
            navigate('/');
        } catch (error) {
            console.error('Error submitting dream:', error);
            alert('Failed to submit dream');
        }
    };

    const uploadFile = async (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        return new Promise((resolve, reject) => {
            reader.onload = (event) => {
                const base64Data = event.target.result.split(',')[1]; // Remove data prefix
                resolve(base64Data);
            };
            reader.onerror = (error) => {
                reject(error);
            };
        });
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-md w-full p-10 bg-gray-800 rounded-lg shadow-md">
                {/* Title Input */}
                <div className="mb-4">
                    <div className="relative">
                        <input
                            type="text"
                            value={title}
                            onChange={handleTitleChange}
                            placeholder="Dream Title"
                            className="w-full px-3 py-2 border rounded-lg bg-gray-800 text-white focus:outline-none focus:border-blue-500"
                        />
                    </div>
                </div>

                {/* Category Dropdown */}
                <div className="mb-4">
                    <label className="block text-white text-sm font-semibold mb-2" htmlFor="categorySelect"></label>
                    <div className="relative">
                        <div
                            className="w-full px-3 py-2 border rounded-lg bg-gray-800 text-white focus:outline-none focus:border-blue-500 cursor-pointer relative"
                            onClick={toggleDropdown}
                        >
                            {selectedCategory ? selectedCategory : 'Select a category'}
                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <svg
                                    className="h-4 w-4 fill-current text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 12.586l4.293-4.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 12.586z" />
                                </svg>
                            </span>
                        </div>
                        {isDropdownOpen && (
                            <div className="absolute z-10 w-full mt-2 py-2 bg-gray-800 rounded-lg border border-gray-700">
                                {options.map((option, index) => (
                                    <div
                                        key={index}
                                        className="px-4 py-2 cursor-pointer hover:bg-gray-700 text-white"
                                        onClick={() => {
                                            setSelectedCategory(option);
                                            toggleDropdown();
                                        }}
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Dream Content Textarea */}
                <div className="mb-4">
                    <label className="block text-white text-sm font-semibold mb-2" htmlFor="dream"></label>
                    <textarea
                        rows="4"
                        cols="39"
                        placeholder="Type your Dreams.."
                        className="w-full px-3 py-2 border rounded-lg bg-gray-800 text-white focus:outline-none focus:border-blue-500"
                        required
                        type="text"
                        value={type}
                        onChange={(e) => setTypeYourDreams(e.target.value)}
                        id="dream"
                    />
                </div>

                {/* Image Upload */}
                <div className="mb-4">
                    <label className="block text-white text-sm font-semibold mb-2" htmlFor="image"></label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="text-white"
                    />
                </div>

                {/* Video Upload */}
                <div className="mb-4">
                    <label className="block text-white text-sm font-semibold mb-2" htmlFor="video"></label>
                    <input
                        type="file"
                        accept="video/*"
                        onChange={handleVideoChange}
                        className="text-white"
                    />
                </div>

                {/* Audio Upload */}
                <div className="mb-4">
                    <label className="block text-white text-sm font-semibold mb-2" htmlFor="audio"></label>
                    <input
                        type="file"
                        accept="audio/*"
                        onChange={handleAudioChange}
                        className="text-white"
                    />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="bg-pink-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-pink-600 focus:outline-white"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Catform;
