import React from "react";
import './CharacterCard.css';

const CharacterCard = props => (
    <div className="col-lg-3">
        <div 
        className="card" 
        id={props.id}
        onClick={() => props.guessCharacter(props.id)}
        >
            <img src={props.image} alt={props.name} />
        </div>
    </div>
);

export default CharacterCard;