// Need text/icon links to developers github and linkedin, and profile on third platform
import React from "react";
import '../styles/Footer.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
    return (
        <div>
        <Navbar fixed="bottom" variant="dark" className='footer'>
            <Container>
                <Nav.Link href="https://github.com/armaples">GitHub</Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/armaples/">LinkedIn</Nav.Link>
                <Nav.Link href="#">Codepen</Nav.Link>
            </Container>
        </Navbar>
        </div>
    )
}

export default Footer;