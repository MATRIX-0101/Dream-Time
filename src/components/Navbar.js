
// import { useNavigate } from "react-router-dom";
// import React, { useState } from "react";
// import logo from "../assets/logo.jpg"

// export default function Navbar({ fixed }) {

//   const navigate = useNavigate();
//   const [loggedin, setLoggedin] = useState(false); // Initialize loggedin state to false

//   // Function to handle sign out
//   const handleSignOut = () => {
//     // Perform sign out logic here
//     setLoggedin(false); // Update loggedin state to false after sign out
//     navigate("/signin"); // Redirect to sign in page after sign out
//   };

//   return (
//     <>
//       <div className="">

//         <header className="bg-white">

//           <nav className="flex justify-between items-center w-[92%] mx-auto">
//             <div>
//               <img
//                 className="w-16 cursor-pointer"
//                 src={logo}
//                 alt="..."
//               />
//             </div>
//               <div>
//               <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
//                 {/* <li>
//                   <a className="hover:text-gray-500" href="javascript:void(0)">Products</a>
//                 </li> */}
//                 <li>
//                   <a className="hover:text-gray-500" href="javascript:void(0)">Home</a>
//                 </li>
//                 <li>
//                   <a className="hover:text-gray-500" href="javascript:void(0)">Genre</a>
//                 </li>
//                 <li>
//                   <a className="hover:text-gray-500" href="javascript:void(0)">About</a>
//                 </li>
//                 {/* <li>
//                   <a className="hover:text-gray-500" href="javascript:void(0)">Pricing</a>
//                 </li> */}
//               </ul>
//             </div>
//             <div className="flex items-center gap-6">
//               {loggedin ? (
//                 // If user is logged in, show sign-out button
//                 <button onClick={handleSignOut} className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600">Sign out</button>
//               ) : (
//                 // If user is not logged in, show sign-in button
//                 <button onClick={() => {navigate('/register')}} className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in</button>
//               )}
//             </div>
//           </nav>
//         </header>
//       </div>
//     </>
//   );
// }


// import { useNavigate } from "react-router-dom";
// import React, { useState } from "react";
// import logo from "../assets/logo.jpg";

// export default function Navbar({ fixed }) {
//   const navigate = useNavigate();
//   const [loggedin, setLoggedin] = useState(false); // Initialize loggedin state to false
//   const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility

//   // Function to handle sign out
//   const handleSignOut = () => {
//     // Perform sign out logic here
//     setLoggedin(false); // Update loggedin state to false after sign out
//     navigate("/signin"); // Redirect to sign in page after sign out
//   };

//   // Function to toggle dropdown visibility
//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown); // Toggle dropdown visibility
//   };

//   return (
//     <>
//       <div className="">
//         <header className="bg-white">
//           <nav className="flex justify-between items-center w-[92%] mx-auto">
//             <div>
//               <img className="w-16 cursor-pointer" src={logo} alt="..." />
//             </div>
//             <div>
//               <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
//                 <li>
//                   <a className="hover:text-gray-500" href="javascript:void(0)">Home</a>
//                 </li>
//                 <li className="relative">
//                   <button className="hover:text-gray-500 focus:outline-none" onClick={toggleDropdown}>Genre</button>
//                   {showDropdown && (
//                     <ul className="absolute left-0 top-full bg-white shadow-md py-2 mt-1">
//                       <li>
//                         <a className="hover:text-gray-500 block px-4 py-2" href="javascript:void(0)">Action</a>
//                       </li>
//                       <li>
//                         <a className="hover:text-gray-500 block px-4 py-2" href="javascript:void(0)">Adventure</a>
//                       </li>
//                       <li>
//                         <a className="hover:text-gray-500 block px-4 py-2" href="javascript:void(0)">Comedy</a>
//                       </li>
//                       {/* Add more genres as needed */}
//                     </ul>
//                   )}
//                 </li>
//                 <li>
//                   <a className="hover:text-gray-500" href="javascript:void(0)">About</a>
//                 </li>
//               </ul>
//             </div>
//             <div className="flex items-center gap-6">
//               {loggedin ? (
//                 // If user is logged in, show sign-out button
//                 <button onClick={handleSignOut} className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600">Sign out</button>
//               ) : (
//                 // If user is not logged in, show sign-in button
//                 <button onClick={() => {navigate('/register')}} className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in</button>
//               )}
//             </div>
//           </nav>
//         </header>
//       </div>
//     </>
//   );
// }


import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import dreamerlogo from "../assets/dreamerlogo.png";
import { FaAngleDown } from "react-icons/fa"; // Import FontAwesome icon for downward arrow
import Logout from "./Logout";
import Signin from "./Signin";
import { auth, app } from "../firebase.config";
import { getDatabase, ref, set, get } from "firebase/database";
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export default function Navbar({ fixed }) {
  const navigate = useNavigate();
  const [loggedin, setLoggedin] = useState(""); // Initialize loggedin state to false
  const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility
  const [data, setData] = useState([]);


  // used inbuilt auth function of firebase, no need to use local storage as local storage is inefficient while using firebase
  useEffect(() => {
    

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

    if (userData && userData.image) {
      setData(userData.image);
    } else {
      console.log("Image not found in data:", userData);
      setData("https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

    
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {

        setLoggedin(true);

        console.log(user.email);
        fetchData();
      } else {

        setLoggedin(false); // User is not authenticated
      }
    });
    return unsubscribe;
  }, []);


  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown); // Toggle dropdown visibility
  };

  return (
    <>
      <div className="">
        <header className="bg-white">
          <nav className="flex justify-between items-center w-[92%] mx-auto">
            <div>
              <img className="w-16 cursor-pointer" src={dreamerlogo} alt="..." />
            </div>
            <div>
              <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li className="relative">
                  <a className="hover:text-gray-500 hover: font-bold" href="/">Home</a>
                </li>
                {/* <li className="relative">
                  <button className="hover:text-gray-500 flex items-center focus:outline-none" onClick={toggleDropdown}>
                    <span>Genre</span>
                    <FaAngleDown className="ml-1" /> 
                  </button>
                  {loggedin && showDropdown && (
                    <ul className="absolute left-0 top-full bg-white shadow-md py-2 mt-1">
                      <li>
                        <a className="hover:text-gray-500 block px-4 py-2" href="javascript:void(0)">Action</a>
                      </li>
                      <li>
                        <a className="hover:text-gray-500 block px-4 py-2" href="javascript:void(0)">Adventure</a>
                      </li>
                      <li>
                        <a className="hover:text-gray-500 block px-4 py-2" href="javascript:void(0)">Comedy</a>
                      </li>
                
                    </ul>
                  )}
                </li> */}
                {loggedin && (
                  <li className="relative">
                  <a className="hover:text-gray-500 hover: font-bold" href="/alldreams">All Dreams</a>
                </li>
                )}
                <li className="relative">
                  <a className="hover:text-gray-500 hover: font-bold" href="javascript:void(0)">About</a>
                </li>
                {loggedin && (
                  <li className="relative">
                  <a className="hover:text-gray-500 hover: font-bold" href="/notifications">Notifications</a>
                </li>
                )}
              </ul>
            </div>
            <div className="flex items-center gap-6">
              {/* {loggedin ? (
                // If user is logged in, show sign-out button
                <button onClick={handleSignOut} className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600">Sign out</button>
              ) : (
                // If user is not logged in, show sign-in button
                <button onClick={() => {navigate('/register')}} className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in</button>
              )} */}
              {/* <div className=" flex gap-4"> */}

            {!loggedin ? (<Signin />) : (<><button
                    onClick={() => navigate("/mydreams")}
                    className="w-10 h-10 rounded-full overflow-hidden focus:outline-none"
                  >
                    <img
                      src={data}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </button><></> <Logout /> </>)}
          {/* </div> */}
            </div>



 

            





          </nav>
        </header>
      </div>
    </>
  );
}
