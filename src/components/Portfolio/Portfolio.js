import React from 'react';
import './Portfolio.css';
import { portfolioContent } from '../../utils/textContent';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__title'>{portfolioContent.title}</h3>
      <ul className='portfolio__list'>
        {
          portfolioContent.links.map((link, i) => <li key={i} className='portfolio__item'>
              <a href={link.href} className='portfolio__link' target='_blank' rel='noreferrer'>{link.title}</a>
            </li>)
        }
      </ul>
    </section>
  );
}
export default Portfolio;
