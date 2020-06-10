import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, BrowserRouter } from "react-router-dom"

import BuyACake from '../Pages/BuyACake';

function Navigation() {
    return (
        <BrowserRouter>
            <Route path="/1" exact component={BuyACake} />
        </BrowserRouter>
    );
}

export default Navigation;