import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutMe.css';
import { aboutMeContent } from '../../utils/textContent';

function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
      <SectionTitle text={aboutMeContent.title} />
      <div className='about-me__content'>
        <div className='about-me__text'>
          <h3 className='about-me__name'>{aboutMeContent.name}</h3>
          <h4 className='about-me__activity'>{aboutMeContent.activity}</h4>
          <p className='about-me__description'>{aboutMeContent.description}</p>
          <a href={aboutMeContent.link.href} className='about-me__link' target='_blank' rel='noreferrer'>{aboutMeContent.link.title}</a>
        </div>
        <img className='about-me__photo' src={aboutMeContent.photo} alt={aboutMeContent.name} />
      </div>
    </section>
  );
}
export default AboutMe;
