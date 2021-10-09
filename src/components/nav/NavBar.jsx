import React from 'react';
import Bars from './Bars';
import NavLogo from './NavLogo';
const NavBar = ({ onToggle, onClose, navBarColor, barsColor }) => {
	return (
		<div
			className={`${navBarColor} w-screen h-30 fixed z-50 p-2 text-white text-right flex justify-between items-center`}>
			<NavLogo onClick={onClose} />
			<Bars onClick={onToggle} className={barsColor} />
		</div>
	);
};

export default NavBar;
