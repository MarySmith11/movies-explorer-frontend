import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  const [film, setFilm] = React.useState('');

  function handleFilmChange(e) {
    setFilm(e.target.value);
  }

  return (
    <form className='search-form'>
      <div className='search-form__top'>
        <fieldset className='search-form__field-wrap'>
          <input id='film-input' type='text' className='search-form__input' placeholder='Фильм' name='film' minLength='2' maxLength='40' required={true} value={film} onChange={handleFilmChange} />
        </fieldset>
        <button type='submit' className='search-form__button'>
          <span className='search-form__button-span'></span>
        </button>
      </div>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
