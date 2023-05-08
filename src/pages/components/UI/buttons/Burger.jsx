import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../../../../redux/reducer/menu";

const Burger = () => {
  const dispatch = useDispatch();
  const menuIsOpened = useSelector((state) => state.menu.open);
  const showMenu = () => dispatch(openMenu());

  return (
    <>
      <div
        className={`mbtn ${menuIsOpened ? "mbtn-cl" : "mbtn-op"}`}
        onClick={showMenu}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="bars"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="svg-inline--fa fa-bars fa-w-14 fa-3x"
        >
          <path
            fill="currentColor"
            d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Burger;
