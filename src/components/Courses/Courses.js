import React from "react";
import "./Courses.scss";

const Courses = () => {
  return (
    <>
      <div class="education-container">
        <h1 className="h1-edu">
          <span className="education-headerline">Courses</span>
        </h1>
        <h3 className="university">Bootcamp Radium Rocket company</h3>
        <p class="info">
          Full Stack Developer <span>&bull;</span>{" "}
          <em class="date"> Oct 2020 - Jan 2021</em>
        </p>
        <ul className="ulist-education">
          <li>HTML.</li>
          <li>CSS.</li>
          <li>Responsive.</li>
          <li>JavaScript.</li>
          <li>Node JS.</li>
          <li>ES6,NPM y Express</li>
          <li>API REST y Mongo DB.</li>
          <li>Cloud Servers.</li>
          <li>React JS.</li>
          <li>Redux</li>
          <li>Form</li>
        </ul>
        <h3 className="university">Acamica company</h3>
        <p class="info">
          Full Stack Developer <span>&bull;</span>{" "}
          <em class="date"> Apr 2020 - Nov 2020</em>
        </p>
        <ul className="ulist-education">
          <li>HTML.</li>
          <li>CSS.</li>
          <li>SASS.</li>
          <li>JavaScript.</li>
          <li>Swagger.</li>
          <li>Postman</li>
          <li>Express.</li>
          <li>Node.</li>
          <li>MongoDB.</li>
          <li>MySQL</li>
        </ul>
      </div>
    </>
  );
};

export default Courses;
