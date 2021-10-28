import React, { useState, useContext } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { GlobalContext } from "../../../Context/GlobalState";

export default function Modal({ title, showModal, setShowModal }) {
  const [input, setInput] = useState("");

  const { addTransaction } = useContext(GlobalContext);

  function handleModal(e) {
    e.preventDefault();
    setShowModal((prev) => !prev);
  }

  function handleInput(e) {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      amout: +input,
      type: title,
    };

    console.log(newTransaction);

    addTransaction(newTransaction);
  }

  return (
    <>
      {showModal && title !== "Net-profit" ? (
        <div
          className="fixed z-50 flex justify-center items-center h-full w-full bg-black-100
      backdrop-filter backdrop-blur-sm blur-md bg-opacity-30"
        >
          <div className="bg-black-200 relative max-w-xl p-4 rounded-md flex flex-col gap-2 pt-10">
            <button
              className="absolute h-7 top-0 right-0 m-2"
              onClick={handleModal}
            >
              <IoIosCloseCircle />
            </button>
            <label>Add your {title}</label>
            <input
              className="pl-2 rounded-md h-9 bg-black-100 focus:ring-2 outline-none foucs:ring-astra-100"
              placeholder="Insert Amount"
              type="number"
              onChange={(e) => setInput(e.target.value)}
            ></input>
            <div className="flex flex-row h-10 gap-2 justify-between text mt-5">
              <button
                className="flex items-center rounded-md bg-astra-100 justify-center w-full"
                onClick={handleInput}
              >
                Enter
              </button>
              <button
                className="flex rounded-md items-center bg-black-100 justify-center w-full"
                onClick={handleModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}