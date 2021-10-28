import React from "react";
import Char from "./Char";

import ledger_items from "../../../../assets/jsondata/ledger_items.json";
import LedgerItems from "./LedgerItems";
import { GlobalProvider } from "../../../Context/GlobalState";

export default function Ledger(props) {
  return (
    <>
      <GlobalProvider>
        <div className="grid grid-cols-4 gird-rows-2 h-full gap-10 text-white-100 z-0">
          <div className="col-span-3">
            <Char />
          </div>
          <div className="bg-black-200 rounded-xl shadow-md">a</div>
          {ledger_items.map((item) => (
            <LedgerItems
              key={item}
              title={item.display_name}
              color={item.color}
            />
          ))}
        </div>
      </GlobalProvider>
    </>
  );
}
