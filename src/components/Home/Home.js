import React from "react";
import About from "../About/About";
import { ContactForm } from "../ContactForm/ContactForm";
import Educations from "../Educations/Educations";
import Experiences from "../Experiences/Experiences";
import { Languages } from "../Languages/Languages";
import NavBar from "../NavBar/NavBar";
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
      <Languages/>
      <Experiences />
      <ContactForm />
    </section>
  );
};

export default Home;
