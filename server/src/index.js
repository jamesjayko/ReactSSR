
// ES5 -----
// const express = require('express');
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString; // runs only once to send html in string form to our dom
// const Home = require('./client/components/Home').default;

// ES6 -----
// since we are running webpack and babel in our app, we can use ES6 syntax so that we are using the same
// style of code in our server and client.
import express from 'express';
import React from 'react';
import { renderToString } from "react-dom/server";
import Home from './client/components/Home';

const app = express();

// this is a 'get' action from express server
app.get('/', (req, res) => {
    // nodejs does not recognize jsx. needs es5 syntax aka babel/bundle.
    // look at webpack.server.js for solution to this problem.
    const content = renderToString(<Home/>); 

    res.send(content);
});

app.listen(3000, () => {
	console.log('listening on port 3000');
});
