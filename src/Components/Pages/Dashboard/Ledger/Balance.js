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

  function formater(num) {
    return (Math.round(num * 100) / 100).toFixed(2);
  }

  function output(name) {
    switch (name) {
      case "Expense":
        return formater(addExpense);
        break;
      case "Income":
        return formater(addIncome);
      case "Net-profit":
        return formater(netProfit);
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
