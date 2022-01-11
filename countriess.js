const fetchCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayCountries(data));
}

fetchCountries();

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countriesDiv');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add("tokyo")
        const h3 = document.createElement('h3');

        h3.innerText = country.name.official;
        div.appendChild(h3);

        const p = document.createElement('p');
        p.innerText = country.capital;

        div.appendChild(p);

        countriesDiv.appendChild(div);
    });
};