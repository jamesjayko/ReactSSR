const express = require('express');

const React = require('react');
const renderToString = require('react-dom/server').renderToString; // runs only once to send html in string form to our dom
const Home = require('./client/components/Home').default;

const app = express();

app.get('/', (req, res) => {
    // nodejs does not recognize jsx. needs es5 syntax aka babel/bundle.
    // look at webpack.server.js for solution to this problem.
    const content = renderToString(<Home/>); 

    res.send(content);
});

app.listen(3000, () => {
	console.log('listening on port 3000');
});
