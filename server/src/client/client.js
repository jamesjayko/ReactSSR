// startup point for the client side application in the browser. normal react loader.
import 'babel-polyfill'; // this is to fix a regeneratorRuntime error from async and await axios call in actions.

import React from 'react';
import ReactDOM from 'react-dom';
// import Home from './components/Home';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Routes from './Routes';
import { renderRoutes } from 'react-router-config'
import reducers from './reducers'

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.hydrate(
	<Provider store={store}>
		<BrowserRouter>
            {/* <Routes /> */}
            <div>{renderRoutes(Routes)}</div>            
		</BrowserRouter>
	</Provider>,
	document.querySelector('#root')
);

// console.log('hi there! client side');
