import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Techs.css';
import { techsContent } from '../../utils/textContent';

function Techs() {
  return (
    <section className='techs' id='techs'>
      <SectionTitle text={techsContent.title} />
      <div className='techs__content'>
        <h3 className='techs__title'>{techsContent.subtitle}</h3>
        <p className='techs__text'>{techsContent.description}</p>
        <ul className='techs__list'>
          {techsContent.technologies.map((item, i) => (
            <li key={i} className='techs__item'>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default Techs;
