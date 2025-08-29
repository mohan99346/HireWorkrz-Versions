import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import Login from "../pages/Login";
import "./Navbar.css";
import Register from "../pages/Register";

function Navbar() {
  const[showLogin,setShowLogin] = useState(false);
    const[Regopen,setRegopen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      
        <h1 className="logo">HireWorkrz</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search for services..." />
          <FaSearch className="search-icon" />
        </div>
      

      <ul className="nav-links">
        
        <li>Explore</li>
        <li>About us</li>
      </ul>

      <div className="auth-buttons">
        <Link onClick={()=>setShowLogin(true)} className="sign-in">Sign in</Link>
        <Link onClick={()=>setRegopen(true)} className="join">SignUp</Link>
      </div>

      <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    
      {Regopen && <Register regClose = {setRegopen}/>}
      {showLogin && <Login Close={setShowLogin}/>}
      
    </nav>
  );
}

export default Navbar;

  