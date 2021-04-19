import React from "react";
import "./About.scss";
import profilePicture from "../../images/RamirosPhoto.jpeg";
import data from "../../data/data";

const About = () => {
  const { about, name, email, phone } = data?.contact;

  return (
    <>
      <div className="container-about">
        <div className="container-headline">
          <h2 className="about-headline">
            <strong>About Me</strong>
          </h2>
          <img className="mobile" src={profilePicture} alt="profile-picture" />
          <p className="text-about top">{about}</p>
        </div>
        <div className="container-headline top">
          <h2 className="about-headline">
            <strong>Contact Details</strong>
          </h2>
          <p className="text-about contact">
            <span>{name}</span>
            <br></br>
            <span>{phone}</span>
            <br></br>
            <span>{email}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
