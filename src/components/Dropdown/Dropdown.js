import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';

const Dropdown = ({ closeMobileMenu }) => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	const MenuItems = [
		{
			title: 'Messages',
			path: '/messages',
			cName: 'dropdown-link',
		},
		{
			title: 'Requests',
			path: '/requests',
			cName: 'dropdown-link',
		},
	];

	return (
		<>
			<ul
				onClick={handleClick}
				className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
			>
				{MenuItems.map((item, index) => (
					<li key={index}>
						<Link
							className={item.cName}
							to={item.path}
							onClick={() => {
								setClick(false);
								closeMobileMenu();
							}}
						>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default Dropdown;
