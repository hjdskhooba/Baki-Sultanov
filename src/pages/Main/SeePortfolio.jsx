import React from "react";
import { Link } from "react-router-dom";

const SeePortfolio = () => {
  return (
    <section
      id="section-work"
      data-load="work"
      className="section-full section-work js-way"
    >
      <div className="fake-big">Work</div>
      <div className="text-zone">
        <div>
          <header>
            <h2 aria-label="My Portfolio" className="blast-root">
              <span className="blast" aria-hidden="true">
                M
              </span>
              <span className="blast" aria-hidden="true">
                y
              </span>{" "}
              <span className="blast" aria-hidden="true">
                P
              </span>
              <span className="blast" aria-hidden="true">
                o
              </span>
              <span className="blast" aria-hidden="true">
                r
              </span>
              <span className="blast" aria-hidden="true">
                t
              </span>
              <span className="blast" aria-hidden="true">
                f
              </span>
              <span className="blast" aria-hidden="true">
                o
              </span>
              <span className="blast" aria-hidden="true">
                l
              </span>
              <span className="blast" aria-hidden="true">
                i
              </span>
              <span className="blast" aria-hidden="true">
                o
              </span>
            </h2>
          </header>
          <p>
            {" "}
            A small gallery of recent projects chosen by me. I've done them all
            together with amazing people from companies around the globe. It's
            only a drop in the ocean compared to the entire list. <br />{" "}
            Interested to see some more? Visit{" "}
            <a rel="work" href="/portfolio/">
              my work
            </a>{" "}
            page.
          </p>
        </div>
        <div>
          {" "}
          <Link rel="work" to="/portfolio/" className="flat-button">
            <div>
              {" "}
              <span className="bg"></span> <span className="base"></span>{" "}
              <span className="text">See more!</span>
            </div>{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SeePortfolio