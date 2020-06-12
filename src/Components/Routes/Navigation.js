import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, BrowserRouter } from "react-router-dom"

import BuyACake from '../Pages/BuyACake';
import HomePage from '../Pages/HomePage';

function Navigation() {
    return (
        <BrowserRouter>
            <Route path="" exact component={HomePage} />
            <Route path="/1" exact component={BuyACake} />
        </BrowserRouter>
    );
}

export default Navigation;