// startup point for the client side application in the browser. normal react loader.

import React from 'react';
import ReactDOM from 'react-dom';
// import Home from './components/Home';

import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

ReactDOM.hydrate(
	<BrowserRouter>
		<Routes />
	</BrowserRouter>,
	document.querySelector('#root')
);

// console.log('hi there! client side');
