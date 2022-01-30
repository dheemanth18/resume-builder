import React from "react";
import "./Basic.css";
import {
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

const Basic = () => {
  return (
    <div className="basic-container">
      <Nav/>
      <div className="basic-tab">
        <div className="progress-bar">
          <ProgressBar now={5} label={"0%"} animated />
        </div>
        <Breadcrumb className="bread-crumb">
          <Breadcrumb.Item active>
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
          <Breadcrumb.Item href="/award">
            <RiNumber5 /> Awards and Achievement
          </Breadcrumb.Item>
        </Breadcrumb>
        <Form className="basic-form">
          <Row className="row">
            <Col className="col-sm-6 col">
              <Form.Group>
                <Form.Label className="text-primary">First Name</Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Enter your Full Name"
                />
              </Form.Group>
            </Col>
            <Col className="col-sm-6">
              <Form.Group>
                <Form.Label className="text-primary">Last Name</Form.Label>
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
                <Form.Label className="text-primary">
                  Residential Address
                </Form.Label>
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
                <Form.Label className="text-primary">Email Id</Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Enter your Email Id"
                />
              </Form.Group>
            </Col>
            <Col className="col-sm-6">
              <Form.Group>
                <Form.Label className="text-primary">Phone No.</Form.Label>
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
            Continue <RiArrowRightSFill className="nxt-arrow-icon" />
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Basic;
