import React from 'react';
import './card.styles.css';

export const Card = (props) => {
    return (
        <div className="card-container">
            <img alt="monster" src={`http://robohash.org/${props.monster.id}?size=180x180`} />
            <h3>{props.monster.name}</h3>
            <small>Email: {props.monster.email}</small>
        </div>
    )
}