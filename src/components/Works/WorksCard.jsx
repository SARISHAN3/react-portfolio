import React from 'react';
import '../../styles/WorksCard.css';

const WorksCard = ({ details, iconUrl }) => {
  const { title, usingTools, } = details;

  return (
    <div className='works-card'>
      <h6>{title}</h6>

      <div className='work-tools'>{usingTools}</div>

      <div className='work-img'>
        <img src={iconUrl} alt={title} />
      </div>
    </div>
  );
};

export default WorksCard;
