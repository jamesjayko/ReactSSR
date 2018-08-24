// ES5 -----
// const express = require('express');
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString; // runs only once to send html in string form to our dom
// const Home = require('./client/components/Home').default;

// ES6 -----
// since we are running webpack and babel in our app, we can use ES6 syntax so that we are using the same
// style of code in our server and client.
import 'babel-polyfill'; // this is to fix a regeneratorRuntime error from async and await axios call in actions.
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore'
// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import Home from './client/components/Home';

const app = express();

app.use(express.static('public'));

// this is a 'get' action from express server
app.get('*', (req, res) => {
    const store = createStore();



	res.send(renderer(req, store));
});

app.listen(3000, () => {
	console.log('listening on port 3000');
});
