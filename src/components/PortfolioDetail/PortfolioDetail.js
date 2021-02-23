import React,{useEffect,useState} from "react";
import { Link, useParams } from "react-router-dom";
import caldarImg from "../../images/caldarImg.PNG";
import NavBar from "../NavBar/NavBar";
import "./PortfolioDetail.scss";

const PortfolioDetail = () => {

  

  const {id} =useParams()
  console.log(id);


  return (
    <div>
      <NavBar />
      <div className="portfolio-container">
        <h3>React Caldar proyect.</h3>
        <div className="item-wrap">
            {" "}
            <img src={caldarImg} className="img-caldar" alt="img" />
        </div>
        <div className="tec-container">
          <div className="styles">React JS</div>
          <div className="styles">Redux</div>
          <div className="styles">CSS</div>
          <div className="url">
            <a
              className="url"
              href="https://react-caldar.vercel.app/"
              target="blank"
            >
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
