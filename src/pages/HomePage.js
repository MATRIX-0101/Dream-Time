import React from 'react'
import { useNavigate } from "react-router-dom"; // change
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import lig from "../assets/bb.jpeg";
import fig from "../assets/gn.jpeg";

export default function HomePage() {
  return (
    <div>
      {/* <Navbar /> */}



      <Hero />

      <AboutUs />

       
      <div className="bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${lig})` }}>
  <div className="h-[700px] bg-opacity-75 flex justfy-center pt-[80px]"></div>
</div>


      {/* <Footer /> */}



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

       

<div className="bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${fig})` }}>
  <div className="h-[600px] bg-opacity-75 flex justfy-center pt-[80px]"></div>
</div>


    </div>
  )
} 

    // References
    // functions
{/* <script>
        let userlink=document.getElementById('userlink'); 
        let signoutlink=document.getElementById('signoutlink');  
        let header=document.getElementById('hh'); 
        var currentuser=null;

        function getUsername(){
          let keepLoggedIn=localStorage.getItem("keepLoggedIn");

          if(keepLoggedIn=="yes"){
            currentuser=JSON.parse(localStorage.getItem('user'));
          }

          else{
            currentuser=JSON.parse(sessionStorage.getItem('user'));

          }
        }

        function Signout(){
          sessionStorage.removeItem('user');
          localStorage.removeItem('user');
          sessionStorage.removeItem('keepLoggedIn');
          window.location="HomePage.js";
        }

        window.onload=function(){
          getUsername();
          if(currentuser==null){

            userlink.innerText="create new account";
            userlink.classList.replace("nav-link","btn");
            userlink.classList.add("btn-primary");
            userlink.href="Register.js";

            signoutlink.innerText="Login";
            signoutlink.classList.replace("nav-link","btn");
            signoutlink.classList.add("btn-success");
            signoutlink.href="Login.js";
          }

          else{

            userlink.innerText=currentuser.username;
            header.innerText="welcome"+currentuser.name;
            userlink.classList.replace("btn","nav-link");
            userlink.classList.add("btn-primary");
            userlink.href="#";

            signoutlink.innerText="Sign Out";
            signoutlink.classList.replace("btn","nav-link");
            signoutlink.classList.add("btn-success");
            signoutlink.href="javascript:Signout()";

          }
            
        }

</script> */}