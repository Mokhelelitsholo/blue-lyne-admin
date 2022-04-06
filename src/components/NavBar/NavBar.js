import React, {
	useState,
	useEffect,
	useRef,
	useCallback,
	useContext,
} from 'react';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';

import Icon from '@mdi/react';
import {
	mdiMenu,
	mdiClose,
	mdiBellBadgeOutline,
	mdiChevronDown,
	mdiMagnify,
	mdiMonitorDashboard,
	mdiMessageOutline,
	mdiBriefcaseOutline,
	mdiFolderPlus,
	mdiPencilPlusOutline,
	mdiCalendarMonthOutline,
} from '@mdi/js';

import Logo from '../../assets/images/logo.png';
import Dropdown from '../Dropdown/Dropdown';
import Dropdown2 from '../Dropdown/Dropdown2';
import Dropdown3 from '../Dropdown/Dropdown3';
import Dropdown4 from '../Dropdown/Dropdown4';

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

function NavBar() {
	let isMounted = useMountedState();
	const [click, setClick] = useState(false);
	const [navbar, setNavbar] = useState(false);
	const [searchWord, setSearchWord] = useState('');
	const [dropdown, setDropdown] = useState('');

	const onMouseEnter = (e) => {
		if (window.innerWidth < 960) {
			setDropdown('');
		} else {
			setDropdown(e);
		}
	};

	const onMouseLeave = () => {
		if (window.innerWidth < 960) {
			setDropdown('');
		} else {
			setDropdown('');
		}
	};

	const handleClick = () => {
		if (isMounted()) setClick(!click);
	};
	const closeMobileMenu = () => setClick(!click);

	return (
		<>
			<nav className='navbar'>
				<div className='navbar-container'>
					<div className='left'>
						<NavLink
							exact
							to='/'
							className='navbar-logo'
							onClick={closeMobileMenu}
						>
							<div className='logoimgcontainer'>
								<img src={Logo} alt='Logo' className='LogoImage' />
							</div>
						</NavLink>
						<div className='menu-icon' onClick={handleClick}>
							<Icon
								path={click ? mdiClose : mdiMenu}
								title='menu'
								size={'26px'}
								color='#A58340'
								className='mdiClose'
							/>
						</div>
					</div>
					<div className='right'>
						<div className='search'>
							<input
								type='text'
								className='search-input'
								placeholder='Search...'
								onChange={(text) => setSearchWord(text.target.value)}
								value={searchWord}
							/>
							<Icon
								path={mdiMagnify}
								title='search'
								size={'20px'}
								color='#A58340'
							/>
						</div>
						<div className='notification mt-1'>
							<Icon
								path={mdiBellBadgeOutline}
								title='Notification'
								size={'25px'}
								color='#A58340'
							/>
						</div>
						<div className='user-image'>
							<div className='profile-nav'>
								<img
									src='https://www.pngkit.com/png/full/302-3022217_roger-berry-avatar-placeholder.png'
									className='nav-image'
									alt='user'
								/>
								<div className='nav-user-name'>Tsholofelo</div>
								<Icon
									path={mdiChevronDown}
									title='dropdown'
									size={'20px'}
									color='#A58340'
								/>
							</div>
						</div>
					</div>
				</div>
			</nav>
			<div className='main-nav'>
				<div className='nav-menu'>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className='nav-item'>
							<Link to='/' className='nav-links' onClick={closeMobileMenu}>
								<Icon
									path={mdiMonitorDashboard}
									title='dashboard'
									size={'20px'}
									color='#F1F2EE'
									className='nav-icon'
								/>
								Dashboard
							</Link>
						</li>
						<li
							className='nav-item'
							onMouseEnter={() => onMouseEnter('manage')}
							onMouseLeave={onMouseLeave}
						>
							<Link className='nav-links' onClick={closeMobileMenu}>
								<Icon
									path={mdiBriefcaseOutline}
									title='manage'
									size={'20px'}
									color='#F1F2EE'
									className='nav-icon'
								/>
								Manage
								<Icon
									path={mdiChevronDown}
									title='down'
									size={'20px'}
									color='#F1F2EE'
									style={{ marginLeft: 5 }}
								/>
							</Link>
							{dropdown === 'manage' && <Dropdown2 />}
						</li>
						<li
							className='nav-item'
							onMouseEnter={() => onMouseEnter('communication')}
							onMouseLeave={onMouseLeave}
						>
							<Link className='nav-links' onClick={closeMobileMenu}>
								<Icon
									path={mdiMessageOutline}
									title='communication'
									size={'20px'}
									color='#F1F2EE'
									className='nav-icon'
								/>
								Communication
								<Icon
									path={mdiChevronDown}
									title='down'
									size={'20px'}
									color='#F1F2EE'
									style={{ marginLeft: 5 }}
								/>
							</Link>
							{dropdown === 'communication' && <Dropdown />}
						</li>

						<li
							className='nav-item'
							onMouseEnter={() => onMouseEnter('create')}
							onMouseLeave={onMouseLeave}
						>
							<Link className='nav-links' onClick={closeMobileMenu}>
								<Icon
									path={mdiFolderPlus}
									title='create'
									size={'20px'}
									color='#F1F2EE'
									className='nav-icon'
								/>
								Create
								<Icon
									path={mdiChevronDown}
									title='down'
									size={'20px'}
									color='#F1F2EE'
									style={{ marginLeft: 5 }}
								/>
							</Link>
							{dropdown === 'create' && <Dropdown3 />}
						</li>
						<li
							className='nav-item'
							onMouseEnter={() => onMouseEnter('add')}
							onMouseLeave={onMouseLeave}
						>
							<Link className='nav-links' onClick={closeMobileMenu}>
								<Icon
									path={mdiPencilPlusOutline}
									title='add'
									size={'20px'}
									color='#F1F2EE'
									className='nav-icon'
								/>
								Add
								<Icon
									path={mdiChevronDown}
									title='down'
									size={'20px'}
									color='#F1F2EE'
									style={{ marginLeft: 5 }}
								/>
							</Link>
							{dropdown === 'add' && <Dropdown4 />}
						</li>
						<li className='nav-item'>
							<Link
								to='/contact-us'
								className='nav-links'
								onClick={closeMobileMenu}
							>
								<Icon
									path={mdiCalendarMonthOutline}
									title='create'
									size={'20px'}
									color='#F1F2EE'
									className='nav-icon'
								/>
								Calendar
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default NavBar;
