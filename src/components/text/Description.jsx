import React from 'react';

const Description = ({ text }) => {
	return (
		<div className="text-center p-2">
			<p className="text-2xl p-2 font-elite font-medium">{text}</p>
		</div>
	);
};

export default Description;
