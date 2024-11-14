import React from 'react';
import '../../styles/ContactInfoCard.css';

const ContactInfoCard = ({ iconUrl, text }) => {
  return (
    <div className='contact-info-card'>
        <div className='icon'>
            <img src={iconUrl} alt={text} />
        </div>

        <p>{text}</p>
    </div>
  )
};

export default ContactInfoCard;
