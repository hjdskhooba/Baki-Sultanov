import { motion } from "framer-motion";
import React from "react";

const Skills = () => {
  return (
    <div className="skills-component">
      <header>
        <h2 aria-label="My, Myself &amp; I" className="blast-root">
          <span className="blast">M</span>
          <span className="blast">y</span> <span className="blast">S</span>
          <span className="blast">k</span>
          <span className="blast">i</span>
          <span className="blast">l</span>
          <span className="blast">l</span>
          <span className="blast">s</span>
        </h2>
        <div className="fake-h2" hidden>
          My, Myself &amp; I
        </div>
      </header>
      <div className="eb-progress-bar-wrapper">
        <div className="eb-progress-bar-wrapper">
          <label className="eb-progress-bar-title">
            <h2 className="skill-title">JavaScript</h2>
          </label>
          <div className="eb-progress-bar js ">
            <motion.div
              className="skill-progress"
              animate={{ width: "79%" }}
              transition={{ duration: 1.2, type: "spring" }}
            >
              79%
            </motion.div>
          </div>
          <label className="eb-progress-bar-title">
            <h2 className="skill-title2">HTML</h2>
          </label>
          <div className="eb-progress-bar html"></div>
          <motion.div
            className="skill-progress"
            animate={{ width: "86%" }}
            transition={{ duration: 2.2, type: "spring" }}
          >
            92%
          </motion.div>
        </div>
        <div className="eb-progress-bar-wrapper">
          <label className="eb-progress-bar-title">
            <h2 className="skill-title3">CSS</h2>
          </label>
          <div className="eb-progress-bar css">
            <motion.div
              className="skill-progress"
              animate={{ width: "82.92%" }}
              transition={{ duration: 2.9, type: "spring" }}
            >
              89%
            </motion.div>
          </div>
        </div>
        <div className="eb-progress-bar-wrapper">
          <label className="eb-progress-bar-title">
            <h2 className="skill-titlee">React.js</h2>
          </label>
          <div className="eb-progress-bar css">
            <motion.div
              className="skill-progress"
              animate={{ width: "79.92%" }}
              transition={{ duration: 1.9, type: "spring" }}
            >
              74%
            </motion.div>
          </div>
        </div>
        <div className="eb-progress-bar-wrapper">
          <label className="eb-progress-bar-title">
            <h2 className="skill-titlee">Vue.js</h2>
          </label>
          <div className="eb-progress-bar css">
            <motion.div
              className="skill-progress"
              animate={{ width: "73.92%" }}
              transition={{ duration: 1.9, type: "spring" }}
            >
              69%
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
