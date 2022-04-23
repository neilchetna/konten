import React, { useState, createContext } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
}
