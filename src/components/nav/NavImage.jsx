import React from 'react';
import { Link } from 'react-router-dom';

const NavImage = ({ to, src, text }) => {
	return (
		<Link className="cursor-pointer hover:opacity-70" to={to}>
			<div>
				<div className="img-wrapper">
					<img src={src} alt="" />
				</div>
				<h2 className="text-center text-3xl uppercase font-elite p-4 hover:text-secondary">
					{text}
				</h2>
			</div>
		</Link>
	);
};

export default NavImage;
