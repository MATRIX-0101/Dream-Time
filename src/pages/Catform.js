
// // import React, { useState } from 'react';

// // const Catform = () => {
// //     // State to track the selected category
// //     const [selectedCategory, setSelectedCategory] = useState('');
// //     // State to track the visibility of dropdown options
// //     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// //     // Options for the dropdown
// //     const options = ['Happy', 'Horror', 'Mystery', 'Weird', 'Fantasy', 'Fear'];

// //     // Function to handle category selection
// //     const handleCategoryChange = (event) => {
// //         setSelectedCategory(event.target.value);
// //     };

// //     // Function to toggle dropdown visibility
// //     const toggleDropdown = () => {
// //         setIsDropdownOpen(!isDropdownOpen);
// //     };

// //     return (

// //         <div className=" justify-center p-10">
// //             <div className="max-w-md w-full mx-auto p-6 bg-gray-800 rounded-lg shadow-md">
// //             <h2 className="text-3xl text-center text-pink-600 font-bold mb-6">Hello Dreamers!</h2>
// //             <div className='mb-4'>
// //                 <label className="block text-white text-sm font-semibold mb-2" htmlFor="categorySelect"></label>



              


// //                 {/* Category block with nested dropdown */}
// //                 <div className="relative">
// //                     <div
// //                         className="w-full px-3 py-2 border rounded-lg bg-gray-800 text-white focus:outline-none focus:border-blue-500 cursor-pointer relative"
// //                         onClick={toggleDropdown} // Toggle dropdown on click
// //                     >
// //                         {selectedCategory ? selectedCategory : 'Select a category'}
// //                         {/* Inverted triangle symbol */}
// //                         <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
// //                             <svg
// //                                 className="h-4 w-4 fill-current text-white"
// //                                 xmlns="http://www.w3.org/2000/svg"
// //                                 viewBox="0 0 20 20"
// //                             >
// //                                 <path d="M10 12.586l4.293-4.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 12.586z" />
// //                             </svg>
// //                         </span>
// //                     </div>
// //                     {/* Dropdown options */}
// //                     {isDropdownOpen && (
// //                         <div className="absolute z-10 w-full mt-2 py-2 bg-gray-800 rounded-lg border border-gray-700">
// //                             {options.map((option, index) => (
// //                                 <div
// //                                     key={index}
// //                                     className="px-4 py-2 cursor-pointer hover:bg-gray-700 text-white" // Added 'text-white' class
// //                                     onClick={() => {
// //                                         setSelectedCategory(option);
// //                                         toggleDropdown(); // Close dropdown after selection
// //                                     }}
// //                                 >
// //                                     {option}
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     )}
// //                 </div>
// //             </div>
// //             {/* Other form elements */}
// //             <div className="mb-4">
// //                 <label className="block text-white text-sm font-semibold mb-2" htmlFor="dream"></label>
// //                 <textarea
// //                     rows='4'
// //                     cols='39'
// //                     placeholder="Type your Dreams.."
// //                     className="w-full px-3 py-2 border rounded-lg bg-gray-800 text-white focus:outline-none focus:border-blue-500" // Added 'text-white' class
// //                     required
// //                     type="text"
// //                     id="dream"
// //                 />
// //             </div>
// //             <div className='flex justify-center'>
// //                 <button
// //                     type="submit"
// //                     className="bg-pink-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-pink-600 focus:outline-white"
// //                 >
// //                     Add
// //                 </button>
// //             </div>
// //         </div>
// //         </div>
        
// //     );
// // };

// // export default Catform;

// import React, { useState } from 'react';
// import { getDatabase, ref, set, push } from 'firebase/database';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { app } from '../firebase.config';



// const Catform = () => {
//     // State to track the selected category
//     const [selectedCategory, setSelectedCategory] = useState('');
//     // State to track the visibility of dropdown options
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     // State to track the input value for the title
//     const [title, setTitle] = useState('');
//     // Options for the dropdown
//     const options = ['Happy', 'Horror', 'Mystery', 'Weird', 'Fantasy', 'Fear'];

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

//     return (
//         <div className="max-w-md w-full mx-auto p-6 bg-gray-800 rounded-lg shadow-md">
//             {/* Title block */}
//             <div className="mb-4">
//                 {/* Input block for title */}
//                 <div className="relative">
//                     <input
//                         type="text"
//                         value={title}
//                         onChange={handleTitleChange}
//                         placeholder="Dream Title"
//                         className="w-full px-3 py-2 border rounded-lg bg-gray-800 text-white focus:outline-none focus:border-blue-500"
//                     />
//                 </div>
//             </div>

//             {/* Category block with nested dropdown */}
//             <div className="mb-4">
//                 <label className="block text-white text-sm font-semibold mb-2" htmlFor="categorySelect"></label>
//                 <div className="relative">
//                     <div
//                         className="w-full px-3 py-2 border rounded-lg bg-gray-800 text-white focus:outline-none focus:border-blue-500 cursor-pointer relative"
//                         onClick={toggleDropdown} // Toggle dropdown on click
//                     >
//                         {selectedCategory ? selectedCategory : 'Select a category'}
//                         {/* Inverted triangle symbol */}
//                         <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
//                             <svg
//                                 className="h-4 w-4 fill-current text-white"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 viewBox="0 0 20 20"
//                             >
//                                 <path d="M10 12.586l4.293-4.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 12.586z" />
//                             </svg>
//                         </span>
//                     </div>
//                     {/* Dropdown options */}
//                     {isDropdownOpen && (
//                         <div className="absolute z-10 w-full mt-2 py-2 bg-gray-800 rounded-lg border border-gray-700">
//                             {options.map((option, index) => (
//                                 <div
//                                     key={index}
//                                     className="px-4 py-2 cursor-pointer hover:bg-gray-700 text-white" // Added 'text-white' class
//                                     onClick={() => {
//                                         setSelectedCategory(option);
//                                         toggleDropdown(); // Close dropdown after selection
//                                     }}
//                                 >
//                                     {option}
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             </div>
//             {/* Other form elements */}
//             <div className="mb-4">
//                 <label className="block text-white text-sm font-semibold mb-2" htmlFor="dream"></label>
//                 <textarea
//                     rows='4'
//                     cols='39'
//                     placeholder="Type your Dreams.."
//                     className="w-full px-3 py-2 border rounded-lg bg-gray-800 text-white focus:outline-none focus:border-blue-500" // Added 'text-white' class
//                     required
//                     type="text"
//                     id="dream"
//                 />
//             </div>
//             <div className='flex justify-center'>
//                 <button
//                     type="submit"
//                     className="bg-pink-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-pink-600 focus:outline-white"
//                 >
//                     Add
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Catform;






import React, { useState } from 'react';
import { app } from '../firebase.config';
import { getDatabase, ref, set, push } from 'firebase/database';



const Catform = () => {
    // State to track the selected category
    const [selectedCategory, setSelectedCategory] = useState('');
    // State to track the visibility of dropdown options
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    // State to track the input value for the title
    const [title, setTitle] = useState('');
    // Options for the dropdown
    const options = ['Happy', 'Horror', 'Mystery', 'Weird', 'Fantasy', 'Fear'];

    // Function to handle category selection
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    // Function to handle title input change
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };





    // try {
    //     const userCredential = await createUserWithEmailAndPassword(
    //       auth,
    //       details.title,
    //       details.email,
    //       details.yourdream,
    //       details.selectedCategory
    //     );
    //     const user = userCredential.user;
    //     const db = getDatabase(app);
    //     set(ref(db, `user/${user.uid}`), {
    //       title: details.title,
    //       yourdream: details.yourdream,
    //       email: details.email,
    //       selectedCategory: details.selectedCategory,
    //       // confpassword: details.confpassword,
    //     });
    //     seterr('');
    //     // localStorage.setItem('authToken', auth.authToken);
    //     setnewUser(initialDetails);
    //     alert('Form submitted successful!');
    //     navigate('/'); // Navigate to the home page after successful registeration
    //   } catch (error) {
    //     alert('unsuccessful');
    //     // seterr(error.message);
    //   }




    return (
        <div className="flex justify-center items-center h-screen"> {/* Centering the block */}
            <div className="max-w-md w-full p-10 bg-gray-800 rounded-lg shadow-md">
                {/* Title block */}
                <div className="mb-4">
                    {/* Input block for title */}
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

                {/* Category block with nested dropdown */}
                <div className="mb-4">
                    <label className="block text-white text-sm font-semibold mb-2" htmlFor="categorySelect"></label>
                    <div className="relative">
                        <div
                            className="w-full px-3 py-2 border rounded-lg bg-gray-800 text-white focus:outline-none focus:border-blue-500 cursor-pointer relative"
                            onClick={toggleDropdown} // Toggle dropdown on click
                        >
                            {selectedCategory ? selectedCategory : 'Select a category'}
                            {/* Inverted triangle symbol */}
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
                        {/* Dropdown options */}
                        {isDropdownOpen && (
                            <div className="absolute z-10 w-full mt-2 py-2 bg-gray-800 rounded-lg border border-gray-700">
                                {options.map((option, index) => (
                                    <div
                                        key={index}
                                        className="px-4 py-2 cursor-pointer hover:bg-gray-700 text-white" // Added 'text-white' class
                                        onClick={() => {
                                            setSelectedCategory(option);
                                            toggleDropdown(); // Close dropdown after selection
                                        }}
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                {/* Other form elements */}
                <div className="mb-4">
                    <label className="block text-white text-sm font-semibold mb-2" htmlFor="dream"></label>
                    <textarea
                        rows='4'
                        cols='39'
                        placeholder="Type your Dreams.."
                        className="w-full px-3 py-2 border rounded-lg bg-gray-800 text-white focus:outline-none focus:border-blue-500" // Added 'text-white' class
                        required
                        type="text"
                        id="dream"
                    />
                </div>
                <div className='flex justify-center'>
                    <button
                        type="submit"
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


