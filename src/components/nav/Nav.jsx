import React from 'react';

const Nav = ({ children, className }) => {
	return <div className={`${className} relative  h-screen overflow-hidden bg-alt`}>{children}</div>;
};

export default Nav;
