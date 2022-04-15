import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../navigation/AuthProvider';
import { Link } from 'react-router-dom';
import '../../styles/App.css';
import '../../styles/Auth.css';
import Logo from '../../assets/images/logo.png';
import Icon from '@mdi/react';
import { mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [secure, setSecure] = useState(true);
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
		<section className='row authmain'>
			<div className='col-xs-12 col-sm-10 col-md-9 col-lg-6 col-xl-5'>
				<form className='login_wrapper text-center my-5'>
					<div className='image'>
						<div className='logocontainer'>
							<img src={Logo} alt='Logo' className='LogoImage' />
						</div>
					</div>
					<h5 className='my-3 font-weight-bold'>Welcome Back</h5>
					<h6 className='my-3'>
						Enter your email address and password to access admin panel.
					</h6>
					<p className='error'></p>

					<div className='form-group'>
						<div className='labal'>Email</div>
						<input
							type='email'
							className='form-control'
							placeholder='Email'
							onChange={(text) => setEmail(text.target.value)}
							value={email}
							autoComplete='none'
						/>
					</div>

					<div className='form-group'>
						<div className='labal'>Password</div>
						<div className='input-password'>
							<input
								type={secure ? 'password' : 'text'}
								maxLength='16'
								className='form-control password'
								placeholder='Password'
								onChange={(text) => setPassword(text.target.value)}
								value={password}
							/>
							<div className='eyeIcon'>
								<Icon
									path={secure ? mdiEyeOutline : mdiEyeOffOutline}
									title={secure ? 'Show' : 'Hide'}
									size={'25px'}
									color='#896839'
									onClick={() => setSecure(!secure)}
								/>
							</div>
						</div>
					</div>

					<div className='forgot-link d-flex align-items-center justify-content-between my-4'>
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

					<p className='my-4 font-weight-normal'>
						Don't have an account{' '}
						<Link to='/register'>
							<strong>Create here</strong>
						</Link>
					</p>
				</form>
			</div>
		</section>
	);
}

export default Login;
