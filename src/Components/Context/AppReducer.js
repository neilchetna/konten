import { actions } from "./GlobalState";

/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  switch (action.type) {
    case actions.getTransactions:
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };
    case actions.transactionError:
      return {
        ...state,
        error: action.payload,
      };
    case actions.deleteTransaction:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
      };
    case actions.addTransaction:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
