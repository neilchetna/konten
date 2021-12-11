import React, { useState, useCallback, useEffect } from "react";
import Modal from "./Modal";

export default function LedgerItems({ title, color, balance = 0 }) {
  const [showModal, setShowModal] = useState(false);

  function handleModal() {
    setShowModal((prev) => !prev);
  }

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      <button
        className="md:p-2 flex-col-reverse flex justify-center items-center rounded-md shadow-md bg-black-200 relative hover:bg-black-100"
        onClick={handleModal}
      >
        <p className="inset-0">{title}</p>
        <p className={color}>
          {"\u20b9"}
          {balance}
        </p>
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal} title={title} />
    </>
  );
}
