import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Adddream() {
    const navigate = useNavigate();
  return (
    <div>
        <button 
        onClick={() => navigate('/catform')}
        className="bg-[#6c6e71] hover:bg-[#523657d4] text-white px-6 py-3 rounded-md font-semibold transition duration-200 ease-in-out align-middle">
        Add Your Dream</button>
    </div>
  )
}
