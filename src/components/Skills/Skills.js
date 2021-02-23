import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./Skills.scss";

const Skills = () => {
  return (
    <>
      <div className="skills-container">
        <div className="nav-skills">
          <NavBar />
        </div>
        <h1 className="h1-skills">
          <span id="skills" className="skills-headerline">Skills</span>
        </h1>
        <div class="bars">
          <ul class="skills">
            <li>
              <span class="bar-expand html"></span>
              <em>HTML5</em>
            </li>

            <li>
              <span class="bar-expand git"></span>
              <em>Git</em>
            </li>

            <li>
              <span class="bar-expand css"></span>
              <em>CSS/SASS</em>
            </li>
            <li>
              <span class="bar-expand js"></span>
              <em>JavaScript</em>
            </li>
            <li>
              <span class="bar-expand node"></span>
              <em>Node JS</em>
            </li>
            <li>
              <span class="bar-expand express"></span>
              <em>Express</em>
            </li>
            <li>
              <span class="bar-expand postman"></span>
              <em>Postman</em>
            </li>
            <li>
              <span class="bar-expand mongo"></span>
              <em>React JS</em>
            </li>
            <li>
              <span class="bar-expand react"></span>
              <em>MongoDB</em>
            </li>
            <li>
              <span class="bar-expand mysql"></span>
              <em>MySQL</em>
            </li>
            <li>
              <span class="bar-expand redux"></span>
              <em>Redux</em>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Skills;
