import React from 'react';
import '../styles/MobileNav.css';

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}
      onClick={toggleMenu}
      >
        <div className='mobile-menu-container'>
            <img className='logo' src="" alt="" />

            <ul>
              <li>
                <a className='menu-item' href='#'  >Home</a>
              </li>
              <li>
                <a className='menu-item' href='#skills' >Skills</a>
              </li>
              <li>
                <a className='menu-item' href='#works' >Works</a>
              </li>
              <li>
                <a className='menu-item' href='#contact' >Contact Me</a>
              </li>

              <button className='contact-btn' onClick={() => {}}>
                  Hire Me
              </button>
            </ul>
        </div>
      </div>
    </>
  )
};

export default MobileNav
