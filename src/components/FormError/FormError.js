import React from 'react';
import './FormError.css';

function FormError(props) {
  return (
    <p className={`form-error ${props.authType ? 'form-error_type_auth' : ''}`}>{props.text}</p>
  );
}

export default FormError;
