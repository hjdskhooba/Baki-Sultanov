import React from "react";
import Title from "./Title";
import SeePortfolio from "./SeePortfolio";
import Projects from "../components/Projects";
import About from "../components/About";

const Main = () => {
  return (
    <div className="main">
      <Title />
      <SeePortfolio />
      <Projects />
      <About />
    </div>
  );
};

export default Main;
