import axios from 'axios';

//test
console.log('Hallo daar!');

//get array with all countries
async function fetchData() {
    try {
        //retrieving array with country information of all countries
            const result = await axios.get('https://restcountries.com/v2/all')
            const countryList = result.data.map((country) => {
                const countryDiv = document.createElement("div");
                countryDiv.setAttribute("class", "country")
                const flagImg = document.createElement("img");
                flagImg.setAttribute("src", country.flag)
                flagImg.setAttribute("alt", `Flag of ${name}`);
                countryDiv.appendChild(flagImg);

                const infoP = document.createElement("p");
                infoP.setAttribute("class", "info");
                infoP.textContent = `${country.name} has a population of ${country.population} people.`;
                countryDiv.appendChild(infoP)

                const countryItem = document.getElementById("country-box").appendChild(countryDiv);

                return countryItem
            }); return countryList

        // //looping through the array, for each country first defining name and population
        //     const countryList = result.data.map((country) => {
        //     const name = country.name;
        //     const amount = country.population;
        //
        // //second, adding flag
        //     const flagImg = document.createElement("img");
        //     flagImg.setAttribute("src", country.flag)
        //     flagImg.setAttribute("alt", `Flag of ${name}`)
        //     const flag = document.getElementById("flag").appendChild(flagImg);
        //
        // // finally, adding text
        //     const infoP = document.createElement("p");
        //         infoP.textContent = `${name} has a population of ${amount} people`
        //         const info = document.body.appendChild(infoP)
        //     //return
        //         return "<div class='info'><p>`${name} has a population of ${amount} people`</p></div>" ;

    } catch(e) {
        console.error(e);
    }
}

fetchData().then(r => {});

// function allProducts(list) {
//     const products = list.map((item) => {
//         return '<div class="block">' + itemName(item) + '<br>' + itemPrice(item) + '<br>' + screenSizeInCm(item) + '</div>'
//     });
//     return products.join(" ");

