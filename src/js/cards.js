import { API_KEY } from "./api-service";
import makeMarkUp from "../templates/cards.hbs"

const getInfo = async (countryCode = "US") => {
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?size=20&apikey=${API_KEY}&countryCode=${countryCode}`;

    const listElem = document.querySelector('.js-cards-list');

    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        const markUp = makeMarkUp(result);
        listElem.innerHTML = markUp;
    } catch (error) {
        console.log(error);
    }
}

console.log(getInfo());
