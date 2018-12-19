import { combineReducers } from 'redux'
import {
    GET_DECK,
} from './Actions'

function cards(state = [], action) {
    switch (action.type) {
        case GET_DECK:
            return state;
        default:
            return state
    }
}

const gameApp = combineReducers({
    cards
});

export default gameApp