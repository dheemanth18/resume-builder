import React from "react";
import "./Build.css";
import { RiEmotionHappyLine } from "react-icons/ri";
import {Alert, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Nav} from "../../Components/export.helper"

const Build = () => {
  return (
    <div className="build-container">
      <Nav/>
      <div className="resume-view">
        <Alert className="alert" variant="primary">
          Thank you!
          <RiEmotionHappyLine /> We've received your details, please wait untill
          we build your Resume.
        </Alert>
        <div className="loading-box">
          <Spinner animation="border" role="status"></Spinner>
          <div className="note">Building your Resume</div>
        </div>
      </div>
    </div>
  );
};

export default Build;
