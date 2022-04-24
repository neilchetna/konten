import React, { useState, createContext, useEffect } from "react";
import { callBackendApi } from "../utils/common";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [authError, setAuthError] = useState(null);

  function checkUserToken() {
    const userToken = Cookies.get("userToken");
    const user = jwt.decode(userToken);
    setLoggedInUser(user);
  }

  useEffect(() => {
    checkUserToken();
  }, []);

  async function userSingUp(userData) {
    try {
      const userRes = await callBackendApi({
        method: "post",
        url: "/auth/register",
        data: userData,
      });

      const { userToken } = userRes.data.data;
      Cookies.set("userToken", userToken);
    } catch (error) {
      if (error.response) {
        setAuthError(error.response.data.error.message);
      }
    }
  }

  async function userSingIn(userData) {
    try {
      const userRes = await callBackendApi({
        method: "post",
        url: "/auth/login",
        data: userData,
      });
      const { userToken } = userRes.data.data;
      Cookies.set("userToken", userToken);
    } catch (error) {
      if (error.response) {
        error.response.status = 401
          ? setAuthError("Invalid email or password")
          : setAuthError(error.response.data.data);
      }
    }
  }

  function userLogout() {
    Cookies.remove("userToken");
    checkUserToken();
  }
  return (
    <UserContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        authError,
        setAuthError,
        userSingUp,
        userSingIn,
        checkUserToken,
        userLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
