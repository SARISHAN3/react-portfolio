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
              <li><Link to="/home">Home</Link></li> 
              <li><Link to="/about">About</Link></li> 
              <li><Link to="/contact">Contact</Link></li> 
              <li><Link to="/services">Services</Link></li>

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
