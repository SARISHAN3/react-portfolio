import React from 'react';
import '../styles/Hero.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className='hero-container'> 
        <div className='hero-content'>
            {/* <h2>Building Digital Experieneces That Inspire</h2> */}
            <h2>Hi, <br /> I'm MARIA SARISHAN</h2>
            <p>
                A frontend developer | Transforms ideas into seamless and visually stunning web experiences.
            </p>

            <div className='hero-content-icon'>
                <a href="https://www.linkedin.com/in/maria-sarishan3/"><FaLinkedin /></a>
                <a href="https://github.com/SARISHAN3"><FaGithub /></a>
            </div>
        </div>

        <div className='hero-img'>
            <div>
                <div className='tech-icon'>
                    <img src="./assets/react-js.png" alt="React" />
                </div>
                <img src="./assets/men1.jpg" alt="ProfilePicture" />
            </div>

            <div>
                <div className='tech-icon'>
                    <img src="./assets/html-5.png" alt="HTML" />
                </div>
                <div className='tech-icon'>
                    <img src="./assets/css-3.png" alt="CSS" />
                </div>
                <div className='tech-icon'>
                    <img src="./assets/js.png" alt="JavaScript" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
