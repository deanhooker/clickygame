import React from "react";
import './CharacterCard.css';

const CharacterCard = props => (
    <div className="card" id={props.name}>
        <img className="card-img-top" src={props.image} alt={props.name} />
    </div>
);

export default CharacterCard;