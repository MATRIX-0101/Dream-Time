import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Start() {
    const navigate = useNavigate();

    const handleStart = () => {
        alert("login please !")
    }

  return (
    <div>
        <button 
        onClick={handleStart}
        className="bg-[#a6c1ee] hover:bg-[#87acec] text-white px-6 py-3 rounded-md font-semibold transition duration-200 ease-in-out align-middle">
        Start Journey</button>
    </div>
  )
}

