import React from "react";
import "./Courses.scss";
import data from "../../data/data";

const Courses = () => {
  const courses = data?.courses;
  const currentCourses = courses.map((i) => (
    <>
      <h3 className="university">{i.name}</h3>
      <p class="info">
        {data.contact.profession}
        {" "}<span>&bull;</span><em class="date"> {i.date}</em>
      </p>
      <ul className="ulist-education">
        {i.skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </>
  ));

  return (
    <>
      <div class="education-container">
        <h1 className="h1-edu">
          <span className="education-headerline">Courses</span>
        </h1>
        {currentCourses}
      </div>
    </>
  );
};

export default Courses;
