import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import { Outlet } from "react-router-dom";
import FooterComponent from "../components/FooterComponent";
type Props = {};

const HomeTemplate = (props: Props) => {
  return (
    <div>
      <HeaderComponent />
      <div className="container mx-auto">
        <Outlet />
      </div>
      <FooterComponent />
    </div>
  );
};

export default HomeTemplate;
