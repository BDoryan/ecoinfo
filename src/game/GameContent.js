import React, { useState } from 'react';
import GameNavbar from './GameNavbar';
import GameQuiz from './GameQuiz';
import GameQuizs from './GameQuizs';
import GameStart from './GameStart';
import charlieImage from "../assets/imgs/charlie.png"

const GameContent = () => {

    const [index, setIndex] = useState(0);

    const sections = [
        <GameStart setIndex={setIndex} />,
        <GameQuiz setIndex={setIndex} />,
        <GameQuizs setIndex={setIndex} />
    ]

    const [charlieY, setCharlieY] = useState(250);

    return (
        <div className="min-vh-100 d-flex flex-column relative" style={{ overflow: 'hidden' }}>
            <img onClick={() => setCharlieY((charlieY) => charlieY - 3)} className="position-absolute bottom-0 left-0" style={{ opacity: 0, width: "200px", marginBottom: "-" + charlieY + "px" }} src={charlieImage} />
            <GameNavbar setIndex={setIndex} />
            <div className="my-auto">
                {sections[index]}
            </div>
        </div>
    );
};

export default GameContent;