

import React from "react";
// import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import middlesection from "./middlesection";
import sweet from "../assets/sweet.jpeg";
//import bb from "../assets/bb.avif";
import cartoon from "../assets/cartoon.avif";
import treee from "../assets/treee.mp4";
import river from "../assets/river.mp4";
import fig from "../assets/gn.jpeg";
import lig from "../assets/bb.jpeg";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />


      <div className="--pad" style={{ minHeight: "80vh" }}>
        {children}

      </div>


      <Footer />
    </>
  );
};

export default Layout;