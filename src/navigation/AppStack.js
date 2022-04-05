import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import '../styles/App.css';

import Navbar from '../components/NavBar/NavBar';

import Home from '../pages/Main/Home';

function AppStack() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact component={Home} />
					<Redirect from='*' to='/' />
				</Switch>
			</Router>
		</>
	);
}

export default AppStack;
