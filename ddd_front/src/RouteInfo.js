import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer";
function RouteInfo() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default RouteInfo;
