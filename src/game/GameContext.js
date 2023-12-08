import React from 'react';
import { useState } from "react";
import quiz from "../assets/quiz/quiz.json"

const GameContext = React.createContext();

const GameContextProvider = ({children}) => {
    
    const [sound, setSound] = useState(true);
    const [score, setScore] = useState(0)
    const [quizIndex, setQuizIndex] = useState(0);

    return (
        <GameContext.Provider value={{sound, setSound, quizIndex, setQuizIndex, setScore, score, quiz}} >
            {children}
        </GameContext.Provider>
    )

};

export { GameContext, GameContextProvider };