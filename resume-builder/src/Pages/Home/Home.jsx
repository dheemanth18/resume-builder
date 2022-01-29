import React from "react";
import "./Home.css";
import { Navbar} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-conatiner">
      <Navbar className="navbar" bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/" className="logo-link">
            Resume Builder
          </Link>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Home;
