import React from "react";
// import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import middlesection from "./middlesection";
import sweet from "../assets/sweet.jpeg";
//import bb from "../assets/bb.avif";
import cartoon from "../assets/cartoon.avif";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <div className="--pad" style={{ minHeight: "80vh" }}>
        {children}
      </div>
      <div className="bg-fixed bg-center bg-cover " style={{backgroundImage: `url(${cartoon})`}}>
        <div className="h-[700px] bg-opacity-75 flex justfy-center pt-[80px]">

        </div>
        
      </div>

      <div className="w-screen h-[400px] bg-gray-500 flex flex-col justify-center items-center">
        <middlesection />
        <p className="text-3xl text-white leading-relaxed"> {/* Changed text-lg to text-xl */}
        "In the hush of night, dreams take flight,
        </p>
        <p className="text-3xl text-white leading-relaxed"> {/* Changed text-lg to text-xl */}
        Whispering secrets, oh so bright. 
        </p>
        <p className="text-3xl text-white leading-relaxed"> {/* Changed text-lg to text-xl */}
        Stars as guides in skies so deep,
        </p>
        <p className="text-3xl text-white leading-relaxed"> {/* Changed text-lg to text-xl */}
        Where imagination finds its keep."
        </p>
      </div>

      {/* <div className="bg-fixed bg-center bg-cover " style={{backgroundImage: `url(${bb})`}}>
        <div className="h-[600px] bg-opacity-75 flex justfy-center pt-[80px]">

        </div>
        
      </div> */}

      <div className="bg-fixed bg-center bg-cover " style={{backgroundImage: `url(${sweet})`}}>
        <div className="h-[600px] bg-opacity-75 flex justfy-center pt-[80px]">

        </div>
        
      </div>

     

      <Footer />
    </>
  );
};

export default Layout;

