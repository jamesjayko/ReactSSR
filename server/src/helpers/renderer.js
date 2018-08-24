import React from 'react';
import { renderToString } from 'react-dom/server';
// import Home from '../client/components/Home';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config'
import Routes from '../client/Routes';

export default (req, store) => {
	// nodejs does not recognize jsx. needs es5 syntax aka babel/bundle.
	// look at webpack.server.js for solution to this problem.
	const content = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.path} context={{}}>
                 {/* <Routes />  */}
                <div>{renderRoutes(Routes)}</div>
			</StaticRouter>
		</Provider>
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
