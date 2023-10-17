import React from 'react';
import './No.css'; 

function NavBar() {
  return (
    <div>
        <header id="nav-wrapper">
    <nav id="nav">
      <div class="nav left">
        <span class="gradient skew"><h1 class="logo un-skew">Logo Here</h1></span>
        <button id="menu" class="btn-nav"><span class="fas fa-bars"></span></button>
      </div>
      <div class="nav right">
        <a href="#home" class="nav-link "><span class="nav-link-span"><span class="u-nav">Home</span></span></a>
        <a href="#about" class="nav-link"><span class="nav-link-span"><span class="u-nav">About</span></span></a>
        <a href="#work" class="nav-link"><span class="nav-link-span"><span class="u-nav">Work</span></span></a>
        <a href="#contact" class="nav-link"><span class="nav-link-span"><span class="u-nav">Contact</span></span></a>
        <button className="login-button">Login</button>
      </div>
    </nav>
  </header>
  
    </div>
  );
}

export default NavBar;
