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

                //for each country creating a div-tag called country
                const countryDiv = document.createElement("div");
                countryDiv.setAttribute("class", "country")

                //within each div a img-tag showing the corresponding flag
                const flagImg = document.createElement("img");
                flagImg.setAttribute("src", country.flag)
                flagImg.setAttribute("alt", `Flag of ${name}`);
                countryDiv.appendChild(flagImg);

                //a <p> with text is also added to the country-div
                const infoP = document.createElement("p");
                infoP.textContent = `${country.name} has a population of ${country.population} people.`;
                countryDiv.appendChild(infoP)

                //each mapping wil place a country-div in the html container called country-box
                    return document.getElementById("country-box").appendChild(countryDiv);

            }); return countryList
    } catch(e) {
        console.error(e);
    }
}

fetchData().then(r => {});


