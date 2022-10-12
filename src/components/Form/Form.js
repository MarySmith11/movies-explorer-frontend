import React from 'react';
import './Form.css';

function Form(props) {
  const changeHandler = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <fieldset className='form__input-wrap'>
      <label className='form__input-title'>{props.title}</label>
      <input name={props.name} className={`form__input ${props.error ? 'form__input_state_error' : ''}`} onChange={changeHandler} type={props.type} required={props.required} placeholder={props.placeholder} value={props.value} />
    </fieldset>
  );
}

export default Form;
