import React from "react";
import About from "../About/About";
import { ContactForm } from "../ContactForm/ContactForm";
import Educations from "../Educations/Educations";
import Experiences from "../Experiences/Experiences";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import PortfolioDetail from "../PortfolioDetail/PortfolioDetail";
import Portfolio from "../Portfolio/Portfolio";
import Profile from "../Profile/Profile";
import Skills from "../Skills/Skills";
import "./Home.scss";

const Home = () => {
  return (
    <section className="container">
      <NavBar />
      <Profile />
      <About />
      <Educations />
      <Skills />
      <Portfolio />
      <Experiences />
      <ContactForm />
    </section>
  );
};

export default Home;
