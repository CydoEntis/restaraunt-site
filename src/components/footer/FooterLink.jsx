import React from 'react';
import { Link } from 'react-router-dom';

const FooterLink = ({ to, text }) => {
	return (
		<Link className="hover:text-secondary" to={to}>
			{text}
		</Link>
	);
};

export default FooterLink;
