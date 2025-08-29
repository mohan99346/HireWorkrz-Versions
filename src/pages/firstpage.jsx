import React,{useState} from "react";
import  FreelancerCards from "../components/freelancerCards";
import JobCardList from "../components/JobCards";

import assets from "../assets/Happy man sitting on a purple bean bag chair using a laptop isolated on white background _ Premium AI-generated image.jpeg"
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import Register from "./Register";
import Login from "../pages/Login";

import "../styles/firstpage.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Clientdashboard from "./Clientdashboard";




export default function FirstPage(){
  const[showLogin,setShowLogin] = useState(false);
      const[Regopen,setRegopen] = useState(false);




  return (
    <>
    <Navbar></Navbar>
    <Clientdashboard></Clientdashboard>
   

 <section className="hero">
 <div className="hero-content1">
  
   <h1>Find the Perfect Freelancer for Your Needs Today...</h1>
   <p>Hire top professionals for any Work from anytime, anywhere..</p>
   <div className="hero-buttons">
     <Link  className="btn primary-btn">Checkonce</Link>
     <Link  className="btn secondary-btn">Join With Us</Link>
   </div>
   
    {showLogin && <Login Close={setShowLogin}/>} 
          {Regopen && <Register Close = {setRegopen}/>}

   
   
 
 <div className="hero-image">
   <img src={assets} alt="Freelancer working" />
 
</div>
 </div>
 <div className="freelancers-list">
  
  <FreelancerCards></FreelancerCards>
 </div>
 



  </section>
 
  </>
  );
}

