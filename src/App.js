import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';

import Nav from './components/nav/Nav';
import NavMenu from './components/nav/NavMenu';
import NavItem from './components/nav/NavItem';
import NavBar from './components/nav/NavBar';

import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Careers from './pages/Careers';

const App = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	let fadeState = 'fade-in';
	const toggleMenu = () => {
		setIsNavOpen((prevState) => !prevState);
	};

	let navBarColor, barsColor;

	if (isNavOpen) {
		navBarColor = 'bg-transparent';
		barsColor = 'text-black';
	} else {
		navBarColor = 'bg-primary';
		barsColor = 'text-black';
	}

	return (
		<Router>
			<NavBar onClick={toggleMenu} navBarColor={navBarColor} barsColor={barsColor} />
			{isNavOpen && (
				<Nav className={fadeState}>
					<div className="nav" />
					<NavMenu>
						<NavItem to="/about" onClick={toggleMenu}>
							About
						</NavItem>
						<NavItem to="/menu" onClick={toggleMenu}>
							Menu
						</NavItem>
						<NavItem to="/careers" onClick={toggleMenu}>
							Careers
						</NavItem>
						<NavItem to="/contact" onClick={toggleMenu}>
							Contact
						</NavItem>
					</NavMenu>
				</Nav>
			)}
			{!isNavOpen && (
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/menu">
						<Menu />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="/careers">
						<Careers />
					</Route>
				</Switch>
			)}
		</Router>
	);
};

export default App;
