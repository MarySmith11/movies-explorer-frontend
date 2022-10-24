import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm(props) {
  const [phrase, setPhrase] = React.useState('');
  const [error, setError] = React.useState('');
  const [isShort, setIsShort] = React.useState(false);

  function handleSearch(e) {
    e.preventDefault();
    if (!phrase) {
      setError('Нужно ввести ключевое слово');
      return;
    }
    props.handleSearch(phrase, isShort);
  }

  function handlePhraseChange(e) {
    setPhrase(e.target.value);
    if (!e.target.value) {
      setError('Нужно ввести ключевое слово');
    } else {
      setError('');
    }
  }

  function shortFilmCheckboxHandler(checked) {
    setIsShort(checked);
    props.handleSearch(phrase, checked);
  }

  return (
    <form className='search-form' action="#" encType="multipart/form-data" method="POST" onSubmit={handleSearch} noValidate>
      <div className='search-form__top'>
        <fieldset className='search-form__field-wrap'>
          <input id='film-input' type='text' className='search-form__input' placeholder='Фильм' name='phrase' minLength='2' maxLength='40' required={true} value={phrase} onChange={handlePhraseChange} />
        </fieldset>
        <button type='submit' className='search-form__button'>
          <span className='search-form__button-span'></span>
        </button>
      </div>
      <p className={`form-error ${error ? '' : 'form-error_state_hidden'}`}>{error}</p>
      <FilterCheckbox onChange={shortFilmCheckboxHandler} />
    </form>
  );
}

export default SearchForm;
