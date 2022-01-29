import React from "react";
import "./Basic.css";
import { RiArrowRightSFill, RiArrowLeftSFill } from "react-icons/ri";
import { ProgressBar, Form, Row, Col, Breadcrumb } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Basic = () => {
  return (
    <div className="basic-tab">
      <div className="progress-bar">
        <ProgressBar now={5} label={"0%"} animated />
      </div>
      <Breadcrumb className="bread-crumb">
        <Breadcrumb.Item active>Personal Details</Breadcrumb.Item>
        <Breadcrumb.Item href="/education">Education</Breadcrumb.Item>
        <Breadcrumb.Item href="/work">Work History</Breadcrumb.Item>
        <Breadcrumb.Item href="/">Skills</Breadcrumb.Item>
        <Breadcrumb.Item href="/">Awards and Achievement</Breadcrumb.Item>
      </Breadcrumb>
      <Form className="form">
        <Row className="row">
          <Col className="col-sm-6 col">
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Enter your Full Name"
              />
            </Form.Group>
          </Col>
          <Col className="col-sm-6">
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Enter your Last Name"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="row">
          <Col className="col-sm-6">
            <Form.Group>
              <Form.Label>Residential Address</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Enter your Residential Address"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="row">
          <Col className="col-sm-6 col">
            <Form.Group>
              <Form.Label>Email Id</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Enter your Email Id"
              />
            </Form.Group>
          </Col>
          <Col className="col-sm-6">
            <Form.Group>
              <Form.Label>Phone No.</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Enter your Phone No."
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <div className="button">
        <Link to="" className="btn btn-outline-secondary btn-sm back-btn">
        <RiArrowLeftSFill className="back-arrow-icon" /> Back
        </Link>
        <Link to="/education" className="btn btn-primary btn-sm nxt-btn">
          Continue <RiArrowRightSFill className="nxt-arrow-icon"/>
        </Link>
      </div>
    </div>
  );
};

export default Basic;
