import React, { useState, useContext } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../navigation/AuthProvider';
import Icon from '@mdi/react';
import { mdiAccount, mdiLogout } from '@mdi/js';

const ProfDropdown = () => {
	const { logout } = useContext(AuthContext);
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	return (
		<>
			<ul
				onClick={handleClick}
				className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
			>
				<li>
					<Link
						className='dropdown-link logout-link'
						to='/myProfile'
						onClick={() => setClick(false)}
					>
						<Icon
							path={mdiAccount}
							title='logout'
							size={'20px'}
							className='mr-2'
						/>
						My Profile
					</Link>
				</li>
				<li>
					<div className='dropdown-link logout-link' onClick={() => logout()}>
						<Icon
							path={mdiLogout}
							title='logout'
							size={'20px'}
							className='mr-2'
						/>
						Logout
					</div>
				</li>
			</ul>
		</>
	);
};

export default ProfDropdown;
