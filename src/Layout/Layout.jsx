import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Menu from "./Menu";
import Sound from "../pages/components/UI/buttons/Sound";
import Burger from "../pages/components/UI/buttons/Burger";

export const Layout = () => {
  return (
    <>
      <Menu />
      <Sound />
      <Burger />
      <Outlet />
      <Footer />
    </>
  );
};
