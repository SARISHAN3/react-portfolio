import React from 'react';
import '../../styles/Contact.css';
import ContactInfoCard from './ContactInfoCard';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id='contact' className='contact-container'>
        <h5>Contact Me</h5>

        <div className='contact-content'>
            <div style={{ flex: 1 }}>
                <ContactInfoCard 
                iconUrl="./assets/email.png"
                text="sarishan333@gmail.com"
                />
                <ContactInfoCard 
                iconUrl="./assets/github.png"
                text="https://github.com/SARISHAN3"
                />
            </div>
            <div style={{ flex: 1 }}>
                <ContactForm />
            </div>
        </div>
    </section>
  )
};

export default Contact;
