import React, { useContext } from 'react';
import Logo from '../components/BigLogo';
import logoImage from "../assets/imgs/logo.png"
import { GameContext } from './GameContext';
import { Link } from 'react-router-dom';

const GamzQuizs = (props) => {

    const {quiz, setQuizIndex} = useContext(GameContext)

    const setIndex = props.setIndex;

    return (
        <div className="row flex-column px-5 justify-content-center gy-3 border m-0 h-100">
            <div className="mt-auto mb-auto d-flex flex-column">
                <div className="d-flex mb-3">
                    <img className="ms-auto me-auto" width="100" height="100" src={logoImage} alt="" />
                </div>
                <div className="ms-auto me-auto mb-4 animate__animated animate__heartBeat">
                    <Logo />
                </div>
                <span className="lh-sm fs-1 text-center text-dark text-uppercase mb-0 animate__animated animate__heartBeat">Retrouvez la liste de <span className="text-primary">nos quizs</span></span>
            <div className="mt-5 row gy-3">
                {
                    quiz.map((quiz_, index) => {
                        return <button onClick={() => { setIndex(1); setQuizIndex(index)}} className="col-12 btn btn-primary btn-lg text-uppercase fw-bolder fs-1 animate__animated animate__lightSpeedInRight">{quiz_.title}</button>
                    })
                }
            </div>
            </div>
        </div>
    );
};

export default GamzQuizs;