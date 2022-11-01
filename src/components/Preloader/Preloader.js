import React from 'react';
import './Preloader.css';

function Preloader(props) {
  if (props.show) {
    return (
      <div className='preloader'></div>
    );
  }
  return null;
}

export default Preloader;
