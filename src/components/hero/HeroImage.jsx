import React from 'react';

const HeroImage = ({ src, subtext, text }) => {
	const background = {
		backgroundImage: 'url(' + src + ')',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		width: '100%',
		height: '450px',
	};

	return (
		<>
			<div className="relative">
				<div className="absolute w-full h-full top-0 left-0 right-0 bottom-0 bg-black opacity-70 z-10"></div>
				<div className="relative uppercase w-screen" style={background}>
					<div className="absolute w-full top-1/2 transform -translate-y-1/2 text-white text-center font-bold z-20 font-elite">
						<h2 className="text-4xl">{subtext}</h2>
						<h1 className="text-accent text-7xl">{text}</h1>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroImage;
