import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import  fetchCountries  from './js/fetchCountries';

const DEBOUNCE_DELAY = 300

const refs = {
  inputEl: document.querySelector("#search-box"),
  countryListEl: document.querySelector(".country-list"),
  contryInfoEl: document.querySelector(".country-info"),
};

refs.inputEl.addEventListener("input", debounce(handleInputValue, DEBOUNCE_DELAY));

function handleInputValue(e) {
  const nameCountry = e.target.value.trim();
  fetchCountries(nameCountry)
    .then(countyObj => {
    console.log(countyObj);
    })
    .catch(error => { console.log(error) })
};
