const express = require('express');

const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/Home').default;

const app = express();

app.get('/', (req, res) => {
    const content = renderToString(<Home/>); // nodejs does not recognize jsx. needs es5 syntax aka babel/bundle.

    res.send(content);
});

app.listen(3000, () => {
	console.log('listening on prot 3000');
});
