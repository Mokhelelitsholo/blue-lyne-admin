import React, { useContext, useEffect, useState } from 'react';
import firebase from 'firebase';
import { AuthContext } from './AuthProvider';

import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Routes = () => {
	const { user, setUser } = useContext(AuthContext);
	const [initializing, setInitializing] = useState(true);

	const onAuthStateChanged = (user) => {
		setUser(user);
		if (initializing) setInitializing(false);
	};

	useEffect(() => {
		const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
		return subscriber;
	});

	if (initializing) return null;

	return <>{user ? <AppStack /> : <AuthStack />}</>;
};

export default Routes;
