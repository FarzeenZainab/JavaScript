'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// There are multiple ways of making an ajax calls

const getCountryData = function (countryName) {
  // 1. The XMPHttpRequest
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
  request.send();

  // we can not save the result of request.send() in a variable
  // like data = request.send() because the result is not there yet and ajax has non-blocking nature

  // what we will do instead is add an load event listener and once the result is loaded we can work on the result

  request.addEventListener('load', function () {
    // returns string of text that is response
    //console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const country = data.name.common;
    const region = data.region;
    const flag = data.flags.png;
    const languages = [];
    let currency;
    const population = data.population;

    // loop over languages
    for (const lang of Object.values(data.languages)) {
      languages.push(lang);
    }

    // loop over currency key
    for (const curr of Object.values(data.currencies)) {
      currency = curr.name;
    }

    const countryHtml = `
    <article class="country">
        <img class="country__img" src="${flag}" />
        <div class="country__data">
            <h3 class="country__name">${country}</h3>
            <h4 class="country__region">${region}</h4>
            <p class="country__row"><span>👫</span>${population} people</p>
            <p class="country__row"><span>💰</span>${currency}</p>
            <p class="country__row"><span>🗣️</span>${languages.join(', ')}</p>
        </div>
    </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', countryHtml);
    countriesContainer.style.opacity = '1';
  });
};

getCountryData('islamic republic of pakistan');
getCountryData('india');
getCountryData('islamic republic of iran');
getCountryData('iraq');
getCountryData('afghanistan');
getCountryData('united arab emirates');

{
  // to print all the values of an object we have indirectly loop over the object using special functions and a for loop
}
