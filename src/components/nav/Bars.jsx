import React from 'react';

const Bars = ({ onClick, className }) => {
	return (
		<i
			className={`${className} bx bx-menu text-right text-6xl mr-3 transform hover:opacity-70 duration-300 ease-in-out cursor-pointer`}
			onClick={onClick}></i>
	);
};

export default Bars;
