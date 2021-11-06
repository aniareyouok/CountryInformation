import axios from 'axios';

//test
console.log('Hallo daar!');

//get array with all countries
async function fetchData() {
    try {
        const result = await axios.get('https://restcountries.eu/rest/v2/all');
        // const amount = result.data.amount;
        // const name = result.data.name;
        // const flag = result.data.flag;
        // console.log(name + flag + `Has a population of ${amount} people`);
        console.log(result);
    } catch(e) {
        console.error(e);
    }
}

fetchData();