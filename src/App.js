import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Container from './components/Container';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
	render() {
    	return(
			<div>
    			<Navbar />
				<Jumbotron />
				<Container />
				<Footer />
			</div>
    	)
  	};
};

export default App;
