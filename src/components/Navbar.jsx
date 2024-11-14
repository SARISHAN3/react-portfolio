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
