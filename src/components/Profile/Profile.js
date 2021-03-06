import React from "react";
import "./Profile.scss";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";


const Profile = () => {
  return (
    <>
      <div className="banner-container">
        <div className="banner-text">
          <h1 className="headline">I'm Ramiro Martinez.</h1>
          <h3 className="text">
          Front End Developer..<span>&#160;</span>
          </h3>
        </div>
        <ul className="social">
          <li className="social-list">
            <a
              className="social-list"
              href="https://www.linkedin.com/in/ramiro-martinez91/"
              target="blank"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="social-list">
            <a
              className="social-list"
              href="https://github.com/RamiroMartinez2"
              target="blank"
            >
              {" "}
              <AiFillGithub />
            </a>
          </li>
         
        </ul>
      </div>
    </>
  );
};

export default Profile;
