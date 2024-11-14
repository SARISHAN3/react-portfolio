import React from 'react';
import '../styles/MobileNav.css';
import { Link } from 'react-router-dom';

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}
      onClick={toggleMenu}
      >
        <div className='mobile-menu-container'>
            <img className='logo' src="" alt="" />

            <ul> 
              <li><a href="#home">Home</a></li> 
              <li><a href="#skills">Skills</a></li> 
              <li><a href="#works">Projects</a></li>
              <li><a href="#contact">Contact</a></li> 

              <button className='contact-btn' onClick={() => {}}>
                  Hire Me
              </button>
            </ul>
        </div>
      </div>
    </>
  )
};

export default MobileNav;
