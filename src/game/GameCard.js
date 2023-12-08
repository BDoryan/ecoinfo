import React, { useState } from 'react';

const GameCard = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleClick = (event) => {
        if(!props.handleClick()) {
            event.preventDefault();
            return;
        }
      setIsFlipped(!isFlipped);
    };
  
    return (
      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
        <div className="card-inner">
          <div className="card-front">
            {props.front ?? ''}
          </div>
          <div className="card-back">
            {props.back ?? ''}
          </div>
        </div>
      </div>
    );
  };
  
  export default GameCard;