

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
//import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";
import bgimg from "../assets/world.jpeg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom"; // Import Link from react-router-dom

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, seterr] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
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
            </div>
            <div className="w-full lg:w-1/2 py-16 px-12">
              <h2 className="text-3xl mb-4">Login</h2>
              <p className="mb-4">Log into your account to continue</p>
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
                  <Link to="/register" className="text-purple-500 font-semibold">Create Account !</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
