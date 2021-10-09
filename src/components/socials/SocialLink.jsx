import React from 'react';

const SocialLink = ({ href, text }) => {
	return (
		<a className="font-elite" href={href} target="_blank" rel="noreferrer">
			{text}
		</a>
	);
};

export default SocialLink;
