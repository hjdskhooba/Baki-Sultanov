import React from "react";
import Title from "./Title";
import SeePortfolio from "./SeePortfolio";
import Projects from "../components/Projects";
import About from "../components/About";
import Skills from "../components/Skills";

const Main = () => {
  return (
    <div className="main">
      <Title />
      <SeePortfolio />
      <Projects />
      <About />
      <Skills />
    </div>
  );
};

export default Main;
