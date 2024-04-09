import React from 'react'
import { useNavigate } from "react-router-dom"; // change
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Footer />
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