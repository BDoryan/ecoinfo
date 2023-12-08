import React from 'react';
import {
    BrowserRouter as Router
} from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';

import Game from './Game';
import Home from './Home';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/game" element={<Game/>}/>
            </Routes>
        </Router>
    );
};

export default AppRouter;