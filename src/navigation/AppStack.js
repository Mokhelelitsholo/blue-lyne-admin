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
import EmployeeManage from '../pages/Main/EmployeeManage';
import BusinessManage from '../pages/Main/BusinessManage';
import ProductManage from '../pages/Main/ProductManage';
import OrderManage from '../pages/Main/OrderManage';

function AppStack() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/employeemanage' exact component={EmployeeManage} />
					<Route path='/businessmanage' exact component={BusinessManage} />
					<Route path='/productmanage' exact component={ProductManage} />
					<Route path='/ordermanage' exact component={OrderManage} />
					<Redirect from='*' to='/' />
				</Switch>
			</Router>
		</>
	);
}

export default AppStack;
