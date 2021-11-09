import axios from 'axios';

//test
console.log('Hallo daar!');

//get array with all countries
async function fetchData() {
    try {
        //retrieving array with country information of all countries
        const result = await axios.get('https://restcountries.com/v2/all')

        //sorting the array on population size from small to big
        result.data.sort((a, b) => {
            return a.population - b.population;
        })
        //mapping through array of all countries
        const countryList = result.data.map((country) => {

            //for each country creating a list item called listItem
            const listItem = document.createElement("li");
            listItem.setAttribute("class", "country")

            //within each li an img element showing the corresponding flag
            const flagImg = document.createElement("img");
            flagImg.setAttribute("src", country.flag)
            flagImg.setAttribute("alt", `Flag of ${country.name}`);
            listItem.appendChild(flagImg);

            //a <h3> is created with a class name same as corresponding region
            //adding the name of the country as value and putting this h3 item into list item
            const countryName = document.createElement("h3");
            countryName.setAttribute("class", country.region)
            countryName.textContent = country.name;
            listItem.appendChild(countryName);

            //creating a <p> element and adding name of country and population-size
            //to <p> and putting <p> into listItem
            const countryP = document.createElement("p");
            countryP.setAttribute("class", "countryP");
            countryP.textContent = `${country.name} has a population of ${country.population} people.`;
            listItem.appendChild(countryP)

            //each mapping wil place a list item in the html container called country-box
            return document.getElementById("country-box").appendChild(listItem);

        });
        return countryList
    } catch (e) {
        console.error(e);
    }
}

fetchData().then(r => {
});


