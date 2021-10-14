import React from "react";

export function TextBox(name, placeholder) {
  return (
    <div className="bg-black-100 text-white-100">
      <span>
        <label>{name}</label>
      </span>
      <input placeholder={placeholder}></input>
    </div>
  );
}
