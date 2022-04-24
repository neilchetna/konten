import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { callBackendApi } from "../utils/common";

// Initial state
const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

const api = "http://localhost:5000";

export const actions = {
  getTransactions: "GET_TRANSACTIONS",
  addTransaction: "ADD_TRANSACTION",
  deleteTransaction: "DELETE_TRANSACTION",
  transactionError: "TRANSACTION_ERROR",
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // Actions

  async function getTransactions() {
    try {
      const res = await callBackendApi({ method: "get", url: "/transaction" });
      dispatch({
        type: actions.getTransactions,
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: actions.transactionError,
        payload: err.response.data.error,
      });
    }
  }

  async function deleteTransaction(id) {
    try {
      await callBackendApi({ method: "delete", url: `/transaction${id}` });
      dispatch({
        type: actions.deleteTransaction,
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: actions.transactionError,
        payload: error.response.data.error,
      });
    }
  }

  async function addTransaction(transaction) {
    try {
      const res = await callBackendApi({
        method: "post",
        url: "/transaction",
        data: transaction,
      });
      dispatch({
        type: actions.addTransaction,
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: actions.transactionError,
        payload: error.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        deleteTransaction,
        addTransaction,
        getTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
