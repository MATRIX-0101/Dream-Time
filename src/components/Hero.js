
// import React from 'react';
// import backgroundImage from '../assets/background.jpg'; // Import your background image
// import { useNavigate } from "react-router-dom";
// import Adddream from './Adddream';
// import { auth, app } from "../firebase.config";
// import { useEffect, useState } from "react";
// import Start from "./Start";

// export default function Hero() {
//   const [loggedin, setLoggedin] = useState(""); // Initialize loggedin state to false
  

//   useEffect(() => {
//     // const fetchData = async () => {
//     //   const userId = auth.currentUser.uid;
//     //   //  alert(userId);
//     //   const db = getDatabase(app);
//     //   const dbRef = ref(db, `user/${userId}`);
     
//     // };
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {

//         setLoggedin(true);

//         console.log(user.email);
//       } else {

//         setLoggedin(false); // User is not authenticated
//       }
//     });
//     return unsubscribe;
//   }, []);



//   return (
//     <div className="bg-cover bg-center h-max md:h-auto flex items-center justify-center text-center text-white" style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <div className="p-14">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">Dream World!</h1>
//         <p className="text-lg md:text-xl mb-6">Explore the beauty of different minds.</p>
//         {/* <button 
//         onClick={() => navigate('/catform')}
//         className="bg-[#a6c1ee] hover:bg-[#87acec] text-white px-6 py-3 rounded-md font-semibold transition duration-200 ease-in-out align-middle">
//         Start Journey</button> */}
//           {loggedin ?(<Adddream />) : (<Start />)}
//       </div>


      
//     </div>
//   );
// }



import React from 'react';
//import backgroundImage from '../assets/background.jpg'; // Import your background image
import backgroundImage from '../assets/moon.jpg';
import { useNavigate } from "react-router-dom";
import Adddream from './Adddream';
import { auth, app } from "../firebase.config";
import { useEffect, useState } from "react";
import Start from "./Start";

export default function Hero() {
  const [loggedin, setLoggedin] = useState(""); // Initialize loggedin state to false
  

  useEffect(() => {
    // const fetchData = async () => {
    //   const userId = auth.currentUser.uid;
    //   //  alert(userId);
    //   const db = getDatabase(app);
    //   const dbRef = ref(db, `user/${userId}`);
     
    // };
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {

        setLoggedin(true);

        console.log(user.email);
      } else {

        setLoggedin(false); // User is not authenticated
      }
    });
    return unsubscribe;
  }, []);



  return (
    <div className="bg-cover bg-center h-[3/4*screen] md:h-auto flex items-center justify-center text-center text-white pt-16 " style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="p-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Dream World!</h1>
        <p className="text-lg md:text-xl mb-6">Explore the beauty of different minds.</p>
        {/* <button 
        onClick={() => navigate('/catform')}
        className="bg-[#a6c1ee] hover:bg-[#87acec] text-white px-6 py-3 rounded-md font-semibold transition duration-200 ease-in-out align-middle">
        Start Journey</button> */}
          {loggedin ?(<Adddream />) : (<Start />)}
      </div>


      
    </div>
  );
}
