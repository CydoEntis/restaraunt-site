import React from 'react';

const NavMenu = ({ children }) => {
	return (
		<div className="absolute top-24 flex flex-col p-4 text-center text-primary w-screen">
			{children}
		</div>
	);
};

export default NavMenu;
