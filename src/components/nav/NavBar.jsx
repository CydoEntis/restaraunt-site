import React from 'react';
import Bars from './Bars';
import NavLogo from './NavLogo';
const NavBar = ({ onClick, navBarColor, barsColor }) => {
	return (
		<div
			className={`${navBarColor} w-screen h-30 fixed z-50 text-white text-right flex justify-between items-center`}>
			<NavLogo onClick={onClick} />
			<Bars onClick={onClick} className={barsColor} />
		</div>
	);
};

export default NavBar;
