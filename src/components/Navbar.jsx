import React, { useState } from 'react';
import "../styles/Navbar.css";
import { IoIosMenu } from 'react-icons/io';
import MobileNav from './MobileNav';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

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
                      <li><a href="#home">Home</a></li> 
                      <li><a href="#skills">Skills</a></li> 
                      <li><a href="#works">Projects</a></li>
                      <li><a href="#contact">Contact</a></li> 

                      <button className='contact-btn' onClick={() => {}}>
                          Hire Me
                      </button>
                    </ul>

                    <button className='menu-btn' onClick={toggleMenu}>
                        <span 
                            className="material-symbols-outlined"
                            style={{ fontSize: "1.8rem" }} 
                        >
                            <IoIosMenu />
                        </span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
