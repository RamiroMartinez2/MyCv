import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import caldarImg from "../../images/caldarImg.PNG";
import formImg from "../../images/formImg.PNG";
import gifosImg from "../../images/gifosImg.PNG";
import NavBar from "../NavBar/NavBar";
import "./Portfolio.scss";
import data from "../../data/data";

const Portfolio = () => {
  const proyects = data?.proyects;

  const PortfolioCard = ({ id, name, skills, url, image, imgAlt }) => {
    return (
      <div className="item-wrap">
        <Link to={`/portfolio/${id}`}>
          {" "}
          <img src={image} className="img-caldar" alt={imgAlt} />
        </Link>
      </div>
    );
  };

  return (
    <>
      <NavBar />
      <div className="portfolio-container">
        <h1 className="h1-portfolio" id="portfolio">
          <span className="portfolio-headerline">Portfolio</span>
        </h1>
        {proyects.map((item) => (
          <PortfolioCard
            id={item.id}
            name={item.name}
            skills={item.skills}
            url={item.url}
            image={item.image}
            imgAlt={item.imgAlt}
          />
        ))}
      </div>
    </>
  );
};

export default Portfolio;
