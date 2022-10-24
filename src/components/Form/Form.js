import React from 'react';
import './Form.css';

function Form(props) {
  return (
    <fieldset className='form__input-wrap'>
      <label className='form__input-title'>{props.title}</label>
      <input minLength={props.minLength || 0} name={props.name} className={`form__input ${props.errorText ? 'form__input_state_error' : ''}`} onChange={props.onChange} type={props.type} required={props.required} placeholder={props.placeholder} value={props.value} pattern={props.pattern} disabled={props.disabled} />
      <p className={`form-error ${props.errorText ? '' : 'form-error_state_hidden'}`}>{props.errorText}</p>
    </fieldset>
  );
}

export default Form;
