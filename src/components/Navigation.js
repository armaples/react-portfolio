import React from 'react';
import '../styles/Navigation';

// Needs to show About Me, Portfolio, Contact, Resume, links, and have current one highlighted. presented with section upon click. About me will be default

export default function Navigation( { currentPage, handlePageChange }) {
    return (
        <ul class="navigation">
            <li>
                <a 
                    href="#about" 
                    onClick={() => handlePageChange('About')} 
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </a>
            </li>
            <li>
            <a 
                    href="#portfolio" 
                    onClick={() => handlePageChange('Portfolio')} 
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </a>
            </li>
            <li>
            <a 
                    href="#resume" 
                    onClick={() => handlePageChange('Resume')} 
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </a>
            </li>
            <li>
            <a 
                    href="#contact" 
                    onClick={() => handlePageChange('Contact')} 
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
            </li>
        </ul>
    )
}