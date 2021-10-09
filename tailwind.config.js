module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			barlow: ['Barlow'],
			elite: ['Special Elite'],
		},
		extend: {
			colors: {
				primary: '#F6F2E7',
				secondary: '#E95356',
				alt: '#EA5F28',
				accent: 'rgb(255, 199, 25)',
				transparent: 'rgba(0, 0, 0, 0)',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
