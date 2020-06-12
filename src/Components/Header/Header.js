import React from 'react';
import '../Header/header.css';
import Logo from '../../Images/Logo.png';

function Header() {

    const logoImageClick = () => {
        window.location.href="/"
    }

    return (
        <div className="Test">
        <img src={Logo} alt="cake_Logo" className="cake_Logo" onClick={() => logoImageClick()} />
        </div>
    );
}

export default Header;