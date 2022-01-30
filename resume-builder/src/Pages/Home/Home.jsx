import React from "react";
import "./Home.css";
import {
  RiPencilLine,
  RiNumber5,
  RiNumber3,
  RiNumber1,
  RiNumber0,
} from "react-icons/ri";
import { Card, ListGroup, ListGroupItem, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Nav, Footer } from "../../Components/export.helper";

const Home = () => {
  return (
    <div className="home-conatiner">
      <Nav />
      <div className="home-intro">
        <Alert variant="info">
          Buy the subscription for seamless experience of Resume Builder
        </Alert>
        <h1 className="home-heading">Hey there!</h1>
        <p className="home-note">
          Resume Builder is Easy, Effective, Impressive
        </p>
        <div className="button">
          <Link to="/personal" className="btn btn-primary btn-sm nxt-btn">
            Create Resume <RiPencilLine className="nxt-arrow-icon" />
          </Link>
        </div>
      </div>
      <div className="home-premium">
        <h3 className="premiun-heading">Checkout our plans</h3>
        <div className="cards">
          <Card className="card">
            <Card.Body className="card-body">
              <Card.Title className="card-title">Basic</Card.Title>
              <Card.Text className="card-text">Individual</Card.Text>
              <Card.Text className="card-rate text-primary">
                Rs. 999/- per yr.
              </Card.Text>
            </Card.Body>
            <ListGroup className="card-list list-group-flush">
              <ListGroupItem>
                <RiNumber5 /> Free templates per month
              </ListGroupItem>
              <ListGroupItem>
                Resume can be edited upto <RiNumber3 /> times
              </ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Link to="" className="btn btn-outline-primary btn-sm back-btn">
                Learn More
              </Link>
            </Card.Body>
          </Card>
          <Card border="success" className="card">
            <Card.Body className="card-body">
              <Card.Title className="card-title">Standard</Card.Title>
              <Card.Text className="card-text">
                Small team (Group of 10 members)
              </Card.Text>
              <Card.Text className="card-rate text-primary">
                Rs. 1,999/- per yr.
              </Card.Text>
            </Card.Body>
            <ListGroup className="card-list list-group-flush">
              <ListGroupItem>
                <RiNumber1 />
                <RiNumber5 /> Free templates per month
              </ListGroupItem>
              <ListGroupItem>
                Resume can be edited upto <RiNumber1 />
                <RiNumber0 /> times
              </ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Link to="" className="btn btn-primary btn-sm back-btn">
                Learn More
              </Link>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Body className="card-body">
              <Card.Title className="card-title">Premium</Card.Title>
              <Card.Text className="card-text">
                Large team (Group of 25 members)
              </Card.Text>
              <Card.Text className="card-rate text-primary">
                Rs. 2,999/- per yr.
              </Card.Text>
            </Card.Body>
            <ListGroup className="card-list list-group-flush">
              <ListGroupItem>
                <RiNumber5 />
                <RiNumber0 /> Free templates per month
              </ListGroupItem>
              <ListGroupItem>
                Resume can be edited upto <RiNumber5 />
                <RiNumber0 />
                times
              </ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Link to="" className="btn btn-outline-primary btn-sm back-btn">
                Learn More
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
