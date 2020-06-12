import React from 'react';
import '../Header/header.css';
import Logo from '../../Images/Logo.png';

import NavigationBar from '../Header/NavigationBar';

function Header() {

    const logoImageClick = () => {
        window.location.href="/"
    }

    return (
        <div className="Header">
            <img src={Logo} alt="cake_Logo" className="cake_Logo" onClick={() => logoImageClick()} />
            <NavigationBar />
        </div>
    );
}

export default Header;