import React from 'react';
import FooterLink from './FooterLink';
import FooterTitle from './FooterTitle';

const FooterSection = ({ title, links }) => {
	return (
		<div className="py-2">
			<FooterTitle>{title}</FooterTitle>
			<div className="flex flex-col">
				{links.map((link, index) => (
					<FooterLink key={index} to={link.to} text={link.text} />
				))}
			</div>
		</div>
	);
};

export default FooterSection;
