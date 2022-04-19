import React, {
	useState,
	useEffect,
	useRef,
	useCallback,
	useContext,
} from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from '../../navigation/AuthProvider';
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
	mdiMapMarkerRadiusOutline,
	mdiCartOutline,
} from '@mdi/js';

import Logo from '../../assets/images/logo.png';
import Dropdown from '../Dropdown/Dropdown';
import Dropdown2 from '../Dropdown/Dropdown2';
import Dropdown3 from '../Dropdown/Dropdown3';
import ProfDropdown from '../Dropdown/ProfDropdown';

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
	const { userData } = useContext(AuthContext);
	const [click, setClick] = useState(false);
	const [searchWord, setSearchWord] = useState('');
	const [dropdown, setDropdown] = useState('');
	const [profiledrop, setProfiledrop] = useState(false);

	const onMouseEnter = (e) => {
		if (window.innerWidth < 992) {
		} else {
			setDropdown(e);
		}
	};

	const onMouseLeave = () => {
		if (window.innerWidth < 992) {
		} else {
			setDropdown('');
		}
	};

	const onTap = (e) => {
		if (e === dropdown) {
			setDropdown('');
		} else {
			setDropdown(e);
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
							<div
								className='profile-nav'
								onClick={() => setProfiledrop(!profiledrop)}
							>
								<img
									src={
										userData !== null
											? userData.Image
											: 'https://www.pngkit.com/png/full/302-3022217_roger-berry-avatar-placeholder.png'
									}
									className='nav-image'
									alt='user'
								/>
								<div className='nav-user-name'>
									{userData !== null && userData.Name}
								</div>
								<Icon
									path={mdiChevronDown}
									title='dropdown'
									size={'20px'}
									color='#A58340'
								/>
							</div>
							{profiledrop && <ProfDropdown />}
						</div>
					</div>
				</div>
			</nav>
			<div className='main-nav'>
				<div className='nav'>
					<Icon
						path={click ? mdiClose : mdiMenu}
						title='menu'
						size={'28px'}
						color='#F0EFF5'
						className='menu-icon'
						onClick={handleClick}
					/>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className='nav-item'>
							<Link
								to='/'
								className='nav-links'
								onClick={closeMobileMenu}
								activeClass='nav-links-active'
							>
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
							onClick={() => onTap('manage')}
						>
							<div className='nav-links'>
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
									className='nav-icon'
								/>
							</div>
							{dropdown === 'manage' && (
								<Dropdown2 closeMobileMenu={closeMobileMenu} />
							)}
						</li>
						<li
							className='nav-item'
							onMouseEnter={() => onMouseEnter('communication')}
							onMouseLeave={onMouseLeave}
							onClick={() => onTap('communication')}
						>
							<div className='nav-links'>
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
									className='nav-icon'
								/>
							</div>
							{dropdown === 'communication' && (
								<Dropdown closeMobileMenu={closeMobileMenu} />
							)}
						</li>

						<li
							className='nav-item'
							onMouseEnter={() => onMouseEnter('create')}
							onMouseLeave={onMouseLeave}
							onClick={() => onTap('create')}
						>
							<div className='nav-links'>
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
									className='nav-icon'
								/>
							</div>
							{dropdown === 'create' && (
								<Dropdown3 closeMobileMenu={closeMobileMenu} />
							)}
						</li>
						<li
							className='nav-item'
							onMouseEnter={() => onMouseEnter('add')}
							onMouseLeave={onMouseLeave}
							onClick={() => onTap('add')}
						>
							<Link
								to='/orders'
								className='nav-links'
								onClick={closeMobileMenu}
							>
								<Icon
									path={mdiCartOutline}
									title='orders'
									size={'20px'}
									color='#F1F2EE'
									className='nav-icon'
								/>
								Orders
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/livemap'
								className='nav-links'
								onClick={closeMobileMenu}
								activeClass='nav-links-active'
							>
								<Icon
									path={mdiMapMarkerRadiusOutline}
									title='live locations'
									size={'20px'}
									color='#F1F2EE'
									className='nav-icon'
								/>
								Live Locations
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default NavBar;
