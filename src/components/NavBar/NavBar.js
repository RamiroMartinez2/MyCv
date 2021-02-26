import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import Burger from "../Burger/Burger";

const NavBar = () => {


  return (
    <>
      <nav className="nav-bar">
       
          <Link   className="logo"  to="/">
           Resume
          </Link>
        <Burger/>
      </nav>
    </>
  );
};

export default NavBar;
