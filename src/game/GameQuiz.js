import React, { useContext, useEffect, useState } from 'react';
import sunImage from "../assets/imgs/sun.png"
import earthImage from "../assets/imgs/earth.png"
import waveImage from "../assets/imgs/wave.png"
import illustrationGameCard from "../assets/imgs/illustration-game-card.png"
import { GameContext } from './GameContext';
import argh from '../assets/sounds/Argh.m4a';
import nion from '../assets/sounds/Nioooooon.m4a';
import letsgo from "../assets/sounds/Let’s go.m4a";
import suii from '../assets/sounds/Suiiiiii.m4a';
import useSound from 'use-sound';
import GameCard from './GameCard';

const GameQuiz = (props) => {

    const [volume, setVolume] = useState(0.15)

    const [arghSound] = useSound(
        argh,
        { volume: volume });

    const [nionSound] = useSound(
        nion,
        { volume: volume });

    const [suiiSound] = useSound(
        suii,
        { volume: volume });

    const [letsgoSound] = useSound(
        letsgo,
        { volume: volume });

    const { quizIndex, setQuizIndex, quiz, score, setScore, sound } = useContext(GameContext)
    const [questionIndex, setQuestionIndex] = useState(0)
    const [results, setResults] = useState(["", "", "", ""])
    const [goodResponse, setGoodResponse] = useState(null);
    const [nextQuiz, setNextQuiz] = useState(false)
    const [show, setShow] = useState(true)
    const [showNext, setShowNext] = useState(false);

    const [success, setSuccess] = useState([]);
    const [failed, setFailed] = useState([]);

    const setIndex = props.setIndex;

    const possibilities = ['a', 'b', 'c', 'd'];

    useEffect(() => {
        if (success.length == quiz[quizIndex].questions[questionIndex].correct_answers.length) {
            setGoodResponse(true)
            if(failed.length > 0) {
                // on lance audio pour expliquer sont erreur
            }
            // finish all success
        }
    }, [success, failed])

    const sendResponse = (index) => {
        console.log(failed);
        if (quiz[quizIndex].questions[questionIndex].correct_answers.includes(possibilities[index])) {
            setSuccess((success) => [...success, index])
            setScore(score + 10)

            if (sound)
                letsgoSound();
        } else {
            setFailed((failed) => [...failed, index])
            setScore(score - 10)
            if (sound)
                arghSound()
        }

        /*
        results.map((response, index) => {
            const results_ = results;
            if (quiz[quizIndex].questions[questionIndex].correct_answers.includes(possibilities[index])) {
                results_[index] = "btn-success"
            } else {
                results_[index] = "btn-danger"
            }
            setResults(results_)
        })*/
    }

    const next = async () => {
        if(!goodResponse)return;
        await setShow(false)
        setResults(["", "", "", ""])
        setGoodResponse(null)
        setFailed([])
        setSuccess([])

        if (questionIndex === quiz[quizIndex].questions.length - 1) {
            setNextQuiz(true)
            if (score > 0) {
                if (sound)
                    suiiSound();
            } else {
                if (sound)
                    nionSound();
            }
        } else {
            setQuestionIndex(questionIndex + 1)
        }
        setShow(true)
    }

    const getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    return (
        <>
            {show && (
                <div className="mt-auto mb-auto row flex-column justify-content-center gy-3 m-0 game-quiz">
                    <div className="d-flex flex-row position-relative" style={{}}>
                        <img src={sunImage} style={{}} className="object-fit-cover border-1 border-danger" height="120" width="120" />
                        <img src={earthImage} style={{}} className="ms-auto object-fit-cover border-1 border-danger" height="120" width="120" />
                    </div>
                    {nextQuiz ? (
                        <>
                            {
                                nextQuiz && (
                                    quizIndex == quiz.length - 1 ?
                                        (
                                            <h1 className="text-uppercase text-primary">Vous avez terminé le quiz</h1>
                                        ) :
                                        (
                                            <>
                                                <h1 className="text-uppercase text-primary">Voulez-vous passer au prochain quiz ?</h1>
                                                <button onClick={() => { setNextQuiz(false); setIndex(1); setQuizIndex(quizIndex + 1); setQuestionIndex(0) }} className="col-12 btn btn-primary btn-lg text-uppercase fw-bolder fs-1 animate__animated animate__lightSpeedInRight">{quiz[quizIndex + 1].title}</button>
                                            </>
                                        )
                                )
                            }
                        </>
                    ) : (
                        <>
                            <h5 className="fw-bolder text-uppercase text-center animate__animated animate__flip mb-0">{quiz[quizIndex].questions[questionIndex].question}</h5>
                            <div className="row g-4 gx-0 justify-content-center">
                                {
                                    quiz[quizIndex].questions[questionIndex].options.map((response, index) => {
                                        return (
                                            <div className={`col-6 col-lg-3 col-xxl-6`}>
                                                <GameCard
                                                    front={
                                                        <div className={"fw-bold fs-6 btn w-100 game-card text-white rounded-3 h-100 p-0 d-flex" + results[index]}>
                                                            <div className="px-4 py-2 mt-auto mb-2 lh-sm text-center w-100">
                                                                {response}
                                                            </div>
                                                        </div>
                                                    }
                                                    back={
                                                        <div className={`w-100 h-100 ${!quiz[quizIndex].questions[questionIndex].correct_answers.includes(possibilities[index]) ? 'bg-danger card-danger' : 'bg-success card-success'}`}></div>
                                                    }
                                                    handleClick={
                                                        () => {
                                                            if (goodResponse) return false;
                                                            if (failed.includes(index) || success.includes(index)) return false;
                                                            sendResponse(index)
                                                            return true;
                                                        }
                                                    }
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </>
                    )}
                    <div className="d-flex px-5 align-items-center py-3">
                    <h3 className="text-center fw-bold lh-1 py-0 my-0">Score: {score}</h3>
                    {goodResponse ? (
                        <button onClick={() => next()}class="btn btn-primary fs-3 ms-auto">Suivant</button>
                    ) : (<></>)}
                    </div>
                </div>
            )}
        </>
    );
};

export default GameQuiz;