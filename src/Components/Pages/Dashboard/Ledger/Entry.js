import React, { useContext } from "react";
import { GlobalContext } from "../../../Context/GlobalState";

export default function Entry() {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);

  return (
    <div className="p-4">
      <p className="text-xl">Ledger Entry</p>
      <div>
        {transactions.map((transaction) => (
          <EntryList transaction={transaction} />
        ))}
      </div>
    </div>
  );
}

function EntryList({ transaction = {} }) {
  return (
    <div className="">
      <p>{transaction.type}</p>
      <p>{transaction.amount}</p>
    </div>
  );
}
