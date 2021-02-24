import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Portfolio.scss";
import data from "../../data/data";

const Portfolio = () => {

  const proyects = data?.proyects;

  const PortfolioCard = ({ id, name, skills, url, image, imgAlt }) => {
    return (

      <div className="item-wrap">
        <Link to={`/portfolio/${id}`}>
          {" "}
          <div >
             <img   src={image} className="img-caldar" alt={imgAlt} />
          </div>
         
        </Link>
      </div>
    );
  };

  return (
    <>

      <div id="portfolio" className="portfolio-container">
        <h1 className="h1-portfolio" >
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
