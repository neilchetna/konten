import React from "react";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import Routes from "./Routes";

import { BrowserRouter, Route } from "react-router-dom";

function Layout() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <>
            <div className="bg-black-100 relative text-white-100 pt-14 h-screen">
              <div className="absolute inset-0">
                <TopBar />
              </div>
              <div className="flex relative z-0 flex-row-reverse h-full">
                <div className="flex justify-end h-full">
                  <Sidebar {...props} />
                </div>
                <div className="m-12 w-full">
                  <Routes />
                </div>
              </div>
            </div>
          </>
        )}
      />
    </BrowserRouter>
  );
}

export default Layout;
