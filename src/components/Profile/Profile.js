import React from "react";
import { Link } from "react-router-dom";
import "./Profile.scss";
import backgroundImage from "../../images/background.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { ImWhatsapp } from "react-icons/im";

const Profile = () => {
  return (
    <>
      <div className="banner-container">
        <div className="banner-text">
          <h1 className="headline">I'm Ramiro Martinez.</h1>
          <h3 className="text">
            Full Stack Developer..<span>&#160;</span>
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
          <li className="social-list">
            <a
              className="social-list"
              target="blank"
              href="https://api.whatsapp.com/send?phone=(+54)93413263481&text=Hola,%20¿como%20estás?"
            >
              <ImWhatsapp />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
