import React from "react";
import Char from "./Char";
import Sidebar from "../../Sidebar";
import TopBar from "../../TopBar";

export default function Ledger() {
  return (
    <div className="bg-black-100 text-white-100 h-screen">
      <TopBar />
      <div className="flex flex-row-reverse z-0">
        <div className="flex justify-end z-0">
          <Sidebar />
        </div>
        <div className="flex flex-1 max-w-6xl justify-center items-center">
          <Char />
        </div>
      </div>
    </div>
  );
}
