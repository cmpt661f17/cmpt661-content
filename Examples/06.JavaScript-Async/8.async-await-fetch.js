/*If the script is running under node.js then import 'node-fetch' package
*/

if (typeof window === 'undefined') {
    var fetch = require('node-fetch');
}

// create a new "async" function so we can use the "await" keyword
async function getCountries(region) {
    let url = `https://restcountries.eu/rest/v1/region/${region}`;
    let response = await fetch( url );
    let countries = await response.json();
    return countries;
}



function displayCountries(region, countries) {
    log(`Countries in ${region} and their capital city:`);
    countries.map(country => {
        log(`${country.name} - ${country.capital}`);
    });
}

function log(text) {
    //If running in node.js then write to the console otherwise write to the browser document object
    if (typeof window === 'undefined') {
        console.log(text);
    } else {
        document.writeln(text + '<br>');
    }
}

let region = 'asia';
getCountries(region)
    .then ( countries => displayCountries(region, countries) )
    .catch( err => console.log(err) );