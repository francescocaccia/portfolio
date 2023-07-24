import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logoPortfolio from "../logoPortfolio.png";
function MyNavbar() {
    return (
        <Navbar className="sticky-top navbar-with-shadow" bg="dark" variant="dark">
            <Navbar.Brand href="#home" className="mx-auto ms-2">Francesco Cacciapuoti</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavDropdown title="Language" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/">Italiano</NavDropdown.Item>
                        <NavDropdown.Item href="/en">English</NavDropdown.Item>
                        <NavDropdown.Item href="/fr">Français</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <div style={{ width: '50px', height: '50px' }} >
            <img className='img-fluid ' src={logoPortfolio} alt="logoPortfolio" style={{objectFit:"cover"}}/>
            </div>
        </Navbar>
    );
}

export default MyNavbar;


