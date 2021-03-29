import React from "react";
import Courses from "../Courses/Courses";
import "./Educations.scss";

const Educations = () => {
  return (
    <>
      <div id="education" class="education-container">
        <h2 className="h1-edu">
          <span className="education-headerline">Education</span>
        </h2>
        <h3 className="university">Universidad Abierta Interamericana</h3>
        <p className="info">
          Programmer analyst
          <span>&bull; </span> <em className="date">March 2021 - currently</em>
        </p>
        <p className="info">
          Degree in accounting <span>&bull;</span>{" "}
          <em className="date">May 2017</em>
        </p>
      </div>
      <Courses />
    </>
  );
};

export default Educations;
