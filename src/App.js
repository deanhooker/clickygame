import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Container from './components/Container';
import CharacterCard from './components/CharacterCard';
import Footer from './components/Footer';
import characters from './characters.json';
import './App.css';

let score = 0;
let guessedArray = [];
let hiScore = 0;

const newGame = () => {
	guessedArray = [];
}

class App extends Component {

	state = {
		characters,
		score
	};

	guessCharacter = id => {

		if (!guessedArray.includes(id)) {
			guessedArray.push(id);
			score++;
			console.log(guessedArray);
		} 
		else {
			newGame();
		}
	}

	render() {
    	return(
			<div>
    			<Navbar score={score} hiScore={hiScore}/>
				<Jumbotron />
				<Container>
				{characters.map(character => 
					<CharacterCard 
					id={character.id}
					name={character.name}
					image={character.webImage}
					guessCharacter={this.guessCharacter}
					/>
				)}
				</Container>
				<Footer />
			</div>
    	)
  	};
};

export default App;
