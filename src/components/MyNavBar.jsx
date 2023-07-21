import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function MyNavbar() {
    return (
        <Navbar className="sticky-top navbar-with-shadow" bg="light" expand="lg" >
            <Navbar.Brand href="#home">Francesco Cacciapuoti</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavDropdown  title="Lingua" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#italiano">Italiano</NavDropdown.Item>
                        <NavDropdown.Item href="#inglese">Inglese</NavDropdown.Item>
                        <NavDropdown.Item href="#francese">Francese</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavbar;


