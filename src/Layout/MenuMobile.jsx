import React from "react";
import nameFirstLetter from "../assets/main/title/channels4_profile-removebg-preview.png";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { openMenu } from "../redux/reducer/menu";

const MenuMobile = () => {
  const dispatch = useDispatch();
  const menuIsOpen = useSelector((state) => state.menu).open;
  const closeMenu = () => dispatch(openMenu());
  return (
    <div className={`menu mobile ${menuIsOpen ? "open" : "closed"}`}>
      <div className="menu__title">
        <Link to="/" onClick={closeMenu}>
          <img src={nameFirstLetter} alt="" className="menu__title-logo" />
        </Link>
        <h2 className="menu-name">Baki</h2>
        <p className="name-sub">Web developer</p>
      </div>
      <nav className="menu__navigation">
        {" "}
        <Link rel="about" to="/about" onClick={closeMenu}>
          About
        </Link>{" "}
        <Link rel="skills" to="/skills" onClick={closeMenu}>
          My Skills
        </Link>{" "}
        <Link rel="work" to="/projects" onClick={closeMenu}>
          Work
        </Link>{" "}
        <Link rel="contact" to="/contacts" onClick={closeMenu}>
          Contact
        </Link>{" "}
      </nav>
      <ul className="social">
        <li>
          <a
            href="https://www.linkedin.com/in/%D0%B1%D0%B0%D0%B9%D0%B3%D0%B5%D0%BB%D0%B4%D0%B8-%D0%B0%D0%B1%D0%B4%D1%8B%D1%85%D0%B0%D1%88%D0%B8%D0%BC-%D1%83%D1%83%D0%BB%D1%83-549467257/"
            target="_blank"
          >
            {" "}
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="linkedin-in"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="svg-inline--fa fa-linkedin-in fa-w-14 fa-5x"
            >
              <path
                fill="currentColor"
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                className=""
              ></path>
            </svg>{" "}
          </a>
        </li>
        <li>
          <a href="https://github.com/hjdskhooba" target="_blank">
            {" "}
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              className="svg-inline--fa fa-github fa-w-16 fa-3x"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                className=""
              ></path>
            </svg>{" "}
          </a>
        </li>
        <li>
          <a href="https://t.me/bakisultanovchirkin" target="_blank">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="svg-inline--fa fa-github fa-w-16 fa-3x svgshka3"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />{" "}
            </svg>
          </a>
        </li>
      </ul>
      <div></div>
    </div>
  );
};

export default MenuMobile;
