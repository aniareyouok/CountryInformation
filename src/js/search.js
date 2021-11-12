import axios from "axios";

//clicking the search button or enter invokes getInput function
document.getElementById("search_button").addEventListener("click", getInput);
document.addEventListener('keypress',function(e){
    if (e.key === "Enter") {
        getInput();
    }
});

//getInput retrieves name from search field and invokes the fetchCountry function
function getInput() {
    let input = document.getElementById('search_field').value
    input=input.toLowerCase();
    return fetchCountry(input);
}

//Retrieves flag, name, subregion, population, capital and also a currency array and language array
//and invokes the getCurrency and getLanguage function
async function fetchCountry(name) {
    try {
        // retrieving country array
        const result = await axios.get(`https://restcountries.com/v2/name/${name}`);

        // creating variables for specifiek information in the country array
        const flag = `<img src="${result.data[0].flag}" alt="Flag of ${result.data[0].name}">`
        const country_name = result.data[0].name;
        const subarea_name = result.data[0].subregion;
        const amount = result.data[0].population;
        const city = result.data[0].capital;

        // creating a currencies array and providing this as an argument for the getCurrency function
        const currencies = result.data[0].currencies;
        const currency = getCurrency(currencies);

        // creating a language array and providing this as an argument for the getLanguage function
        const languages = result.data[0].languages;
        const language = getLanguage(languages);

        // variabel with the search outcome as a template literal string
        // the way we want it in our html
        // invoking getCurrency and getLanguage function
        let outcome = `<div class="country_container"><div class="flag_name">
        ${flag} <h2>${country_name}</h2></div> 
        <div class="text"><p>${country_name} is situated in ${subarea_name}. 
        It has a population of ${amount} people. 
        The capital is ${city} and ${currency}. <br>
        ${language}
        </p></div></div>`

        //placing outcome in search.html
        document.getElementById("outcome_search").innerHTML = outcome;
        //emptying search input field
        document.getElementById('search_field').value = "";

    } catch (error) {
        //error message uses same class names as search outcome
        const errorMessage = `<div class="country_container"><div class="flag_name">
        <i>:(</i><h2>Error</h2></div> 
        <div class="text"><p>We couldn't find this country, please check your spelling. This API is very precise.
        </p></div></div>`
        //placing error message in search.html
        document.getElementById("outcome_search").innerHTML = errorMessage;
        //emptying search input field
        document.getElementById('search_field').value = "";
    console.error(error);
}}

//Retrieves the kind of currencies you can pay with in a given country.
// This function receives it's currencies array from, and is invoked, by the fetchData function.
function getCurrency(currencies) {
    try {
        let allCurrenciesArray = [];

        for (let i = 0; i < currencies.length; i++) {
            allCurrenciesArray.push(currencies[i].name);
        }

        if (currencies.length === 1) {
            return `you can pay with ${currencies[0].name}'s`;
        } else if (currencies.length > 1) {
            const lastCurrency = allCurrenciesArray.pop()
            const allCurrencies = allCurrenciesArray.join(", ");
            return `you can pay with ${allCurrencies} and ${lastCurrency}`;
        } else {
            return `you can't by anything here, use your skills and help each other out`;
        }
    } catch (error) {
        console.error(error);
    }
}

//Retrieves languages that are spoken in a given country.
// Receives its languages array (argument) from, and is invoked, by the fetchCountry function
function getLanguage(languages) {
    try {
        let allLanguagesArray = [];

        for (let i = 0; i < languages.length; i++) {
            allLanguagesArray.push(languages[i].name);
        }

        if (languages.length === 1) {
            return `They speak ${languages[0].name}.`;
        } else if (languages.length > 1) {
            const lastLanguage = allLanguagesArray.pop()
            const allLanguages = allLanguagesArray.join(", ");
            return `They speak ${allLanguages} and ${lastLanguage}.`;
        } else {
            return `We don't know which languages are spoken, try searching wikipedia.`;
        }
    } catch (error) {
        console.error(error);
    }
}
