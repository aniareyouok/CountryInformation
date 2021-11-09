import axios from "axios";

async function searchCountry() {
    try {
        //retrieving array with country information of all countries
        const result = await axios.get('https://restcountries.com/v2/all') {

            //determine country entered in search field


            //find and show country information entered in search field


        } return countryInformation;
    } catch (e) {
        console.error(e);
    }

}

searchCountry();

