// import React from 'react'

// export default function Login() {
//   return (
//     <>
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>
//         <form>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
//             <input
//               id="username"
//               type="text"
//               placeholder="Username"
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
//             <input
//               id="password"
//               type="password"
//               placeholder="Password"
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
//           >
//             Sign In
//           </button>
//         </form>
//       </div>
//     </div>
//     </>
//   )
// }
// <p className="text-white">Explore the beauty of different minds <a href="#" className="text-purple-500 font-semibold">Learn more</a></p>

// import React, { useState } from 'react';
// import { getDatabase, ref, set ,child,get} from "firebase/database";
//import { app } from "../firebase.config";
import bgimg from "../assets/world.jpeg";
//  import { app, auth } from "../firebase.config"; 
import CryptoJS from 'crypto-js'; // Import CryptoJS
import { stringify } from 'json-stringify-safe';



// function LoginPage() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
// //   const Firstname = 'shweta';
// //   const dbpass = 'examplePassword';
// //   const pass = 'userPassword';

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
      
//   const handleClick = () => {
//     console.log('Button clicked');
//     // Add your logic here
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     set(dbRef, {
//         username: formData.username,
//         password: formData.password
//       }).then(() => {
//         alert('Login successful!');
//       }).catch((error) => {
//         console.error('Error logging in:', error);
//       });
//     };

//     const db = getDatabase(app);
//     const encryptedPassword = CryptoJS.MD5(formData.password).toString();
//     const dbRef = ref(db, 'users/' + formData.username); // Define database reference
//     const Firstname = formData.username; // Example: Get username
//     const dbpass = 'exampleDbPassword'; // Example: Get database password
//     const pass = formData.password; // Example: Get user password

  



//       // Sample code to add event listener after ensuring element existence

// // const element = document.getElementById('Password');//Exammpleelemnetid
// // if (element) {
// //   element.addEventListener('click', handleClick);
// // }
// // else {
// //     console.error('Element not found!');
// //   }


//     // Assuming you have a 'users' collection in your database
//     const usersRef = ref(db, 'users');
//     // Perform authentication logic here, such as signing in with email and password
//     // Example using Firebase Authentication:
//     auth.signInWithEmailAndPassword(formData.email, formData.password)
//       .then((userCredential) => {
//         // Signed in successfully, you can redirect or perform other actions here
//         alert("Login successful!");
//       })
//       .catch((error) => {
//         // Handle errors here
//         console.error('Error logging in:', error);
//         alert("Error logging in. Please check your credentials.");
//       });
  
        
//            // REFERENCES

           
//            const Email= document.getElementById('emailInp');
//            if (Email !== null) {
//             Email.addEventListener('click', handleClick);
//               } 
//                else {
//              console.error('Element not found or is null');
//             } 

//            const Password= document.getElementById('passInp');
//            if (Password!== null) {
//             Password.addEventListener('click', handleClick);
//               } 
//                else {
//              console.error('Element not found or is null');
//             } 

//            const submit= document.getElementById('sub_btn');
//            if (submit !== null) {
//             submit.addEventListener('click', handleClick);
//               } 
//                else {
//              console.error('Element not found or is null');
//             } 

//            // authentication



           
              

              


//              function AuthenticateUser(){
//                 const dbref=ref(db);

//                 get(child(dbRef,"UsersList/"+ Firstname.value)).then((snapshot)=>{
//                     if(snapshot.exists()){
//                      let dbPassword=decpass(snapshot.val().Password);
//                      if(dbpass==pass.value){
//                         login(snapshot.val());
//                      }
//                      else{
//                         alert("user does not exist");
//                      }
//                     }
//                     else{
//                       alert("username or password is invalid");
//                     }
  
//                 })
//              }
//                // DECRYTION PROCESS

//                function decpass(dbPassword){
//                 var Password12=CryptoJS.AES.decrypt(dbPassword,Password.value);
//                  return Password12.toString(CryptoJS.enc.Utf8);
//               }

//               // LOGIN

//               function login(user){
//                 let keepLoggedIn=document.getElementById('customSwitch1').checked;

//             if(!keepLoggedIn){
//                 sessionStorage.setItem('user',JSON.stringify(user));
//                 window.location="HomePage.js";
//             }
//               else{
//                 localStorage.setItem('keepLoggedIn','yes');
//                 localStorage.setItem('user',stringify(user));
//                 window.location="HomePage.js";
//               }

//               }

//               // ASSIGN THE EVENT

//               submit.addEventListener('click',AuthenticateUser);
    

//   return (
//     <div className="min-h-screen py-40" style={{ backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)" }}>
//       <div className="container mx-auto">
//         <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
//           <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${bgimg})` }}>
//             <h1 className="text-white text-5xl mb-3"> Welcome </h1>
//             <div>
            
//             </div>    
//           </div>
//           <div className="w-full lg:w-1/2 py-16 px-12">
//             <h2 className="text-3xl mb-4">Login</h2>
//             <p className="mb-4">
//               Log into your account to continue
//             </p>
//             <form onSubmit={handleSubmit}>
//               <div className="mt-5">
//                 <input type="text" placeholder="Email"   id="emailInp"  name="email" value={formData.email} onChange={handleChange} className="border border-gray-400 py-1 px-2 w-full" />
//               </div>
//               <div className="mt-5">
//                 <input type="password" placeholder="Password" name="password"  id="passInp" value={formData.password} onChange={handleChange} className="border border-gray-400 py-1 px-2 w-full" />
//               </div>
//               <div className="mt-5">
//               <div class="custom-control custom-switch">
//                 <input type="checkbox" class="custom-control-input" id="customSwitch1" />
//                     <label class="custom-control-label"  className="mb-4" for="customSwitch1"> keep me logged in </label>
//                     </div>
//                 <button type="submit" className="w-full bg-purple-500 py-3 text-center text-white">Login</button>
//                 <a href="Register.js" class="badge badge-secondary "></a>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
//   }

// export default LoginPage;

// import React, { useState } from 'react';
// import { getDatabase, ref, get } from "firebase/database";
// //import { app } from "../firebase.config";
// import bgimg from "../assets/world.jpeg";
// import { app, auth } from "../firebase.config";

// function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
    
//   );
// }

// export default LoginPage;



import React from "react";
import { useState, useRef } from "react";
import { useEffect } from "react";
import Register from "./Register";
import { app } from "../firebase.config";
import { getDatabase, ref, get } from "firebase/database";
import { auth } from "../firebase.config";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
//   const [showModal, setShowModal] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, seterr] = useState("");

//   const modalRef = useRef(null);
//   useEffect(() => {
//     const handleOutsideClick = (e) => {
//       // Check if the click target is not a descendant of the modal content
//       if (modalRef.current && !modalRef.current.contains(e.target)) {
//         setShowModal(false);
//       }
//     };

//     if (showModal) {
//       document.body.style.overflow = "hidden";
//       document.body.style.height = "100vh";
//       document.addEventListener("mousedown", handleOutsideClick);
//     } else {
//       document.body.style.overflow = "unset";
//       document.body.style.height = "auto";
//       document.removeEventListener("mousedown", handleOutsideClick);
//     }

//     return () => {
//       document.body.style.overflow = "unset";
//       document.body.style.height = "auto";
//       document.removeEventListener("mousedown", handleOutsideClick);
//     };
//   }, [showModal]);

  const signInwithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("authToken", result.authToken);
        toast.success("logged in successfully!!");
        // setShowModal(false);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("authToken", auth.authToken);
      toast.success("logged in successfully");
      localStorage.setItem("token", "loggedin");
    //   setShowModal(false);
    } catch (error) {
      seterr(error.message);
    }
  };

//   useEffect(() => {
//     if (showModal) {
//       document.body.style.overflow = "hidden";
//       document.body.style.height = "100vh";
//     } else {
//       document.body.style.overflow = "unset";
//       document.body.style.height = "auto";
//     }

//     return () => {
//       document.body.style.overflow = "unset";
//       document.body.style.height = "auto";
//     };
//   }, [showModal]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

  return (
    <>
    <div className="min-h-screen py-40" style={{ backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)" }}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${bgimg})` }}>
            <h1 className="text-white text-5xl mb-3"> Welcome </h1>
            <div>
            
            </div>    
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Login</h2>
            <p className="mb-4">
              Log into your account to continue
            </p>
            <form onSubmit={handleLogin}>
              <div className="mt-5">
                <input type="text" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-400 py-1 px-2 w-full" />
              </div>
              <div className="mt-5">
                <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border border-gray-400 py-1 px-2 w-full" />
              </div>
              <div className="mt-5">
                <button type="submit" className="w-full bg-purple-500 py-3 text-center text-white">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
      {/* <button
        className="bg-pink-500 text-white mx-3 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Login
      </button>

      {showModal ? (
        <>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none max-h-full">
            <div
              className="relative p-4 w-full max-w-md max-h-full"
              ref={modalRef}
            >
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-center text-center justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl pl-6 font-semibold text-center flex justify-center ml-auto mr-auto">
                    Login
                  </h3>
                  <div>
                    <button
                      type="button"
                      class="end-2.5 text-gray-400 bg-transparent hover:bg-red-500 hover:text-white rounded-lg 
                  text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="authentication-modal"
                      onClick={() => setShowModal(false)}
                    >
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <form
                    onSubmit={handleSubmit}
                    action=""
                    className="w-full max-w-md bg-white rounded px-8 pt-6 pb-8"
                  >
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-1">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <div className="flex justify-end">
                        <a 
                          href="/forgotpassword"
                          className="text-right text-blue-500 font-semibold text-sm"
                        >
                          forgot password?
                        </a>
                      </div>

                      <button
                        className="bg-emerald-500 my-5 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 block w-full"
                        type="submit"
                        onClick={handleLogin}
                      >
                        Login
                      </button>
                    </div>
                    <div className="text-sm font-medium text-gray-500 pt-2 gap-1 dark:text-gray-300 flex justify-center">
                      <p>Don't have an account?</p>
                      <Register />
                    </div>
                    <div className="text-sm font-medium text-gray-500 text-center">
                      Or
                    </div>

                    <div className="flex items-center justify-center mb-4">
                      <button
                        type="button"
                        className="bg-blue-700 hover:bg-blue-800 my-5 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 block w-full"
                        onClick={signInwithGoogle}
                      >
                        Login with Google
                      </button>
                    </div>
                  </form>
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null} */}
    </>
  );
}