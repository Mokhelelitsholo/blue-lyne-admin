import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../navigation/AuthProvider';
import { Link } from 'react-router-dom';
import '../../styles/App.css';
import '../../styles/Auth.css';
import Logo from '../../assets/images/logo.png';
import Icon from '@mdi/react';
import { mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js';

const Register = () => {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [secure, setSecure] = useState(true);
	const [loading, setLoading] = useState(false);
	const { register } = useContext(AuthContext);

	const onRegister = () => {
		setLoading(true);

		register(fullName, email, password);
	};

	useEffect(() => {
		setLoading(false);
	}, []);

	return (
		<section className='row authmain'>
			<div className='col-xs-12 col-sm-10 col-md-9 col-lg-6 col-xl-5'>
				<form className='login_wrapper text-center my-5'>
					<div className='image'>
						<div className='logocontainer'>
							<img src={Logo} alt='Logo' className='LogoImage' />
						</div>
					</div>
					<h5 className='my-3 font-weight-bold'>Hello, Welcome!</h5>
					<h6 className='my-3'>
						Don't have an account? Create your account, it takes less than a
						minute.
					</h6>
					<p className='error'></p>

					<div className='form-group'>
						<div className='labal'>Full Name</div>
						<input
							type='text'
							className='form-control'
							placeholder='Jane Doe'
							onChange={(text) => setFullName(text.target.value)}
							value={fullName}
							autoComplete='none'
						/>
					</div>

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
							<label>
								I accept{' '}
								<Link to='/register'>
									<strong>Terms and Conditions </strong>
								</Link>
							</label>
						</div>
					</div>

					<button
						type='button'
						className='btn mt-3 btn-custom btn-block text-uppercase rounded-pill btn-sm'
						onClick={() => onRegister()}
					>
						{loading ? <div className='loader'></div> : 'Sign Up'}
					</button>

					<p className='my-4 font-weight-normal'>
						Already have account?{' '}
						<Link to='/login'>
							<strong>Sign In</strong>
						</Link>
					</p>
				</form>
			</div>
		</section>
	);
};

export default Register;
