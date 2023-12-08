import React from 'react';
import Logo from './Logo';

const Navbar = () => {
    return (
        <div className="shadow bg-white">
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <Logo />
                    </a>

                    <ul className="nav nav-pills d-flex text-uppercase fw-bolder justify-content-center">
                        <li className="nav-item mt-auto mb-auto"><a href="#" className="nav-link" aria-current="page">Accueil</a></li>
                        <li className="nav-item mt-auto mb-auto"><a href="#about" className="nav-link">Qu'est-ce que c'est ?</a></li>
                        <li className="nav-item mt-auto mb-auto"><a href="#members" className="nav-link">Membres</a></li>
                    </ul>
                </header>
            </div>
        </div>
    );
};

export default Navbar;