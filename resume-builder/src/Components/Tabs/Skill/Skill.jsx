import React from "react";
import "./Skill.css";
import {
  RiArrowRightSFill,
  RiArrowLeftSFill,
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
} from "react-icons/ri";
import { ProgressBar, Breadcrumb } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { WithContext as ReactTags } from "react-tag-input";
import { Nav } from "../../export.helper";

const Skills = [
  "JavaScript",
  "React.js",
  "Node.js",
  "Python",
  "C++",
  "Java",
  "Angular",
  "Ruby",
  "C",
  "Springboot",
  "PHP",
  "SQL",
  "MongoDB",
  "UI UX",
  "Graphic Designing",
  "Adobe XD",
];

const suggestions = Skills.map((skill) => {
  return {
    id: skill,
    text: skill,
  };
});

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const Skill = () => {
  const [tags, setTags] = React.useState([]);

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    setTags(newTags);
  };

  const onClearAll = () => {
    setTags([]);
  };

  return (
    <div className="skill-container">
      <Nav/>
      <div className="skill-tab">
        <div className="progress-bar">
          <ProgressBar now={60} label={"60%"} animated />
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
          <Breadcrumb.Item active>
            <RiNumber4 /> Skills
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/award">
            <RiNumber5 /> Awards and Achievement
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="button">
          <Link
            to="/work"
            className="btn btn-outline-secondary btn-sm back-btn"
          >
            <RiArrowLeftSFill className="back-arrow-icon" /> Back
          </Link>
          <Link to="/award" className="btn btn-primary btn-sm nxt-btn">
            Continue <RiArrowRightSFill className="nxt-arrow-icon" />
          </Link>
        </div>
        <div className="skill-field">
          <div className="heading">Add your Skills here</div>
          <ReactTags
            tags={tags}
            suggestions={suggestions}
            delimiters={delimiters}
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            handleDrag={handleDrag}
            onClearAll={onClearAll}
            placeholder="Enter your Skills"
            clearAll={true}
            inputFieldPosition="top"
            autocomplete
          />
        </div>
      </div>
    </div>
  );
};

export default Skill;
