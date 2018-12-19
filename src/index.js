import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import gameApp from './Reducers'
import App from './components/App'
import thunk from 'redux-thunk';
import {
    getDeck,
} from './Actions';
const store = createStore(gameApp, applyMiddleware(thunk));

const unsubscribe = store.subscribe(() => console.log(store.getState()))
store.dispatch(getDeck);
unsubscribe();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)