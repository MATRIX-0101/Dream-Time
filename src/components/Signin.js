import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Signin() {
    const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => {navigate('/login')}}
       className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in</button>
    </div>
  )
}


