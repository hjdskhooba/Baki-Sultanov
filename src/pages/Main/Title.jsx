import React from "react";
import nameFirstLetter from "../../assets/main/title/channels4_profile-removebg-preview.png";

export const Title = () => {
  let letter = document.querySelectorAll(".blast");
  return (
    <section className="main__title">
      <div className="text-zone">
        <h1 className="main__title-title">
          <span className="blast">H</span>
          <span className="blast">i</span>
          <span className="blast">,</span> <br />{" "}
          <div className="hello">
            <span className="blast">I</span>
            <span className="blast">’</span>
            <span className="blast">m</span>{" "}
            <div className="main__title-name">
              <img
                width="53"
                height="72"
                src={nameFirstLetter}
                alt="Web Developer Name"
                className="animation-logo"
              />
              <span className="blast">a</span>
              <span className="blast">k</span>
              <span className="blast">i</span>
              <span className="blast">,</span>
            </div>
          </div>
          <div className="web-dev">
            <span className="blast">w</span>
            <span className="blast">e</span>
            <span className="blast space">b </span>{" "}
            <span className="blast"> d</span>
            <span className="blast">e</span>
            <span className="blast">v</span>
            <span className="blast">e</span>
            <span className="blast">l</span>
            <span className="blast">o</span>
            <span className="blast">p</span>
            <span className="blast">e</span>
            <span className="blast">r</span>
          </div>
        </h1>
        <p className="gray-text">Frontend developer</p>
        <a className="contact">
          <div>Contact me</div>
        </a>
      </div>
      <div className="scroll-down">
        {" "}
        <span>scroll down</span>{" "}
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fal"
          data-icon="arrow-down"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="svg-inline--fa fa-arrow-down fa-w-14 fa-5x"
        >
          <path
            fill="currentColor"
            d="M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z"
            className=""
          ></path>
        </svg>
      </div>
      <div className="scroll-down scroll-down--left">
        {" "}
        <span>scroll down</span>{" "}
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fal"
          data-icon="arrow-down"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="svg-inline--fa fa-arrow-down fa-w-14 fa-5x"
        >
          <path
            fill="currentColor"
            d="M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z"
            className=""
          ></path>
        </svg>
      </div>
    </section>
  );
};
