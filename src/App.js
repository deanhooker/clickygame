import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import './App.css';

class App extends Component {
	render() {
    	return(
			<div>
    			<Navbar />
				<Jumbotron />
			</div>
    	)
  	};
};

export default App;
