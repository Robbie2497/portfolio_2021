import React from "react";
import { useLocation } from "react-router-dom";
import { Nav, Navbar, Jumbotron } from 'react-bootstrap';




function Navigation() {
  const location = useLocation();

  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: "black" }}>
        <Navbar.Brand href="/" style={{ fontSize: "1.7rem" }}>Robert McGrew</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" style={{ textAlign: "center", color: "white" }}>About</Nav.Link>
            <Nav.Link href="/#projects" style={{ textAlign: "center", color: "white" }}>Projects</Nav.Link>
            <Nav.Link href="/contact" style={{ textAlign: "center", color: "white" }}>Contact</Nav.Link>
            <Nav.Link href="/feedback" style={{ textAlign: "center", color: "white" }}>Feedback</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Jumbotron fluid className={location.pathname === "/" ? "header-picture" : "header-picture-hidden"} style={{ backgroundImage: 'url(coding_2.jpg)' }}>
        <h1 className={location.pathname === "/" ? "homepage-heading" : "homepage-heading-hidden"} style={{ color: 'white', textAlign: 'center' }}>Full-Stack Web Developer</h1>
      </Jumbotron>
    </>
  );
}

export default Navigation;