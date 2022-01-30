import React, { useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { Nav } from "../../export.helper";

const Education = () => {
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
    const {
      collegeName,
      collegeLocation,
      degree,
      fieldOfStudy,
      startDate,
      endDate,
    } = form;
    const newErrors = {};
    if (!collegeName || collegeName === "")
      newErrors.collegeName = "College Name can't be blank";
    if (!collegeLocation || collegeLocation === "")
      newErrors.collegeLocation = "College Location can't be blank";
    if (!degree || degree === "") newErrors.degree = "Degree can't be blank";
    if (!fieldOfStudy || fieldOfStudy === "")
      newErrors.fieldOfStudy = "Field of Study can't be blank";
    if (!startDate || startDate === "")
      newErrors.startDate = "Start Date can't be blank";
    if (!endDate || endDate === "")
      newErrors.endDate = "End Date can't be blank";
    return newErrors;
  };

  const navigate = useNavigate();
  const reDirectRoute = () => {
    navigate("/work");
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
    <div className="education-container">
      <Nav />
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
        <Form className="education-form">
          <Row className="row">
            <Col className="col-sm-6 col">
              <Form.Group>
                <Form.Label className="text-primary">College Name</Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Enter your College Name"
                  onChange={(e) => setField("collegeName", e.target.value)}
                  isInvalid={!!errors.collegeName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.collegeName}
                </Form.Control.Feedback>
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
                  onChange={(e) => setField("collegeLocation", e.target.value)}
                  isInvalid={!!errors.collegeLocation}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.collegeLocation}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row className="row">
            <Col className="col-sm-6">
              <Form.Group>
                <Form.Label className="text-primary">Degree</Form.Label>
                <Form.Control
                  size="sm"
                  as="select"
                  onChange={(e) => setField("degree", e.target.value)}
                  isInvalid={!!errors.degree}
                >
                  <option disabled selected value>
                    {" "}
                    Select an option
                  </option>
                  <option>High School</option>
                  <option>Higher Secondary</option>
                  <option>Bachelor's Degree</option>
                  <option>Master's Degree</option>
                  <option>PhD</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.degree}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col className="col-sm-6">
              <Form.Group>
                <Form.Label className="text-primary">Field of Study</Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Enter your Field of Study"
                  onChange={(e) => setField("fieldOfStudy", e.target.value)}
                  isInvalid={!!errors.fieldOfStudy}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.fieldOfStudy}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row className="row">
            <Col className="col-sm-6 col">
              <Form.Group>
                <Form.Label className="text-primary">Start Date</Form.Label>
                <Form.Control
                  size="sm"
                  type="date"
                  onChange={(e) => setField("startDate", e.target.value)}
                  isInvalid={!!errors.startDate}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.startDate}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col className="col-sm-6">
              <Form.Group>
                <Form.Label className="text-primary">End Date</Form.Label>
                <Form.Control
                  size="sm"
                  type="date"
                  onChange={(e) => setField("endDate", e.target.value)}
                  isInvalid={!!errors.endDate}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.endDate}
                </Form.Control.Feedback>
                <Form.Check
                  className="check-box"
                  type={"checkbox"}
                  label={"I currently study here"}
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
          <Link
            to="/work"
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

export default Education;
