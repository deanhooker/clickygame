import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Container from './components/Container';
import CharacterCard from './components/CharacterCard';
import Footer from './components/Footer';
import characters from './characters.json';
import './App.css';


class App extends Component {
	render() {
    	return(
			<div>
    			<Navbar />
				<Jumbotron />
				<Container>
				{characters.map(character => 
					<CharacterCard 
					id={character.id}
					name={character.name}
					image={character.webImage}
					/>
				)}
				</Container>
				<Footer />
			</div>
    	)
  	};
};

export default App;
