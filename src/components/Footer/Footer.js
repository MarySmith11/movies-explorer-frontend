import React from 'react';
import './Footer.css';
import { footerContent } from '../../utils/textContent';

function Footer(props) {
  const year = new Date().getFullYear();
  if (props.showFull) {
    return (
      <footer className='footer'>
        <p className='footer__description'>{footerContent.description}</p>
        <div className='footer__bottom'>
          <p className='footer__copyright'>&copy; {year}</p>
          <ul className='footer__links'>
            {
              footerContent.links.map((link, i) => <li key={i} className='footer__link-item'>
                <a href={link.href} className='footer__link' target='_blank' rel='noreferrer'>{link.title}</a>
              </li>)}
          </ul>
        </div>
      </footer>
    );
  }
  return null;
}

export default Footer;
