import React from 'react';
import { Link } from 'react-router-dom';

const NavLogo = ({ onClick }) => {
	return (
		<Link to={'/'} className="text-black text-3xl font-elite font-bold p-2" onClick={onClick}>
			Foodies.
		</Link>
	);
};

export default NavLogo;
