import React from "react";
import { Outlet, useLocation } from "react-router-dom";
const Main = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default Main;
