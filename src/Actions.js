/*
 * action types
 */
import fetch from 'cross-fetch'


export const GET_DECK = 'GET_DECK';

/*
 * action creators
 */
function receiveCard(json) {
    console.log(json);
    return {
        type: GET_DECK,
        deck: json
    }
}

function getCards(json) {
    let idDeck = json.deck_id;
    return fetch(`https://deckofcardsapi.com/api/deck/${idDeck}/draw/?count=52`)
        .then(response => response.json())
        .then(json => receiveCard(json))

}

function fetchDeck() {
    console.log("fetch");
    return fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
        .then(response => response.json())
        .then(json => getCards(json))

}

export function getDeck() {
    console.log("getDeck");
    return fetchDeck();
}
