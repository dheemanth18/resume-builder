import React, { useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { Nav } from "../../export.helper";

const Basic = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const findFormErrors = () => {
    const { firstname, lastname, address, email, number } = form;
    const newErrors = {};
    if (!firstname || firstname === "")
      newErrors.firstname = "First Name can't be blank";
    if (!lastname || lastname === "")
      newErrors.lastname = "Last Name can't be blank";
    if (!address || address === "")
      newErrors.address = "Address can't be blank";
    if (!email || email === "") newErrors.email = "Email can't be blank";
    if (!number || number === "") newErrors.number = "Phone No. can't be blank";
    return newErrors;
  };

  const navigate = useNavigate();
  const reDirectRoute = () => {
    navigate("/education");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = findFormErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      reDirectRoute();
    }
  };

  return (
    <div className="basic-container">
      <Nav />
      <div className="basic-tab">
        <div className="progress-bar">
          <ProgressBar now={5} label={"0%"} animated />
        </div>
        <Breadcrumb className="bread-crumb">
          <Breadcrumb.Item active>
            <RiNumber1 /> Personal Details
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/education" onClick={handleSubmit}>
            <RiNumber2 /> Education
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/work" onClick={handleSubmit}>
            <RiNumber3 /> Work History
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/skill" onClick={handleSubmit}>
            <RiNumber4 /> Skills
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/award" onClick={handleSubmit}>
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
                  onChange={(e) => setField("firstname", e.target.value)}
                  isInvalid={!!errors.firstname}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstname}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col className="col-sm-6">
              <Form.Group>
                <Form.Label className="text-primary">Last Name</Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Enter your Last Name"
                  onChange={(e) => setField("lastname", e.target.value)}
                  isInvalid={!!errors.lastname}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastname}
                </Form.Control.Feedback>
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
                  onChange={(e) => setField("address", e.target.value)}
                  isInvalid={!!errors.address}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.address}
                </Form.Control.Feedback>
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
                  onChange={(e) => setField("email", e.target.value)}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col className="col-sm-6">
              <Form.Group>
                <Form.Label className="text-primary">Phone No.</Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Enter your Phone No."
                  onChange={(e) => setField("number", e.target.value)}
                  isInvalid={!!errors.number}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.number}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
        </Form>
        <div className="button">
          <Link to="" className="btn btn-outline-secondary btn-sm back-btn">
            <RiArrowLeftSFill className="back-arrow-icon" /> Back
          </Link>
          <Link
            to="/education"
            className="btn btn-primary btn-sm nxt-btn"
            onClick={handleSubmit}
          >
            Continue <RiArrowRightSFill className="nxt-arrow-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Basic;
