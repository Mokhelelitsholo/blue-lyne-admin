import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import '../styles/App.css';

import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Forgot from '../pages/Auth/Forgot';

function AppStack() {
	return (
		<>
			<Router>
				<Switch>
					<Route path='/' exact component={Login} />
					<Route path='/register' component={Register} />
					<Route path='/forgot' component={Forgot} />
					<Redirect from='*' to='/' />
				</Switch>
			</Router>
		</>
	);
}

export default AppStack;
