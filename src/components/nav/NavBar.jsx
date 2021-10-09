import React from 'react';
import Bars from './Bars';
const NavBar = ({ onClick, navBarColor, barsColor }) => {
	return (
		<div className={`${navBarColor} w-screen h-30 fixed z-50 text-white text-right`}>
			<Bars onClick={onClick} className={barsColor} />
		</div>
	);
};

export default NavBar;
