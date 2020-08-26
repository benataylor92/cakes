import React from 'react';
import { Account } from '../Authentication/Accounts';
import { BrowserRouter as Router, Route, Link, Switch, BrowserRouter } from "react-router-dom"

import BuyACake from '../Pages/BuyACake';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import BecomeABaker from '../Pages/BecomeABakerPage';
import SignUp from '../Pages/SignUpPage';

function Navigation() {
    return (
        <Account>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/BuyACake" exact component={BuyACake} />
                <Route path="/BecomeABaker" exact component={BecomeABaker} />
                <Route path="/LoginPage" exact component={LoginPage} />
                <Route path="/SignUp" exact component={SignUp} />
            </Switch>
        </BrowserRouter>
        </Account>
    );
}

export default Navigation;