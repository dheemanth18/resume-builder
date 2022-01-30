import React from "react";
import "./Education.css";
import {
  RiAddLine,
  RiArrowRightSFill,
  RiArrowLeftSFill,
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
} from "react-icons/ri";
import { ProgressBar, Form, Row, Col, Breadcrumb } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Nav, Footer } from "../../export.helper";

const Education = () => {
  return (
    <div className="education-container">
      <Nav/>
      <div className="education-tab">
        <div className="progress-bar">
          <ProgressBar now={20} label={"20%"} animated />
        </div>
        <Breadcrumb className="bread-crumb">
          <Breadcrumb.Item href="/personal">
            <RiNumber1 /> Personal Details
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            <RiNumber2 /> Education
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/work">
            <RiNumber3 /> Work History
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/skill">
            <RiNumber4 /> Skills
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/award">
            <RiNumber5 /> Awards and Achievement
          </Breadcrumb.Item>
        </Breadcrumb>
        <Form className="form">
          <Row className="row">
            <Col className="col-sm-6 col">
              <Form.Group>
                <Form.Label className="text-primary">College Name</Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Enter your College Name"
                />
              </Form.Group>
            </Col>
            <Col className="col-sm-6">
              <Form.Group>
                <Form.Label className="text-primary">
                  College Location
                </Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Enter your College Location"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="row">
            <Col className="col-sm-6">
              <Form.Group>
                <Form.Label className="text-primary">Degree</Form.Label>
                <Form.Control size="sm" as="select">
                  <option>High School</option>
                  <option>Higher Secondary</option>
                  <option>Bachelor's Degree</option>
                  <option>Master's Degree</option>
                  <option>PhD</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col className="col-sm-6">
              <Form.Group>
                <Form.Label className="text-primary">Field of Study</Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Enter your Field of Study"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="row">
            <Col className="col-sm-6 col">
              <Form.Group>
                <Form.Label className="text-primary">Start Date</Form.Label>
                <Form.Control size="sm" type="date" />
              </Form.Group>
            </Col>
            <Col className="col-sm-6">
              <Form.Group>
                <Form.Label className="text-primary">End Date</Form.Label>
                <Form.Control size="sm" type="date" />
                <Form.Check
                  className="check-box"
                  type={"checkbox"}
                  label={"I currenltly studying here"}
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="add-more">
            <RiAddLine className="text-info" />
            <Link to className="add-more-btn">
              Add More Details in Education
            </Link>
          </div>
        </Form>
        <div className="button">
          <Link
            to="/personal"
            className="btn btn-outline-secondary btn-sm back-btn"
          >
            <RiArrowLeftSFill className="back-arrow-icon" /> Back
          </Link>
          <Link to="/work" className="btn btn-primary btn-sm nxt-btn">
            Continue <RiArrowRightSFill className="nxt-arrow-icon" />
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Education;
