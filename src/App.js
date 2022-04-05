import './styles/App.css';
import Provider from './navigation';
import firebase from 'firebase';

require('firebase/firestore');

const firebaseConfig = {
	apiKey: 'AIzaSyBivmloob-mGU5Xt9pXCedQmteZROoXTrY',
	authDomain: 'blue-lyne.firebaseapp.com',
	projectId: 'blue-lyne',
	storageBucket: 'blue-lyne.appspot.com',
	messagingSenderId: '547109808342',
	appId: '1:547109808342:web:3fd34d9c4c41f3d1e64177',
	measurementId: 'G-F67WDZ42QK',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

function App() {
	return <Provider />;
}

export default App;
