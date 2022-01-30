import React from "react";
import "./Work.css";
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

const Work = () => {
  return (
    <div className="work-container">
      <Nav />
      <div className="work-tab">
        <div className="progress-bar">
          <ProgressBar now={40} label={"40%"} animated />
        </div>
        <Breadcrumb className="bread-crumb">
          <Breadcrumb.Item href="/personal">
            <RiNumber1 /> Personal Details
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/education">
            <RiNumber2 /> Education
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            <RiNumber3 /> Work History
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/skill">
            <RiNumber4 /> Skills
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/award">
            <RiNumber5 /> Awards and Achievement
          </Breadcrumb.Item>
        </Breadcrumb>
        <Form className="work-form">
          <Form.Check
            className="no-work-check-box"
            type={"checkbox"}
            label={"I don't have any work history"}
          />
          <Row className="row">
            <Col className="col-sm-6 col">
              <Form.Group>
                <Form.Label className="text-primary">Job Title</Form.Label>
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
                <Form.Label className="text-primary">Employeer Name</Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Enter your Company Name"
                />
              </Form.Group>
            </Col>
            <Col className="col-sm-6">
              <Form.Group>
                <Form.Label className="text-primary">
                  Employeer Location
                </Form.Label>
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
          <Link to="/skill" className="btn btn-primary btn-sm nxt-btn">
            Continue <RiArrowRightSFill className="nxt-arrow-icon" />
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Work;
