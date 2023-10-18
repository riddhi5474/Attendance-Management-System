import React from 'react';
import './No.css'; 
import { BrowserRouter, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
        <header id="nav-wrapper">
    <nav id="nav">
      <div class="nav left">
        
        <div   class="nav-link "to="/"><span class="nav-link-span"><span class="u-nav"><img src="./yuy.png"/></span></span></div>
        <button id="menu" class="btn-nav"><span class="fas fa-bars"></span></button>
      </div>
      <div class="nav right">
      <Link   class="nav-link "to="/"><span class="nav-link-span"><span class="u-nav">Home</span></span></Link>
      <Link   class="nav-link "to="/about"><span class="nav-link-span"><span class="u-nav">Attendance Report</span></span></Link>
       
       <Link   class="nav-link "to="/student"><span class="nav-link-span"><span class="u-nav">Students</span></span></Link>
       
        
       
        <button className="login-button">Login</button>
      </div>
    </nav>
  </header>
  
    </div>
  );
}

export default NavBar;
