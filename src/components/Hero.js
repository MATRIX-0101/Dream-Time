
import React from 'react';
import backgroundImage from '../assets/background.jpg'; // Import your background image
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className="bg-cover bg-center h-max md:h-auto flex items-center justify-center text-center text-white" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Dream World!</h1>
        <p className="text-lg md:text-xl mb-6">Explore the beauty of different minds.</p>
        <button 
        onClick={() => navigate('/catform')}
        className="bg-[#a6c1ee] hover:bg-[#87acec] text-white px-6 py-3 rounded-md font-semibold transition duration-200 ease-in-out align-middle">
        Start Journey</button>
      </div>
    </div>
  );
}
