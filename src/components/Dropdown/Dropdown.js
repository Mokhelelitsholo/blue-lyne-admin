import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	const MenuItems = [
		{
			title: 'Employees',
			path: '/employeesMsg',
			cName: 'dropdown-link',
		},
		{
			title: 'Business',
			path: '/businessMsg',
			cName: 'dropdown-link',
		},
		{
			title: 'Leave Request',
			path: '/leaveRequest',
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

export default Dropdown;
