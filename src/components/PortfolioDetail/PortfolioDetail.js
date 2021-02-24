import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import caldarImg from "../../images/caldarImg.PNG";
import NavBar from "../NavBar/NavBar";
import "./PortfolioDetail.scss";
import data from "../../data/data";

const PortfolioDetail = () => {
  const { id } = useParams();
  const proyects = data?.proyects;
  const currentProyect = proyects[id - 1];
  const { name, skills, image, imgAlt, url } = currentProyect;

  

  return (
    <div>
      <NavBar />
      <div className="portfolioD-container">
        <h3>{name}.</h3>
        <div>
          {" "}
          <img src={image} className="img-caldar" alt={imgAlt} />
        </div>
        <div className="tec-container">
          <div className="styles">{skills[0]}</div>
          <div className="styles">{skills[1]}</div>
          <div className="styles">{skills[2]}</div>
          <div className="url">
            <a className="url" href={url} target="blank">
              URL
            </a>
          </div>
        </div>

        <div>
          {" "}
          <Link to="/">
            <button className="back-button">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
