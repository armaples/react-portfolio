// Needs to provide developer's name & navigation with titles corresponding to different sections

import React from 'react';
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <h1>Alyssa Maples</h1>
            <Navigation />
        </header>
    )
};

export default Header;