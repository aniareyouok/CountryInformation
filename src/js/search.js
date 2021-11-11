import axios from "axios";

// const button = document.getElementById("search_button";
// button.addEventListener("submit", searchCountry);
//
// async function searchCountry() {
//     try {
//         //retrieving array with country information of all countries
//         const result = await axios.get('https://restcountries.com/v2/all') {
//
//             //determine country entered in search field
//             const inputField = document.getElementById("search_field");
//             function handleInput(event) {
//                 inputField.addEventListener(onsubmit, ()=> {
//
//                 })
//                 return event.target.value
//                 }
//
//             }
//
//
//
//
//             //find and show country information entered in search field
//
//
//
//         } return countryInformation;
//     } catch (e) {
//         console.error(e);
//     }
//
// }
//
// searchCountry();
//

//Retrieves the kind of currencies you can pay with in a given country. This function gets evoked by the fetchData function.
async function getCurrency() {
    try {
        const result = await axios.get('https://restcountries.eu/rest/v2/alpha/be');
        const currencies = result.data.currencies;
        let allCurrenciesArray = [];

        for (let i = 0; i < currencies.length; i++) {
            allCurrenciesArray.push(currencies[i].name);
        }

        if (currencies.length === 1) {
            console.log( `You can pay with ${currencies[0].name}'s`);
        } else if (currencies.length < 1) {
            const lastCurrency = allCurrenciesArray.pop()
            const allCurrencies = allCurrenciesArray.join(", ");
            console.log( `You can pay with ${allCurrencies} and ${lastCurrency}.`);
        } else {
            console.log(`You can't by anything here, use your skills and help each other out`);
        }

    } catch (error) {
        console.error(error);
    }
}
