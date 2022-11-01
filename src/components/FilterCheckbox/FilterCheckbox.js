import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox(props) {
  const [checked, setChecked] = React.useState(props.checked || false);
  const labelClass = checked ? 'filter-checkbox__label filter-checkbox__label_state_active' : 'filter-checkbox__label';

  React.useEffect(() => {
    setChecked(props.checked || false);
  }, [props.checked]);

  function handleCheckboxChange(e) {
    props.onChange(e.target.checked);
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
