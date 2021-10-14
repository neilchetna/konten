import React from "react";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import Routes from "./Routes";

function Layout() {
  return (
    <>
      <TopBar />
      <Sidebar />
      <Routes />
    </>
  );
}

export default Layout;
