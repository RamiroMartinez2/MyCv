import React from "react";
import "./NavBar.scss";
import { NavLink, Link } from "react-router-dom";
import Burger from "../Burger/Burger";

const NavBar = () => {


  return (
    <>
      <nav className="nav-bar">
        <div>
          <Link   className="logo"  to="/">
            CV
          </Link>
        </div>
        <Burger/>
      </nav>
    </>
  );
};

export default NavBar;
