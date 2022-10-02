import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer";
function RouteInfo() {
  return (
    <div
      style={{
        paddingBottom: "240px",
      }}
    >
      <Outlet />
      <Footer />
    </div>
  );
}

export default RouteInfo;
