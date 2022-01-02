import React from "react";
import Char from "./Char";

import { GlobalProvider } from "../../../Context/GlobalState";
import { Balance } from "./Balance";
import Entry from "./Entry";

export default function Ledger(props) {
  return (
    <>
      <GlobalProvider>
        <div className="grid grid-cols-4 gird-rows-2 h-full gap-10 text-white-100 z-0">
          <div className="col-span-3">
            <Char />
          </div>
          <div className="bg-black-200 rounded-xl shadow-md">
            <Entry />
          </div>
          <Balance />
        </div>
      </GlobalProvider>
    </>
  );
}
