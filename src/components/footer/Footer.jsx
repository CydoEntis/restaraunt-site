import React from 'react';
import FooterSection from './FooterSection';

const links = [];
const aboutUs = [{ to: '/about', text: 'About' }];

const Footer = () => {
	return (
		<div className="p-4">
			<FooterSection title={'About Us'} links={aboutUs} />
			<FooterSection title={'Menus'} links={links} />
			<FooterSection title={'Careers'} links={links} />
			<FooterSection title={'Contact Us'} links={links} />
			<FooterSection title={'Sign Up'} links={links} />
		</div>
	);
};

export default Footer;
