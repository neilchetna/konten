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
            <div className="bg-black-100 relative text-white-100 h-screen">
              <div className="absolute inset-0 z-50">
                <TopBar />
              </div>
              <div className="flex flex-row-reverse z-0">
                <div className="flex justify-end z-0">
                  <Sidebar {...props} />
                </div>
              </div>
              <Routes />
            </div>
          </>
        )}
      />
    </BrowserRouter>
  );
}

export default Layout;
