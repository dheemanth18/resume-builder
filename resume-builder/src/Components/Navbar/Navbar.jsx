import React from "react";
import "./Navbar.css";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Navbar className="navbar" bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to="/" className="logo-link">
          Resume Builder
        </Link>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Nav;
