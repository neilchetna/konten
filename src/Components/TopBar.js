import React from "react";
import user_image from "../assets/pfp.jpg";
import logo from "../assets/logo.svg";

export default function TopBar() {
  return (
    <div className="shadow-md bg-black-100 text-white-100 flex h-15 justify-between items-center px-3 py-3">
      <img className="h-8" src={logo} alt="#"></img>
      <div className="flex justify-around px-2">
        <img
          className="h-10 flex object-cover rounded-full w-10 ring ring-astra-100"
          src={user_image}
          alt="#"
        ></img>
        <p className="flex justify-center px-4 items-center">User Name</p>
      </div>
    </div>
  );
}
