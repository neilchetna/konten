import React, { useContext } from "react";
import { GlobalContext } from "../../../Context/GlobalState";
import { DateTime } from "luxon";
import { CurrencyContext } from "../../../Context/CurrencyContext";

export default function Entry() {
  const { transactions } = useContext(GlobalContext);
  const { currency } = useContext(CurrencyContext);

  return (
    <div className="p-4 entry">
      <div className="w-full h-full">
        <p className="text-xl font-medium pb-1">Ledger Entry </p>
        <div className="entry overflow-scroll scroll-box">
          {transactions.map((transaction, index) => (
            <EntryList
              key={index}
              transaction={transaction}
              unicode={currency.uni}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function EntryList({ transaction = {}, unicode }) {
  const { deleteTransaction } = useContext(GlobalContext);
  function formater(num) {
    return (Math.round(num * 100) / 100).toFixed(2);
  }

  function handleDelete(e) {
    e.preventDefault();
    deleteTransaction(transaction._id);
  }

  return (
    <div className="flex flex-row p-1 w-full justify-between items-center border-b border-opacity-5 hover:bg-black-100 hover:bg-opacity-20">
      <div className="flex flex-row items-end gap-2">
        <button onClick={handleDelete} className="text-xl leading-none">
          {transaction.type}
        </button>
        <p className="text-xs opacity-40">
          {DateTime.fromISO(transaction.time).toLocaleString(DateTime.DATE_MED)}
        </p>
      </div>
      <p
        className={`${
          transaction.type === "Expense" ? "text-red-400" : "text-money-100"
        } text-2xl`}
      >
        {unicode}
        {formater(transaction.amount)}
      </p>
    </div>
  );
}
