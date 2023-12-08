import React from 'react';
import Banner from './components/Banner';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import illustration from "./assets/imgs/undraw_dua_lipa_ixam.png"
import doryanbessiere from "./assets/imgs/doryanbessiere.jpeg"
import julianmorales from "./assets/imgs/julianmorales.jpg"
import baptistebouteille from "./assets/imgs/baptistebouteille.jpg"
import nathandelga from "./assets/imgs/nathandelga.jpg"
import lukafourny from "./assets/imgs/lukafourny.jpg"
import presentation_1 from "./assets/imgs/ecouter.png"
import presentation_2 from "./assets/imgs/informer.png"
import presentation_3 from "./assets/imgs/orienter.png"
import presentation_4 from "./assets/imgs/temoigner.png"
import presentation_5 from "./assets/imgs/soutenir.png"
import presentation_6 from "./assets/imgs/lutter.png"
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container pt-5 vh-100">
                <div className="row m-0">
                    <div className="col-md-4 d-flex flex-column">
                        <div className="mt-auto mb-auto ms-auto me-auto">
                            <h1 className="big-title ff-pacifico text-primary mt-auto mb-5">Notre super phrase d'accroche ici</h1>
                            <p className="mb-5">Les <span className="text-primary">IST</span> sont encore un fléau bien trop peu connu du grand public, il y a trop de mésinformations notamment chez les jeunes adultes, notre objectif avec ces quizs est de sensibiliser le mieux possible pour prévenir ces infections sexuellement transmissibles.</p>
                            <Link to="game" className="btn btn-primary btn-lg text-uppercase fs-3">Commencer le jeu</Link>
                        </div>
                    </div>
                    <div className="col-md-8 py-5 d-flex">
                        <img className="ms-auto mt-auto me-auto mb-auto w-100" src={illustration} alt="" />
                    </div>
                </div>
            </div>
            <div id="about" className="py-5">
                <h1 className="text-uppercase text-primary fw-bold mb-5 container">Qu'est-ce que c'est ?</h1>
                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="2000">
                            <img src={presentation_1} className="d-block ms-auto me-auto presentation" alt="..." />
                            <div className="carousel-caption text-white">
                                <h3 className="fw-bold text-uppercase">Écouter</h3>
                                <p className="fs-5">Soyez à l'écoute des autres et prenez le avec de la prévention.</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={presentation_2} className="d-block ms-auto me-auto presentation" alt="..." />
                            <div className="carousel-caption text-white">
                                <h3 className="fw-bold text-uppercase">S'informer</h3>
                                <p className="fs-5">Sensibilisez-vous aux maladies sexuellements transmissibles et aux risques.</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={presentation_3} className="d-block ms-auto me-auto presentation" alt="..." />
                            <div className="carousel-caption text-white">
                                <h3 className="fw-bold text-uppercase">S'orienter</h3>
                                <p className="fs-5">Si vous avez des doutes, n'hesitez pas à contacter votre généraliste.</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={presentation_4} className="d-block ms-auto me-auto presentation" alt="..." />
                            <div className="carousel-caption text-white">
                                <h3 className="fw-bold text-uppercase">Témoigner</h3>
                                <p className="fs-5">Parlez de vos problèmes sexuels n'est pas un tabou.</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={presentation_5} className="d-block ms-auto me-auto presentation" alt="..." />
                            <div className="carousel-caption text-white">
                                <h3 className="fw-bold text-uppercase">Soutenir</h3>
                                <p className="fs-5">Discrimminez les autres n'est pas la solution, au contraire entraidez-vous.</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={presentation_6} className="d-block ms-auto me-auto presentation" alt="..." />
                            <div className="carousel-caption text-white">
                                <h3 className="fw-bold text-uppercase">Lutter</h3>
                                <p className="fs-5">Le combattre, ça commence par se faire dépister.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div id="members" className="bg-light py-5">
                <div className="container">
                    <h1 className="text-uppercase text-primary fw-bold mb-5">Membres du projet</h1>
                    <div className="row g-5 justify-content-center m-0">
                        <div className="col-auto">
                            <div className="h-100 bg-primary p-4 d-flex flex-column justify-content-center rounded-5">
                                <img className="ms-auto me-auto card-pp rounded-circle mb-3 border border-4 border-light" src={doryanbessiere} alt="" />
                                <h3 className="text-white mb-0 fw-bolder text-center mb-2">Doryan BESSIERE</h3>
                                <div className="d-flex justify-content-center">
                                    <span className="text-white border border-2 px-2 rounded-5 fw-bolder">Développeur principal</span>
                                </div>

                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="h-100 bg-primary p-4 d-flex flex-column justify-content-center rounded-5">
                                <img className="ms-auto me-auto card-pp rounded-circle mb-3 border border-4 border-light" src={baptistebouteille} alt="" />
                                <h4 className="text-white mb-0 fw-bolder text-center mb-2">Baptiste BOUTEILLE</h4>
                                <div className="d-flex justify-content-center">
                                    <span className="text-white border border-2 px-2 rounded-5 fw-bolder">Développeur</span>
                                </div>

                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="h-100 bg-primary p-4 d-flex flex-column justify-content-center rounded-5">
                                <img className="ms-auto me-auto card-pp rounded-circle mb-3 border border-4 border-light" src={julianmorales} alt="" />
                                <h3 className="text-white mb-0 fw-bolder text-center mb-2">Julian MORALES</h3>
                                <div className="d-flex justify-content-center">
                                    <span className="text-white border border-2 px-2 rounded-5 fw-bolder">Superviseur</span>
                                </div>

                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="h-100 bg-primary p-4 d-flex flex-column justify-content-center rounded-5">
                                <img className="ms-auto me-auto card-pp rounded-circle mb-3 border border-4 border-light" src={nathandelga} alt="" />
                                <h3 className="text-white mb-0 fw-bolder text-center mb-2">Nathan DELGA</h3>
                                <div className="d-flex justify-content-center">
                                    <span className="text-white border border-2 px-2 rounded-5 fw-bolder">Contribueur</span>
                                </div>

                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="h-100 bg-primary p-4 d-flex flex-column justify-content-center rounded-5">
                                <img className="ms-auto me-auto card-pp rounded-circle mb-3 border border-4 border-light" src={lukafourny} alt="" />
                                <h3 className="text-white mb-0 fw-bolder text-center mb-2">Luka FOURNY</h3>
                                <div className="d-flex justify-content-center">
                                    <span className="text-white border border-2 px-2 rounded-5 fw-bolder">Designer</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;