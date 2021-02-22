import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-right: 5%;
 

  .list {
    padding: 18px 10px;
    color: white;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgba(53,63,73,255);
    position: fixed;
    top: 0;
    right: 0;
    height: 54vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: all 0.3s ease;
    display: ${({ open }) => (open ? "flex" : "none")};
    z-index:100;
    

    .list {
      color: white;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open} className="u-list">
      <li className="list">
        <Link className="list" to="/">
          Home
        </Link>
      </li>
      <li className="list">
        <NavLink className="list" to="/skills">
          Skills
        </NavLink>
      </li>
      <li className="list">
        <NavLink className="list" to="/experiences">
          Experiences
        </NavLink>
      </li>
      <li className="list">
        <NavLink className="list" to="/educations">
          Educations
        </NavLink>
      </li>
      <li className="list">
        <NavLink className="list" to="/portfolios">
          Porfolios
        </NavLink>
      </li>
      <li className="list">
        <NavLink className="list" to="/contactForm">
          Contact
        </NavLink>
      </li>
      
    </Ul>
  );
};

export default RightNav;
