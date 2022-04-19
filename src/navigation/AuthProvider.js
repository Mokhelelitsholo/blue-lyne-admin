import React, {
	useEffect,
	useState,
	createContext,
	useRef,
	useCallback,
} from 'react';
import firebase from 'firebase';

import Swal from 'sweetalert2';

export const AuthContext = createContext();

const useMountedState = () => {
	const mountedRef = useRef(false);
	const isMounted = useCallback(() => mountedRef.current, []);

	useEffect(() => {
		mountedRef.current = true;
		return () => {
			mountedRef.current = false;
		};
	}, []);

	return isMounted;
};

export const AuthProvider = ({ children }) => {
	let isMounted = useMountedState();

	const [user, setUser] = useState(null);
	const [userData, setUserData] = useState({});

	useEffect(() => {
		const getUser = async () => {
			if (user !== null) {
				await firebase
					.firestore()
					.collection('Users')
					.doc(user.uid)
					.get()
					.then((snapshot) => {
						if (snapshot.exists) {
							if (isMounted()) {
								setUserData(snapshot.data());
							}
						}
					})
					.catch((error) => {
						console.log(error.message);
					});
			} else {
				console.log('no user');
			}
		};

		getUser();
	}, [isMounted, user]);

	return (
		<AuthContext.Provider
			value={{
				user,
				setUser,
				userData,
				login: async (Email, Password) => {
					try {
						await firebase
							.auth()
							.signInWithEmailAndPassword(Email, Password)
							.then(() => {
								Swal.fire({
									title: 'Success!',
									text: 'You successfully logged in',
									icon: 'success',
									showCancelButton: false,
									confirmButtonColor: '#4B7BB6',
									confirmButtonText: 'Continue',
								}).then((result) => {
									if (result.isConfirmed) {
										window.location.reload();
									}
								});
							});
					} catch (e) {
						Swal.fire({
							title: 'Authentication Error',
							text: `${e.message}`,
							icon: 'error',
						});
					}
				},
				register: async (Name, Email, Password) => {
					try {
						await firebase
							.auth()
							.createUserWithEmailAndPassword(Email, Password)
							.then(() => {
								firebase
									.firestore()
									.collection('Users')
									.doc(firebase.auth().currentUser.uid)
									.set({
										Name,
										Email,
										Phone: '',
										User: 'Admin',
										Image:
											'https://www.pngkit.com/png/full/302-3022217_roger-berry-avatar-placeholder.png',
										createdAt: firebase.firestore.Timestamp.fromDate(
											new Date()
										),
									})
									.then(() => {
										Swal.fire({
											title: 'Success!',
											text: 'You are successfully registered',
											icon: 'success',
											showCancelButton: false,
											confirmButtonColor: '#4B7BB6',
											confirmButtonText: 'Continue',
										}).then((result) => {
											if (result.isConfirmed) {
												window.location.reload();
											}
										});
									});
							});
					} catch (e) {
						Swal.fire({
							title: 'Authentication Error',
							text: `${e.message}`,
							icon: 'error',
						});
					}
				},
				forgot: async (email) => {
					try {
						await firebase
							.auth()
							.sendPasswordResetEmail(email)
							.then(() => {
								Swal.fire({
									title: <p>Email Sent</p>,
									text: `Please check your email, we sent you a link to reset your password.`,
									icon: 'success',
								});
							});
					} catch (e) {
						Swal.fire({
							title: 'Authentication Error',
							text: `${e.message}`,
							icon: 'error',
						});
					}
				},
				logout: async () => {
					try {
						await firebase
							.auth()
							.signOut()
							.then(() => {
								window.location.href = '/';
							});
					} catch (e) {
						Swal.fire({
							title: 'Authentication Error',
							text: `${e.message}`,
							icon: 'error',
						});
					}
				},
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
