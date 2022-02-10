import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const mainNavbar = () => {
    return (
        <Navbar id="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand id="brand" href="Raghav">Raghav Ghai</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto navItems">
                        <Nav.Link className="navLink" href="#About">About</Nav.Link>
                        <Nav.Link className="navLink" href="#resume">Resume</Nav.Link>
                        <Nav.Link className="navLink" href="#project">Projects</Nav.Link>
                        <Nav.Link className="navLink" href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default mainNavbar;