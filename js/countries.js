const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => displayCountries(data));
};
// call function
loadCountries();

const displayCountries = countries => {
    const countriesContainer = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick="loadCountryByName('${country.name}')"> Details</button>
        `;
        // const h3 = document.createElement('h3');
        // h3.innerText = country.name;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);
        countriesContainer.appendChild(div);
    });
};

const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayCountryDetails(data[0]));
};

const displayCountryDetails = country => {
    // console.log(country);
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
        <h4>${country.name}</h4>
        <p>Population: ${country.population}</p>
        <p>Country-Code: ${country.alpha2Code}</p>
        <img width="200" src="${country.flag}">
    `;
}