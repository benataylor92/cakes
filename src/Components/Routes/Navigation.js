import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, BrowserRouter } from "react-router-dom"

import BuyACake from '../Pages/BuyACake';
import HomePage from '../Pages/HomePage';

function Navigation() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/BuyACake" exact component={BuyACake} />
            </Switch>
        </BrowserRouter>
    );
}

export default Navigation;