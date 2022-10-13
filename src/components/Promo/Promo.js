import React from 'react';
import NavTab from '../NavTab/NavTab';
import './Promo.css';
import { promoTitle } from '../../utils/textContent';

function Promo() {
  return (
    <section className='promo'>
      <h1 className='promo__title'>{promoTitle}</h1>
      <NavTab />
    </section>
  );
}
export default Promo;
