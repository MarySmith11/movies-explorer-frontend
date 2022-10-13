import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutProject.css';
import { aboutTitle, aboutProjectColumns, timeline } from '../../utils/textContent';

function AboutProject() {
  return (
    <section className='about-project' id='about'>
      <SectionTitle text={aboutTitle} />
      <ul className='about-project__columns'>
        {
          aboutProjectColumns.map((column, i) => <li key={i} className='about-project__column'>
            <h3 className='about-project__column-title'>{column.title}</h3>
            <p className='about-project__column-description'>{column.description}</p>
          </li>)
        }
      </ul>
      <div className='about-project__timeline'>
        <div className='about-project__timeline-item about-project__timeline-item_type_small'>
          <p className='about-project__timeline-title about-project__timeline-title_type_color'>{timeline.left.title}</p>
          <p className='about-project__timeline-description'>{timeline.left.description}</p>
        </div>
        <div className='about-project__timeline-item'>
          <p className='about-project__timeline-title'>{timeline.right.title}</p>
          <p className='about-project__timeline-description'>{timeline.right.description}</p>
        </div>
      </div>
    </section>
  );
}
export default AboutProject;
