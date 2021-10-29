import React, { useContext } from "react";
import { GlobalContext } from "../../../Context/GlobalState";

import ledger_items from "../../../../assets/jsondata/ledger_items.json";
import LedgerItems from "./LedgerItems";

export function Balance() {
  const { transactions } = useContext(GlobalContext);

  const income = transactions.map(function (transaction) {
    if (transaction.type === "Income") {
      return transaction.amount;
    } else {
      return 0;
    }
  });

  const addIncome = income.reduce((acc, item) => (acc += item), 0);

  const expense = transactions.map(function (transaction) {
    if (transaction.type === "Expense") {
      return transaction.amount;
    } else {
      return 0;
    }
  });

  const addExpense = expense.reduce((acc, item) => (acc += item), 0);

  const netProfit = addIncome - addExpense;

  function output(name) {
    switch (name) {
      case "Expense":
        return addExpense;
        break;
      case "Income":
        return addIncome;
      case "Net-profit":
        return netProfit;
      default:
        break;
    }
  }

  return (
    <>
      {ledger_items.map((item, index) => (
        <LedgerItems
          key={index}
          title={item.display_name}
          color={item.color}
          balance={output(item.display_name)}
        />
      ))}
    </>
  );
}
