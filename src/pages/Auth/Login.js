import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../navigation/AuthProvider';
import { Link } from 'react-router-dom';
import '../../styles/App.css';
import '../../styles/Auth.css';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const onLogin = () => {
		setLoading(true);

		login(email, password);
	};

	useEffect(() => {
		setLoading(false);
	}, []);

	const { login } = useContext(AuthContext);

	return (
		<section className='container'>
			<section className='row'>
				<div className='col-xs-12 col-sm-10 col-md-9 offset-md-1 col-lg-6 offset-lg-3 col-xl-6'>
					<form className='login_wrapper text-center mt-5'>
						<h3 className='mb-3 font-weight-bold'>Welcome Back</h3>
						<h6 className='mb-3'>Enter Your Details below</h6>

						<p className='error'></p>

						<div className='form-group'>
							<input
								type='email'
								className='form-control'
								placeholder='Email'
								onChange={(text) => setEmail(text.target.value)}
								value={email}
							/>
						</div>

						<div className='form-group'>
							<input
								type='password'
								maxLength='16'
								className='form-control'
								placeholder='Password'
								onChange={(text) => setPassword(text.target.value)}
								value={password}
							/>
						</div>

						<div className='forgot-link d-flex align-items-center justify-content-between'>
							<div className='form-check'>
								<input type='checkbox' className='form-check-input' />
								<label>Remember Password</label>
							</div>
							<Link to='/forgot'>Forgot Password?</Link>
						</div>

						<button
							type='button'
							className='btn mt-3 btn-custom btn-block text-uppercase rounded-pill btn-sm'
							onClick={() => onLogin()}
						>
							{loading ? <div className='loader'></div> : 'Sign In'}
						</button>

						<p className='mt-3 font-weight-normal'>
							Don't have an account{' '}
							<Link to='/register'>
								<strong>Create here</strong>
							</Link>
						</p>
					</form>
				</div>
			</section>
		</section>
	);
}

export default Login;
