import React from 'react';
import FooterSection from './FooterSection';

const aboutUs = [
	{ to: '/about', text: 'About' },
	{ to: '/careers', text: 'Careers' },
];

const menu = [{ to: '/menu', text: 'Menu' }];
const contact = [{ to: '/contact', text: 'Contact' }];

// const socials = [
// 	{ to: 'https://www.facebook.com/', text: 'Facebook' },
// 	{ to: 'https://www.instagram.com/?hl=en', text: 'Instagram' },
// 	{ to: 'https://twitter.com/?lang=en', text: 'Twitter' },
// ];
// const aboutUs = [{ to: '/about', text: 'About' }];
// const aboutUs = [{ to: '/about', text: 'About' }];

const Footer = () => {
	return (
		<div className="p-4 font-elite  border-black w-screen">
			<FooterSection title={'Menus'} links={menu} />
			<FooterSection title={'About Us'} links={aboutUs} />
			<FooterSection title={'Contact'} links={contact} />
		</div>
	);
};

export default Footer;
