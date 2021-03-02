import React from "react";
import "./Portfolio.scss";
import data from "../../data/data";

const Portfolio = () => {
  const proyects = data?.proyects;

  const PortfolioCard = ({
    id,
    name,
    skills,
    url,
    image,
    imgAlt,
    description,
  }) => {
    return (
      <>
        {" "}
        <div className="item-wrap">
          <div className="overflow">
            <img src={image} className="img" alt={imgAlt} />
          </div>
          <h3>{name}</h3>
          <p>{description}</p>
          <div className="container-button">
            <a href={url} target="_blank">
              Click here
            </a>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div id="portfolio" className="portfolio-container">
        <h2 className="h1-portfolio">
          <span className="portfolio-headerline">Portfolio</span>
        </h2>
        {proyects.map((item) => (
          <PortfolioCard
            id={item.id}
            name={item.name}
            skills={item.skills}
            url={item.url}
            image={item.image}
            imgAlt={item.imgAlt}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
};

export default Portfolio;
