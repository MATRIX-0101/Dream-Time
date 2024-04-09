import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";

import Catform from './pages/Catform'; // Adjust the import path as needed
  function App() {
    return (
    <>
     {/* <div className="flex justify-center items-center w-[100%] h-[100vh]">
       <Catform/>
     </div> */}
      <BrowserRouter>
        <Routes>
        <Route
            
            path="/"
            element={
                <HomePage />
            }
          />
          <Route
            
            path="/register"
            element={
                <Register />
            }
          />
            <Route
            
            path="/login"
            element={
                <Login />
            }
          />
          

        </Routes>
      </BrowserRouter>
    </>
  );
}




export default App;
