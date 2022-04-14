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
import Profile from '../pages/Main/Profile';
import Product from '../pages/Main/Product';

import EmployeeManage from '../pages/Main/EmployeeManage';
import BusinessManage from '../pages/Main/BusinessManage';
import ProductManage from '../pages/Main/ProductManage';

import Messages from '../pages/Main/Messages';
import Requests from '../pages/Main/Requests';

import Announcement from '../pages/Main/Announcement';
import Promotions from '../pages/Main/Promotions';

import Orders from '../pages/Main/Orders';
import LiveLocation from '../pages/Main/LiveLocation';

function AppStack() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/profile' exact component={Profile} />
					<Route path='/product' exact component={Product} />
					<Route path='/employeemanage' exact component={EmployeeManage} />
					<Route path='/businessmanage' exact component={BusinessManage} />
					<Route path='/productmanage' exact component={ProductManage} />
					<Route path='/messages' exact component={Messages} />
					<Route path='/requests' exact component={Requests} />
					<Route path='/announcement' exact component={Announcement} />
					<Route path='/promotions' exact component={Promotions} />
					<Route path='/orders' exact component={Orders} />
					<Route path='/livemap' exact component={LiveLocation} />
					<Redirect from='*' to='/' />
				</Switch>
			</Router>
		</>
	);
}

export default AppStack;
