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
            <div className="bg-black-100 static text-white-100 pt-14 h-screen">
              <div className="flex static flex-row h-full">
                <div className="flex static justify-end h-full">
                  <Sidebar {...props} />
                </div>
                <div className="m-12 static w-full">
                  <Routes />
                </div>
                <div className="absolute inset-0 h-12">
                  <TopBar />
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
