import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  const [checked, setChecked] = React.useState(false);
  const labelClass = checked ? 'filter-checkbox__label filter-checkbox__label_state_active' : 'filter-checkbox__label';

  function handleCheckboxChange(e) {
    setChecked(e.target.checked);
  }

  return (
    <fieldset className='filter-checkbox'>
      <label className={labelClass}>
        <input id='filter-checkbox' className='filter-checkbox__input' type='checkbox' checked={checked} onChange={handleCheckboxChange} />
        Короткометражки
      </label>
    </fieldset>
  );
}

export default FilterCheckbox;
