import React from "react";
import { useState, useRef } from "react";
import { useEffect } from "react";
import Register from "./Register";
import { app } from "../firebase.config";
import { getDatabase, ref, get } from "firebase/database";
import { auth } from "../firebase.config";
import bgimg from "../assets/world.jpeg";
import { useNavigate } from "react-router-dom";

import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, seterr] = useState("");
  const navigate = useNavigate();

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
    // alert("kkk")
    // try {
    //   await signInWithEmailAndPassword(auth, email, password);
    //   // .then(()=>{
    //   //   alert("done")
    //   // })
    //   // .catch((err)=>{
    //   //   alert(err.message)
    //   // })
    //   localStorage.setItem("authToken", auth.authToken);
    //   toast.success("logged in successfully");

    //   console.log("true");
    //   localStorage.setItem("token", "loggedin");

    //   setEmail("");
    //   setPassword("");

      

    // } catch (error) {
    //   seterr(error.message);
    // }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("authToken", auth.authToken);
      toast.success("Logged in successfully!");
      navigate("/"); // Navigate to the home page after successful login
    } catch (error) {
      seterr(error.message);
    }
  };

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
              <div>
              <a href="/register" className="text-purple-500 font-semibold">Create Account !</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
      
    </>
  );
}