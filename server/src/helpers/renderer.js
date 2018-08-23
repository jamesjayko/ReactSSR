import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/components/Home';

export default () => {
	// nodejs does not recognize jsx. needs es5 syntax aka babel/bundle.
	// look at webpack.server.js for solution to this problem.
	const content = renderToString(<Home />);

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
