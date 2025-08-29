import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import Login from "../pages/Login";
import "./Navebar2.css";

import Register from "../pages/Register";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const profile = "https://randomuser.me/api/portraits/men/94.jpg"

  return (
    <nav className="navbar">
      
        <h1 className="logo">HireWorkrz</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search for services..." />
          <FaSearch className="search-icon" />
        </div>
      

    
    <div className="Profile" >
      <img src={profile}/>
    </div>

      <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    
      
    </nav>
  );
}

export default Navbar;

  