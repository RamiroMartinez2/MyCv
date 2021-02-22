import React from "react";
import { Link } from "react-router-dom";
import caldarImg from "../../images/caldarImg.PNG";
import formImg from "../../images/formImg.PNG";
import gifosImg from "../../images/gifosImg.PNG";
import Footer from "../Footer/Footer";

import NavBar from "../NavBar/NavBar";
import PortfolioDetail from "../PortfolioDetail/PortfolioDetail";
import "./Portfolios.scss";

const Portfolios = () => {
  return (
    <>
      <NavBar />
      <div className="portfolio-container">
        <h1>CHECK OUT SOME OF MY WORKS.</h1>
        <div className="item-wrap">
          <Link to={`/portfolioDetail`}>
            {" "}
            <img src={caldarImg} className="img-caldar" alt="img" />
          </Link>
        </div>
      </div>

      <div className="portfolio-container">
        <div className="item-wrap">
          <Link to={`/portfolioDetail`}>
            {" "}
            <img src={gifosImg} className="img-caldar" alt="img" />
          </Link>
        </div>
      </div>

      <div className="portfolio-container">
        <div className="item-wrap">
          <Link to={`/portfolioDetail`}>
            {" "}
            <img src={formImg} className="img-caldar" alt="img" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Portfolios;
