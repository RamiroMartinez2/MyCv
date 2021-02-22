import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { ImWhatsapp } from "react-icons/im";
import "./Footer.scss";

const Footer = () => {
  

  return (
    <footer className="footer">
      <ul className="ul-footer">
      <li>
            <a  className="footer-list"
              href="https://www.linkedin.com/in/ramiro-martinez91/"
              target="blank"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li >
            <a  className="footer-list" href="https://github.com/RamiroMartinez2" target="blank"> <AiFillGithub /></a>
           
          </li>
          <li>
            <a
             className="footer-list"
              target="blank"
              href="https://api.whatsapp.com/send?phone=(+54)93413263481&text=Hola,%20¿como%20estás?"
            >
              <ImWhatsapp />
            </a>
          </li>
      </ul>
      <ul class="copyright">
        <li>Copyright 2021</li>
        <li>Design by Ramiro Martinez</li>
      </ul>
    </footer>
  );
};

export default Footer;
