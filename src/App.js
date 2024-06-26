import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import AddReg from "./pages/AddReg";

import Login from "./pages/Login";
import Catform from './pages/Catform'; // Adjust the import path as needed
import Layout from './components/Layout';
import MyDreams from './pages/MyDreams';
import { ToastContainer } from "react-toastify";
import AllDreams from './pages/AllDreams';
import Notification from './components/Notification';
import DreamInfo from './pages/DreamInfo';
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
              <Layout>
                <HomePage />
              </Layout>
                
            }
          />

          <Route
            
            path="/addreg"
            element={
              <Layout>
                <AddReg />
              </Layout>
                
            }
          />

          <Route
            
            path="/register"
            element={
              <Layout>
                <Register />
              </Layout>
                
            }
          />
         
            <Route
            
            path="/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />

          <Route
            
            path="/mydreams"
            element={
              <Layout>
                <MyDreams />
              </Layout>
                
            }
          />
          <Route
            
            path="/catform"
            element={
              <Layout>
                <Catform />
              </Layout>
            }
          />
          <Route 
            path="/alldreams"
            element={
              <Layout>
                <AllDreams />
              </Layout>
            }
          />
          <Route 
            path="/middlesection"
            element={
              <Layout>
                <middlesection />
              </Layout>
            }
          />
          <Route 
            path="/notifications"
            element={
              <Layout>
                <Notification />
              </Layout>
            }
          />

          <Route 
            path="/dreamInfo"
            element={
              <Layout>
                <DreamInfo />
              </Layout>
            }
          />

        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}




export default App;
