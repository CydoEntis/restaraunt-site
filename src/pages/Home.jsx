import React from 'react';

import NavImage from '../components/nav/NavImage';

import food from '../assets/images/food-on-fork.png';

const TEMP = [
	{
		src: 'https://cdn9.dissolve.com/p/D1301_75_013/D1301_75_013_1200.jpg',
		text: 'Menu',
		to: '/menu',
	},
	{
		src: 'https://www.tasteofhome.com/wp-content/uploads/2019/12/happy-waiters-bringing-food-table-serving-shutterstock_1384574870.jpg?fit=700,800',
		text: 'Careers',
		to: '/careers',
	},
	{
		src: 'https://images.unsplash.com/photo-1557180295-76eee20ae8aa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm90YXJ5JTIwcGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
		text: 'Contact',
		to: '/contact',
	},
];

const Home = () => {
	return (
		<section>
			<div className="relative w-screen h-screen flex flex-col justify-between overflow-hidden">
				<div className="pt-32 w-full text-center font-elite">
					<h2 className="text-6xl capitalize py-2">Feel</h2>
					<h2 className="text-6xl capitalize py-2">Like a</h2>
					<h1 className="text-8xl text-secondary uppercase py-4">King?</h1>
				</div>
				<img className="hero-image" src={food} alt="" />
			</div>
			<div className="py-10 px-4">
				{TEMP.map((item, index) => (
					<NavImage key={index} src={item.src} text={item.text} to={item.to} />
				))}
			</div>
		</section>
	);
};

export default Home;
