import React, { useState } from "react";
import { createContext } from "react";

const initalState = {
  name: "INR",
  uni: "\u20b9",
};

export const CurrencyContext = createContext(initalState);

export default function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState(initalState);
  const switchCurrency = (curr) => setCurrency(curr);

  return (
    <CurrencyContext.Provider value={{ currency, switchCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}
