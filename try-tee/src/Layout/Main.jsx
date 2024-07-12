import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Home/Footer/Footer";
const Main = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      {noHeaderFooter || <Header />}
      <Outlet />
      {noHeaderFooter || <Footer />}
    </div>
  );
};
export default Main;
