import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown3() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	const MenuItems = [
		{
			title: 'Announcement',
			path: '/announcement',
			cName: 'dropdown-link',
		},
		{
			title: 'Top Employees',
			path: '/topemployees',
			cName: 'dropdown-link',
		},
		{
			title: 'Promotions',
			path: '/promotions',
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
							onClick={() => setClick(false)}
						>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}

export default Dropdown3;
