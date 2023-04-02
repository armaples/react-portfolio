import React from 'react';
// import '../styles/Header.css';
// import About from './pages/About';
// import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';
// import Resume from './pages/Resume';
// import { useState } from 'react';
// import Navigation from './Navigation'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Header.css'

function Header() {
    // const [currentPage, setCurrentPage] = useState('About');

    // const renderPage = () => {
    //     if (currentPage === 'About') {
    //         return <About />;
    //     }
    //     if (currentPage === 'Portfolio') {
    //         return <Portfolio />;
    //     }
    //     if (currentPage === 'Resume') {
    //         return <Resume />;
    //     }
    //     if (currentPage === 'Contact') {
    //         return <Contact />;
    //     }
    // };

    // const handlePageChange = (page) => setCurrentPage(page);

    return (
        <Navbar expand="md" sticky="top" variant="dark" className='navbar'>
            <Container>
                <Navbar.Brand href="about" className='navbar-brand'>Alyssa Maples</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="about">About</Nav.Link>
                        <Nav.Link href="portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="resume">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Header;