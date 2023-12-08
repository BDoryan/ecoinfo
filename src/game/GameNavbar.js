import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import { GameContext } from './GameContext';

const GameNavbar = (props) => {

    const {setScore, setSound, sound} = useContext(GameContext);

    const setIndex = props.setIndex;

    return (
        <>
            <div className="bg-primary d-flex">
                <div className="ms-3 py-2">
                    <button onClick={() => {setIndex(0); setScore(0)}} className="btn text-decoration-none text-uppercase mb-0 fw-bold"><i className="fa-sharp fa-solid fa-house me-2"></i> Accueil</button>
                </div>
                <button onClick={() => setSound(!sound)} className="btn mt-auto mb-auto me-3 ms-auto fw-bold text-uppercase"><i className="fa-sharp fa-solid fa-volume"></i> {sound ? "Désactivez" : "Activez"} votre son</button>
            </div>
        </>
    );
};

export default GameNavbar;