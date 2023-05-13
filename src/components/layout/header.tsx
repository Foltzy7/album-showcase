import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./header.scss";
import CoffeeSmall from "../coffee/coffee-small";

function Header() {
  return (
    <Navbar className="nav-primary" expand="lg" variant="dark">
      <Navbar.Brand href="/">
        <CoffeeSmall />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link data-testid={"home-nav"} href="/" className="mr-5">
            Home
          </Nav.Link>
          <Nav.Link data-testid={"about-nav"} href="/about" className="mr-5">
            About
          </Nav.Link>
          <Nav.Link
            data-testid={"aspirations-nav"}
            href="/minitries"
            className="mr-5"
          >
            Aspirations
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
