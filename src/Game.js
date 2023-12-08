import React from 'react';
import GameContent from './game/GameContent';
import { GameContextProvider } from './game/GameContext';
import GameCard from './game/GameCard';

const Game = () => {

    /*
    return (
        <GameContextProvider>
            <div className="d-flex justify-content-center application d-flex align-items-center">
                <div className="bg-danger"> 
                <GameCard front={<h1>Devant</h1>} back={<h1>Back</h1>} />
                </div>
            </div>
        </GameContextProvider>
    );*/

    return (
        <GameContextProvider>
            <div className="d-flex justify-content-center bg-dark">
                <div className="display-pc shadow-lg d-flex flex-column bg-white">
                    <GameContent />
                </div>
            </div>
        </GameContextProvider>
    );
};

export default Game;