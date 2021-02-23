import React,  {useEffect,useState} from "react";
import { Link } from "react-router-dom";
import caldarImg from "../../images/caldarImg.PNG";
import formImg from "../../images/formImg.PNG";
import gifosImg from "../../images/gifosImg.PNG";
import NavBar from "../NavBar/NavBar";
import "./Portfolios.scss";
import data from "../../data/data";

const Portfolios = () => {
  const [datab, setDatab] = useState(data);
  console.log(datab);


  return (
    <>
      <NavBar />
      <div className="portfolio-container">
        <h1>CHECK OUT SOME OF MY WORKS.</h1>
        <div className="item-wrap">
          <Link to={`/portfolioDetail/${datab[0].id}`}>
            {" "}
            <img src={caldarImg} className="img-caldar" alt="img" />
          </Link>
        </div>
      </div>

      <div className="portfolio-container">
        <div className="item-wrap">
          <Link to={`/portfolioDetail/${datab[1].id}`}>
            {" "}
            <img src={gifosImg} className="img-caldar" alt="img" />
          </Link>
        </div>
      </div>

      <div className="portfolio-container">
        <div className="item-wrap">
          <Link to={`/portfolioDetail/${datab[2].id}`}>
            {" "}
            <img src={formImg} className="img-caldar" alt="img" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Portfolios;
