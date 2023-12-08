import React, { useContext } from 'react';
import Logo from '../components/BigLogo';
import logoImage from "../assets/imgs/logo.png"
import { GameContext } from './GameContext';
import { Link } from 'react-router-dom';

const GameStart = (props) => {

    const setIndex = props.setIndex;

    return (
        <div className="px-3 row d-flex flex-column px-5 justify-content-center gy-3 m-0 h-100">
            <div className="mt-auto mb-auto d-flex flex-column">
                <div className="d-flex mb-3">
                    <img className="ms-auto me-auto" width="160" height="160" src={logoImage} alt="" />
                </div>
                <div className="ms-auto me-auto mb-4 animate__animated animate__heartBeat">
                    <Logo />
                </div>
                <span className="lh-sm fs-4 text-center text-dark text-uppercase mb-0 animate__animated animate__heartBeat fw-semibold"><span className="text-primary">Toutes les info sur l'éco</span></span>
                <div className="row gy-3 mt-5">
                    <button onClick={() => setIndex(1)} className="col-12 btn btn-primary btn-lg text-uppercase fw-bolder fs-4 animate__animated animate__lightSpeedInRight">Commencer</button>
                    <button onClick={() => setIndex(2)} className="col-12 btn btn-primary btn-lg text-uppercase fw-bolder fs-4 animate__animated animate__lightSpeedInRight">Quizs</button>
                    <Link to="/" className="col-12 btn btn-outline-primary btn-lg text-uppercase fw-bolder  fs-4 animate__animated animate__lightSpeedInRight">En savoir plus</Link>
                </div>
            </div>
        </div>
    );
};

export default GameStart;