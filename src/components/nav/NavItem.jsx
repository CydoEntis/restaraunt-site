import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ children, to, onClick }) => {
	return (
		<NavLink
			className="font-barlow text-5xl font-bold py-1 transition-all duration-300 ease-in-out hover:text-black transform hover:-translate-y-1 slide-in"
			to={to}
			onClick={onClick}>
			{children}
		</NavLink>
	);
};

export default NavItem;
