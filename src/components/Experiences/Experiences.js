import React from "react";
import data from "../../data/data";

const Experiences = () => {
  const exp = data?.experience;
  const oldWork = exp.map((work) => (
    <>
      <h3 className="university">{work.company}</h3>
      <p className="info">
        {work.position}
        <span>&bull;</span> <em className="date"> {work.date}</em>
      </p>
      <ul className="ulist-exp">
        {work.duties.map((duty) => (
          <li>{duty}</li>
        ))}
      </ul>
    </>
  ));
  
  return (
    <>
      <div id="experiences" class="education-container">
        <h2 className="h1-edu">
          <span className="education-headerline">Work</span>
        </h2>
        {oldWork}
      </div>
    </>
  );
};

export default Experiences;
