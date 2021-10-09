import React from 'react';
import { Link } from 'react-router-dom';

const FooterLink = ({ to, text }) => {
	return <Link to={to}>{text}</Link>;
};

export default FooterLink;
