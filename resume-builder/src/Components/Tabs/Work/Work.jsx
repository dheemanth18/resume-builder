import React from "react";
import "./Work.css";
import { RiAddLine, RiArrowRightSFill, RiArrowLeftSFill } from "react-icons/ri";
import { ProgressBar, Form, Row, Col, Breadcrumb } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="work-tab">
      <div className="progress-bar">
        <ProgressBar now={40} label={"40%"} animated />
      </div>
      <Breadcrumb className="bread-crumb">
        <Breadcrumb.Item href="/personal">Personal Details</Breadcrumb.Item>
        <Breadcrumb.Item href="/education">Education</Breadcrumb.Item>
        <Breadcrumb.Item active>Work History</Breadcrumb.Item>
        <Breadcrumb.Item href="/">Skills</Breadcrumb.Item>
        <Breadcrumb.Item href="/">Awards and Achievement</Breadcrumb.Item>
      </Breadcrumb>
      <Form className="form">
        <Row className="row">
          <Col className="col-sm-6 col">
            <Form.Group>
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Enter your Job Title"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="row">
          <Col className="col-sm-6">
            <Form.Group>
              <Form.Label>Employeer Name</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Enter your Company Name"
              />
            </Form.Group>
          </Col>
          <Col className="col-sm-6">
            <Form.Group>
              <Form.Label>Employeer Location</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Enter your Job Location"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="row">
          <Col className="col-sm-6 col">
            <Form.Group>
              <Form.Label>Start Date</Form.Label>
              <Form.Control size="sm" type="date" />
            </Form.Group>
          </Col>
          <Col className="col-sm-6">
            <Form.Group>
              <Form.Label>End Date</Form.Label>
              <Form.Control size="sm" type="date" />
              <Form.Check
                className="check-box"
                type={"checkbox"}
                label={"I currenltly work here"}
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="add-more">
          <RiAddLine className="text-info" />
          <Link to="" className="add-more-btn">
            Add More Details in Work History
          </Link>
        </div>
      </Form>
      <div className="button">
        <Link
          to="/education"
          className="btn btn-outline-secondary btn-sm back-btn"
        >
          <RiArrowLeftSFill className="back-arrow-icon" /> Back
        </Link>
        <Link to="" className="btn btn-primary btn-sm nxt-btn">
          Continue <RiArrowRightSFill className="nxt-arrow-icon" />
        </Link>
      </div>
    </div>
  );
};

export default Work;
