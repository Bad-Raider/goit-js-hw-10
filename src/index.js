import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import fetchCountries from './js/fetchCountries';
import markupCountryList from './templates/markupCountryList.hbs';
import markupCountryInfo from './templates/markupCountryInfo.hbs';


const DEBOUNCE_DELAY = 1300

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
      // console.log(nameCountry);
      if (nameCountry === "") {
        // console.log(2)
        refs.contryInfoEl.innerHTML("");
        refs.countryListEl.innerHTML("");
      }

      const markup = markupCountryList(countyObj);
      refs.countryListEl.insertAdjacentHTML("beforeend", markup);
      console.log(countyObj);
      console.log(markup);
    })
    .catch(error => { console.log(error) })
};

function createMarkupContryList() {
  
};

function createMarkupContryInfo() {
  
};