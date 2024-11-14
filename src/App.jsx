import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <section id="home">
          <Hero />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="works">
          <Works />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
