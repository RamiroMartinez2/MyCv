import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import "./Footer.scss";
import data from "../../data/data";

const Footer = () => {
  const copyright = data?.footer;
  console.log(copyright);

  return (
    <footer className="footer">
      <ul className="ul-footer">
        <li>
          <a
            className="footer-list"
            href="https://www.linkedin.com/in/ramiro-martinez91/"
            target="blank"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a
            className="footer-list"
            href="https://github.com/RamiroMartinez2"
            target="blank"
          >
            {" "}
            <AiFillGithub />
          </a>
        </li>
      </ul>
      <ul class="copyright">
        {copyright.map((i) => (
          <li>{i}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
