import React from "react";
import "./Award.css";
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
import { ProgressBar, Form, Row, Col, Breadcrumb, Alert} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Nav } from "../../export.helper";

const Award = () => {
  return (
    <div className="award-container">
      <Nav />
      <div className="award-tab">
        <div className="progress-bar">
          <ProgressBar now={80} label={"80%"} animated />
        </div>
        <Breadcrumb className="bread-crumb">
          <Breadcrumb.Item href="/personal">
            <RiNumber1 /> Personal Details
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/education">
            <RiNumber2 /> Education
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/work">
            <RiNumber3 /> Work History
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/skill">
            <RiNumber4 /> Skills
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            <RiNumber5 /> Awards and Achievement
          </Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="warning" className="award-note text-danger">These are not mandatory fields. You can skip these if you are not willing to add it in your Resume.</Alert>
        <Form className="form">
          <Row className="row">
            <Col className="col-sm-6 col">
              <Form.Group>
                <Form.Label className="text-primary">Awards</Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Enter Awards you received"
                />
              </Form.Group>
              <div className="add-desc-more">
                <RiAddLine className="text-secondary" />
                <Link to="" className="add-more-btn text-secondary">
                  Add description
                </Link>
              </div>
            </Col>
          </Row>
          <Row className="row">
            <Col className="col-sm-6 col">
              <Form.Group>
                <Form.Label className="text-primary">
                  Accomplishments
                </Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Enter your Accomplishments"
                />
              </Form.Group>
              <div className="add-desc-more">
                <RiAddLine className="text-secondary" />
                <Link to="" className="add-more-btn text-secondary">
                  Add description
                </Link>
              </div>
            </Col>
          </Row>
          <div className="add-award-more">
            <RiAddLine className="text-primary" />
            <Link to="" className="add-more-btn">
              Add More to your Awards and Accomplishments
            </Link>
          </div>
        </Form>
        <div className="button">
          <Link
            to="/skill"
            className="btn btn-outline-secondary btn-sm back-btn"
          >
            <RiArrowLeftSFill className="back-arrow-icon" /> Back
          </Link>
          <Link
            to="/resume"
            className="btn btn-primary btn-sm nxt-btn"
          >
            Submit <RiArrowRightSFill className="nxt-arrow-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Award;
