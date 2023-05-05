import React from "react";

const About = () => {
  return (
    <div className="about-page">
      <div className="section-full page-about js-page-about">
        <div className="text-zone">
          <header>
            <h2 aria-label="My, Myself &amp; I" className="blast-root">
              <span className="blast" >
                M
              </span>
              <span className="blast" >
                y
              </span>
              <span className="blast" >
                ,
              </span>{" "}
              <span className="blast" >
                M
              </span>
              <span className="blast" >
                y
              </span>
              <span className="blast" >
                s
              </span>
              <span className="blast" >
                e
              </span>
              <span className="blast" >
                l
              </span>
              <span className="blast" >
                f
              </span>{" "}
              <span className="blast" >
                &amp;
              </span>{" "}
              <span className="blast" >
                I
              </span>
            </h2>
            <div className="fake-h2" hidden>My, Myself &amp; I</div>
          </header>
          <p>
            I’m a Front-End Developer located in Kyrgizstan. I have a little
            passion for UI effects, animations and creating intuitive, dynamic
            user experiences.
          </p>
          <p>
            Well-organised person, problem solver, independent employee with
            high attention to detail. Fan of outdoor activities, TV series
            and English literature.
          </p>
          <p>
            Interested in the entire frontend spectrum and working on ambitious
            projects with positive people.
          </p>
          <p>
            <a href="./Contacts.jsx" rel="contact">
              Let’s make something special.
            </a>
          </p>

          <div className="clear"></div>
        </div>
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
      </div>
    </div>
  );
};

export default About