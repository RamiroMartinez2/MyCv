import React from "react";
import Courses from "../Courses/Courses";
import NavBar from "../NavBar/NavBar";
import './Educations.scss';

const Educations = () => {
  return (
    <>
    <NavBar/>
      <div class="education-container">
        <h1 id="education" className="h1-edu">
          <span className="education-headerline">Education</span>
        </h1>
        <h3 className="university">Universidad Abierta Interamericana</h3>
        <p className="info">
        Degree in accounting <span>&bull;</span>{" "}
          <em className="date">May 2017</em>
        </p>
      </div>
      <Courses/>
    </>
  );
};

export default Educations;
