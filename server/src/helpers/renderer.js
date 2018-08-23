import React from 'react';
import { renderToString } from 'react-dom/server';
// import Home from '../client/components/Home';
import { StaticRouter } from "react-router-dom";
import Routes from '../client/Routes'

export default (req) => {
	// nodejs does not recognize jsx. needs es5 syntax aka babel/bundle.
	// look at webpack.server.js for solution to this problem.
	const content = renderToString(
        <StaticRouter location={req.path} context={{}}>
            <Routes></Routes>
        </StaticRouter>
    );

	return `
        <html>
            <head></head>
            <body>
                <div id='root'>${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
};
