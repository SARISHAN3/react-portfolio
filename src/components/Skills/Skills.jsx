import React, { useState } from 'react';
import '../../styles/Skills.css';
import { SKILLS } from '../../utils/data';
import SkillCard from './SkillCard';
import SkillInfoCard from './SkillInfoCard';

const Skills = () => {

  const [activeSkill, setActiveSkill] = useState(SKILLS[0]);

  const handleActiveSkill = (data) => {
    setActiveSkill(data);
  };

  return (
    <section id='skills' className='skills-container'>
      <h5>Technical Proficiency</h5>

      <div className='skills-content'>
        <div className='skills'>
          {SKILLS.map((item) => (
            <SkillCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={activeSkill === item.title}
              onClick={() => handleActiveSkill(item)}
            />
          ))}
        </div>

        <div className='skills-info'>
          <SkillInfoCard 
          heading={activeSkill.title}
          skills={activeSkill.skills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
