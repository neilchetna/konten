import React, { useState, useCallback, useEffect, useContext } from "react";
import { GlobalContext } from "../../../Context/GlobalState";

import Modal from "./Modal";

export default function LedgerItems({ title, color }) {
  const [showModal, setShowModal] = useState(false);

  function handleModal() {
    setShowModal((prev) => !prev);
  }

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  console.log(title);

  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <button
        className="md:p-2 flex-col-reverse flex justify-center items-center rounded-md shadow-md bg-black-200 relative"
        onClick={handleModal}
      >
        <p className="inset-0">{title}</p>
        <p className={color}></p>
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal} title={title} />
    </>
  );
}
