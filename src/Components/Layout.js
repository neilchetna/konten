import React, { useContext } from "react";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import Routes from "./Routes";
import Signup from "./Pages/SIgnup/Signup";
import CurrencyProvider from "./Context/CurrencyContext";
import ForgotPassword from "./Pages/SIgnup/ForgotPassword";
import Signin from "./Pages/SIgnup/Signin";
import { UserContext } from "./Context/UserState";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function Layout() {
  const { loggedIn } = useContext(UserContext);
  const auth = loggedIn;
  return (
    <BrowserRouter>
      {/* <ForgotPassword />
      <Signin />
      <Signup /> */}
      {auth ? (
        <Route
          render={(props) => (
            <>
              <div className="bg-black-100 static text-white-100 pt-14 h-screen">
                <div className="flex static flex-row h-full">
                  <div className="flex static justify-end h-full">
                    <Sidebar {...props} />
                  </div>
                  <div className="m-12 static w-full">
                    <CurrencyProvider>
                      <Routes />
                    </CurrencyProvider>
                  </div>
                  <div className="absolute inset-0 h-12">
                    <TopBar />
                  </div>
                </div>
              </div>
            </>
          )}
        />
      ) : (
        <Switch>
          <Route path="/signin" exact component={Signup} />
          <Route path="/signup" exact component={Signin} />
          <Route path="/forgot-password" exact component={ForgotPassword} />
        </Switch>
      )}
    </BrowserRouter>
  );
}

export default Layout;
