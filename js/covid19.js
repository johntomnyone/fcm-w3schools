const covidDataWrapper = document.querySelector('.covid19-wrapper .covid19-data');
const activeCases = document.querySelector('.covid19-wrapper .covid19-data .active-cases');
const countryText = document.querySelector('.covid19-wrapper .covid19-data .country-text');
const totalDeaths = document.querySelector('.covid19-wrapper .covid19-data .totaldeaths-text');
const totalRecovered = document.querySelector('.covid19-wrapper .covid19-data .totalrecovered-text');

// window.addEventListener('load', translateCovidData);

// function translateCovidData() {
//   covidDataWrapper.classList.toggle('trans');
// }

// setInterval(translateCovidData, 3000);


// COVID-19 DATA
const covid19Data = async() => {
  const url = 'https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true';
  const fetchData = await fetch(url);
  const data = await fetchData.json();

  activeCases.textContent = data[23].infected;
  countryText.textContent = data[23].country;
  totalDeaths.textContent = data[23].deceased;
  totalRecovered.textContent = data[23].recovered;

}

covid19Data();
