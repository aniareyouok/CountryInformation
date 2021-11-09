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

function createSearchField() {
    //create searchField and add to search_container in search.html
    const searchField = document.createElement("input");
    searchField.setAttribute("id", "search_field");
    document.getElementById("search_container").appendChild(searchField);

    //create searchButton and add to search_container in search.html
    const searchButton = document.createElement("button");
    searchButton.setAttribute("id", "search_button");
    document.getElementById("search_container").appendChild(searchButton);

    //add eventlistener
    searchButton.addEventListener("click", () => {
        searchCountry(search);
    })
}

createSearchField();