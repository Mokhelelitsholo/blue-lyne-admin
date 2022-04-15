import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../navigation/AuthProvider';
import { Link } from 'react-router-dom';
import '../../styles/App.css';
import '../../styles/Auth.css';
import Logo from '../../assets/images/logo.png';

function Forgot() {
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);
	const { forgot } = useContext(AuthContext);

	const onReset = () => {
		setLoading(true);

		forgot(email);
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
					<h5 className='my-3 font-weight-bold'>Reset Password</h5>
					<h6 className='my-3'>
						Enter your email address and we'll send you an email with
						instructions to reset your password.
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

					<button
						type='button'
						className='btn mt-3 btn-custom btn-block text-uppercase rounded-pill btn-sm'
						onClick={() => onReset()}
					>
						{loading ? <div className='loader'></div> : 'Reset Password'}
					</button>

					<p className='my-4 font-weight-normal'>
						Back to{' '}
						<Link to='/login'>
							<strong>Sign In</strong>
						</Link>
					</p>
				</form>
			</div>
		</section>
	);
}

export default Forgot;
