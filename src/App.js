import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Container from './components/Container';
import CharacterCard from './components/CharacterCard';
import Footer from './components/Footer';
import characters from './characters.json';
// import './App.css';

let score = 0;
let guessedArray = [];
let hiScore = 0;

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}


class App extends Component {

	state = {
		characters,
		score,
		hiScore
	};

	newGame = () => {

		guessedArray = [];
		score = 0;
		this.setState({ score: 0 });
	}

	checkHiScore = score => {

		if (score > this.state.hiScore) {
			this.setState({ hiScore: score });
		}
	}

	guessCharacter = id => {

		if (!guessedArray.includes(id)) {
			guessedArray.push(id);
			score++;
			this.setState({ score: score });
			this.checkHiScore(score);
			shuffle(characters);
		}
		else {
			this.newGame();
		}
	}


	render() {
		return (
			<div>
				<Navbar score={this.state.score} hiScore={this.state.hiScore} />
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
