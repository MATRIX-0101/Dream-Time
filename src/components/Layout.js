import React from "react";
// import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

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
