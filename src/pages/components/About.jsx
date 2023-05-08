import React from "react";

const About = () => {
  return (
    <div className="about-page">
      <div className="section-full page-about js-page-about">
        <div className="text-zone">
          <header>
            <h2 aria-label="My, Myself &amp; I" className="blast-root">
              <span className="blast">M</span>
              <span className="blast">y</span>
              <span className="blast">,</span> <span className="blast">M</span>
              <span className="blast">y</span>
              <span className="blast">s</span>
              <span className="blast">e</span>
              <span className="blast">l</span>
              <span className="blast">f</span>{" "}
              <span className="blast">&amp;</span>{" "}
              <span className="blast">I</span>
            </h2>
            <div className="fake-h2" hidden>
              My, Myself &amp; I
            </div>
          </header>
          <p>
            <strong>I am </strong> a Front-End developer from Kyrgyzstan. I have
            a little passion for programming and creating user interfaces
          </p>
          <br />
          <p>
            <strong>I got </strong>
            into web development through tutorials. With a specific goal in
            mind, in September 2022, I started diligently learning HTML and CSS.
            <br />
            <br />
            <strong>Then</strong>, in April 2023, I started building full
            websites from scratch using various complex technologies. My
            strengths are Native Javascript, React, Vue and Firebase.
          </p>
          <br />
          <p>
            <strong>I am</strong> - well-organised person, problem solver,
            independent employee with high attention to detail. Fan of outdoor
            activities, TV series and English literature.
          </p>
          <br />
          <strong>
            <a href="/contacts" rel="contact">
              Contact me
            </a>
          </strong>
          <div className="clear"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
