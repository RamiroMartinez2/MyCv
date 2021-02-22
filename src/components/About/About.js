import React from "react";
import { Link } from "react-router-dom";
import "./About.scss";
import { FaDownload } from "react-icons/fa";
import profilePicture from "../../images/RamirosPhoto.jpeg";

const About = () => {
  return (
    <>
      <div className="container-about">
        <div className="container-headline">
          <h2 className="about-headline">
            <strong>About Me</strong>
          </h2>
          <img className="mobile" src={profilePicture} alt="profile-picture" />
          <p className="text-about top">
            I am a results oriented web developer with excellent communication
            skills. My goal is to have the opportunity to be part of a company
            that allows me to develop personally and professionally.
          </p>
        </div>
        <div className="container-headline">
          <h2 className="about-headline">
            <strong>Contact Details</strong></h2>
          <p className="text-about contact">
            <span>Ramiro Martinez</span>
            <br></br>
            <span>
              España 326 Street Floor 2 apart C<br></br>
              Rosario, Santa Fe, CP 2000 Argentina
            </span>
            <br></br>
            <span>(+54 ) 93413-263-481</span>
            <br></br>
            <span>ramiro.martinez91@hotmail.com</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
