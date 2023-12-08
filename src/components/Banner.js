import React from 'react';
import Logo from './Logo';

const Banner = () => {
    return (
        <div className="d-flex">
            <Logo />
            <h2 className="ms-auto mt-auto mb-auto">Notre super phrase d'accroche.</h2>
        </div>
    );
};

export default Banner;