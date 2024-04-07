import React, { useState } from 'react';
 import { getDatabase, ref, set, push} from "firebase/database";
import { app , auth} from "../firebase.config";
import bgimg from "../assets/mountains.avif"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegisterPage() {

  const initialDetails = {
    firstname : "",
    surname: "",
    email: "",
    password: "",
    confpassword: "",
  };
  const [details, setnewUser] = useState( initialDetails)

  const handleChange = async(e) => {
    setnewUser({ ...details, [e.target.name]: e.target.value})
  };
  const encodeEmail = (email) => {
    return email.replace(/\./g, ",").replace(/#/g, "%23");
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
    

  //   // const user=userCredential.user;
  //   const db = getDatabase(app);
  //   const newDocRef = push(ref(db, `user`));
  //   set(newDocRef, {
      // firstname: details.firstname,
      // surname: details.surname,
      // email : details.email,
      // password: details.password,
      // confpassword: details.confpassword,
  //   }).then(() => {
  //     alert("Data stored successfully");
  //   }).catch((error) => {
  //     console.error('Error storing data:', error);
  //   });
  // };

  const [err, seterr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enco = encodeEmail(details.email);
    e.preventDefault();
    let newErr = "";

    if (details.password !== details.confpassword) {
      newErr += "\nPassword should match with confirm password";
      seterr(newErr);
      return;
    }

    if (newErr !== "") {
      // alert(details.password+"   "+details.confirmPassword);
      seterr(newErr);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        details.email,
        details.password
      );
      const user = userCredential.user;
      console.log(userCredential);
      const db = getDatabase(app);
      set(ref(db, `user/${user.uid}`), {
        firstname: details.firstname,
      surname: details.surname,
      email : details.email,
      password: details.password,
      confpassword: details.confpassword,
      });
      seterr("");
      localStorage.setItem("authToken", auth.authToken);
      // navigate('/');
      // window.location.reload();
      setnewUser(initialDetails);
      alert("reg successful !!");


      // toast.success("Registered successfully!!!");
      // Delay the toast by 5000 milliseconds (5 seconds)
    } catch (error) {
      seterr(error.message);
    }
  };
  return (
    <div className="min-h-screen py-40" style={{ backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)" }}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${bgimg})` }}>
            <h1 className="text-white text-5xl mb-3">Dream World</h1>
            <div>
              <p className="text-white">Explore the beauty of different minds </p>
            </div>    
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Register</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-5">
              <input type="text" placeholder="Firstname" className="border border-gray-400 py-1 px-2"
                  id="firstname"
                  name="firstname"
                  value={details.firstname}
                  onChange={handleChange}
                  required
                />

                <input type="text" placeholder="Surname" className="border border-gray-400 py-1 px-2" 
                id="surname"
                name="surname"
                value={details.surname}
                onChange={handleChange} 
                 required/>
              </div>
              <div className="mt-5">
                <input type="text" placeholder="Email" className="border border-gray-400 py-1 px-2 w-full" 
                id="email"
                name="email"
                value={details.email}
                onChange={handleChange} 
                 required/>
              </div>
              <div className="mt-5">
                <input type="password" placeholder="Password" className="border border-gray-400 py-1 px-2 w-full" 
                id="password"
                name="password"
                value={details.password}
                onChange={handleChange} 
                 required/>
              </div>
              <div className="mt-5">
                <input type="password" placeholder="Confirm Password" className="border border-gray-400 py-1 px-2 w-full" 
                id="confpassword"
                name="confpassword"
                value={details.confpassword}
                onChange={handleChange} 
                 required/>
              </div>
              {/* <div className="mt-5">
                <input type="checkbox" className="border border-gray-400" />
                <span>
                  I accept the <a href="#" className="text-purple-500 font-semibold">Terms of Use</a> & <a href="#" className="text-purple-500 font-semibold">Privacy Policy</a>
                </span>
              </div> */}
              <div className="mt-5">
                <button type="submit" className="w-full bg-purple-500 py-3 text-center text-white">Register Now</button>
              </div>
              <div>
              <a href="/login" className="text-purple-500 font-semibold">Already have account ?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;