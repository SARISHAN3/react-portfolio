import React, { useState } from 'react';
import "../styles/Navbar.css";
import { IoIosMenu } from 'react-icons/io';
import MobileNav from './MobileNav';

const Navbar = () => {

    const [ openMenu, setOpenMenu ] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

  return (
    <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav>
        <div className='nav-content'>
            {/* <img className='logo' src="" alt="" /> */}
            <p>Maria Sarishan</p>

            <ul> 
              <li><Link to="/home">Home</Link></li> 
              <li><Link to="/about">About</Link></li> 
              <li><Link to="/contact">Contact</Link></li> 
              <li><Link to="/services">Services</Link></li>

                <button className='contact-btn' onClick={() => {}}>
                    Hire Me
                </button>
            </ul>

            <button class='menu-btn' onClick={toggleMenu}>
                <span 
                    class={"material-symbols-outlined"}
                    style={{ fontSize: "1.8rem" }} 
                >
                    < IoIosMenu {...openMenu ? "close" : "menu"} />
                </span>
            </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
