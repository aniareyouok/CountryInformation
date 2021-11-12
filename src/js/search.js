import axios from "axios";

//check the array in the console
async function test() {
    try {
        const result = await axios.get('https://restcountries.com/v2/name/cuba');
        console.log(result);
        console.log(result.data[0].flag + " " + result.data[0].name + " " + result.data[0].subregion + " " + result.data[0].population + " " + result.data[0].capital);
        console.log(result.data[0].currencies)
        console.log(result.data[0].languages[0].name + " and " + result.data[0].languages[1].name + " and " + result.data[0].languages[2].name)
    } catch  (error) {
        console.error(error);
    }}

    test();

//getInput functie levert country name op

//Retrieves flag, name, subregion, population and capital and invokes the getCurrency and getLanguage function
async function fetchCountry(name) {
    try {
        const result = await axios.get(`https://restcountries.com/v2/name/${name}`);
        const flag = `<img src="${result.data[0].flag}" alt="Flag of ${result.data[0].name}">`
        const country_name = result.data[0].name;
        const subarea_name = result.data[0].subregion;
        const amount = result.data[0].population;
        const city = result.data[0].capital;
        const currencies = result.data[0].currencies;
        const currency = getCurrency(currencies);
        const languages = result.data[0].languages;
        const language = getLanguage(languages);

        let outcome = `<div class="flag_name">
        ${flag} <h2>${country_name}</h2></div> 
        <div class="text"><p>${country_name} is situated in ${subarea_name}. 
        It has a population of ${amount} people. 
        The capital is ${city} and ${currency}. <br>
        ${language}
        </p></div>`

        document.getElementById("outcome_search").innerHTML = outcome;

    } catch (error) {
    console.error(error);
}}

fetchCountry("cuba");

//Retrieves the kind of currencies you can pay with in a given country. This function gets evoked by the fetchData function.
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

//Retrieves languages
function getLanguage(languages) {
    try {
        let allLanguagesArray = [];
        console.log(allLanguagesArray);

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

// data[0].languages[i].name;