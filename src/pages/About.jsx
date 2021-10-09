import React from 'react';
import Footer from '../components/footer/Footer';
import HeroImage from '../components/hero/HeroImage';
import NavImage from '../components/nav/NavImage';
import Description from '../components/text/Description';

const FILLER = [
	'It’s always been about more than the food, and the setting and the service. The exciting bit is what happens when you put all this together, in places people want to get together in.',
	'It’s why we created a place that brings flavours, cultures and people together. Somewhere that’s always welcoming, doesn’t judge, discriminate or alienate. And we do it all with our own twist and our own swagger.',
	'Brunch, spot of lunch, or just drinks and nibbles, if it’s about getting together and kicking back, it’s all good.',
	'Because for us, it’s about an attitude to life, and food, that’s worth coming back for.',
];

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
const About = () => {
	return (
		<section className="w-screen bg-primary">
			<div>
				<HeroImage
					src={'https://miro.medium.com/max/11192/0*da7aKNrewcGK1osR'}
					subtext={"For Us, It's a"}
					text={'Social Thing'}
				/>
			</div>
			<div className="my-10">
				{FILLER.map((item, index) => (
					<Description key={index} text={item} />
				))}
			</div>
			<div className="p-4 link-wrapper">
				{TEMP.map((item, index) => (
					<NavImage key={index} src={item.src} text={item.text} to={item.to} />
				))}
			</div>
			<Footer />
		</section>
	);
};

export default About;
