import React from "react";

const Skills = () => {
  return (
    <div className="skills-charts">
      <div id="myCanvasContainer">
        <canvas width="500" height="500" id="myCanvas">
          <ul>
            <li>
              <a
                data-weight="25"
                href="https://en.wikipedia.org/wiki/HTML"
                target="_blank"
              >
                HTML
              </a>
            </li>
          </ul>
        </canvas>
      </div>
      <div className="clear"></div>
    </div>
  );
};

export default Skills;
