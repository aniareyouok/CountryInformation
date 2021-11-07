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
            flagImg.setAttribute("alt", `Flag of ${country.name}`);
            countryDiv.appendChild(flagImg);

            //a <p> is added to the country-div
            const infoP = document.createElement("p");

            //class name for <p> is the same as corresponding region
            infoP.setAttribute("class", country.region)

            //adding name of country and population-size to <p> and
            //putting <p> into country-div
            infoP.textContent = `${country.name} has a population of ${country.population} people.`;
            countryDiv.appendChild(infoP)

            //each mapping wil place a country-div in the html container called country-box
            return document.getElementById("country-box").appendChild(countryDiv);

        });
        return countryList
    } catch (e) {
        console.error(e);
    }
}

fetchData().then(r => {
});

// De land-namen moeten worden weergegeven in een kleur die overeenkomt met het continent waar het land in ligt. Tip: maak hier een aparte functie voor die een regio-naam verwacht en bepaalt welke kleur het land moet krijgen. Een land ligt meestal in één van de volgende vijf contintenten, maar uitzonderingen kunnen voorkomen:
//     Africa: blauw
// Americas: groen
// Asia: rood
// Europe: geel
// Oceania: paars


