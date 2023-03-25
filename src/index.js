import './css/styles.css';
import { API, fenchCountry } from './fetchCountries';
// import marcupCountryList from './marcupCountryList.hbs';
var debounce = require('lodash.debounce');


const DEBOUNCE_DELAY = 300;


const refs = {
    inputEl: document.querySelector("#search-box"),
    listEl: document.querySelector(".country-list"),
    infoEl: document.querySelector(".country-info"),
};


refs.inputEl.addEventListener("input", debounce (() => {
    handleInputValue();
}, DEBOUNCE_DELAY)
);

function handleInputValue() {
    console.log("hi")
    let inputValue = refs.inputEl.value.trim();
    
    fenchCountry(inputValue)
  .then(country => {
      console.log(country);
      return country;
  })
  .catch(error => {
      console.log(error);
  });;

};




function createElementMarkup(markup) {
    return markup.map((el) => {
        const { name, flags, } = el;
        return `
    <li class="country-list__item">
<img width="50" height="50" class="country-list__img" src="${flags.svg}" alt="${name.official}">
<p class="country-list__text">${name.official}</p>
</li>
    `
    }).join("");
};
