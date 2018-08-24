import React from 'react';
// import { Route } from 'react-router-dom';
import Home from './components/Home';
import UsersList, {loadData} from './components/UsersList';

// export default () => {

// this will no long work with react-router-config for server side rendering
// return (
// 	<div>
// 		<Route exact path="/" component={Home} />
// 		<Route path="/users" component={UsersList} />
// 	</div>
// );
// };

export default [
	{
		path: '/',
		component: Home,
		exact: true
	},
	{
		loadData: loadData,
		path: '/users',
		component: UsersList
	}
];
