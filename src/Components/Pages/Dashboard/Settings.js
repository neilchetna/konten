import React from "react";
import { Menu } from "@headlessui/react";

function Settings() {
  const curr = [
    {
      name: "INR",
      uni: "\u20b9",
    },
    {
      name: "USD",
      uni: "\u0024",
    },
    {
      name: "EUR",
      uni: "\u20AC",
    },
    {
      name: "GBP",
      uni: "\u00A3",
    },
    {
      name: "YEN",
      uni: "\u00A5",
    },
  ];

  return (
    <div className="">
      <div className="width-md flex justify-center flex-col items-center">
        <h2 className="text-2xl pb-4">Settings</h2>
        <Menu
          as="div"
          className="bg-black-200 p-3 gap-10 flex justify-between rounded-md shadow-lg relative max-w-screen-md"
        >
          Currencies
          <Menu.Button>PlaceHolder Ruppes</Menu.Button>
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-black-200 rounded-md shadow-sm ring-1 ring-gray-100 mt-10 ring-opacity-5  focus:outline-noneu">
            {curr.map((cur, index) => (
              <Menu.Item key={index}>
                <button className="p-3 px-1 w-full hover:bg-sky-50 hover:text-sky-700 rounded-lg font-bold border-b-1 border-gray-100">
                  {[cur.name, cur.uni].join(" ")}
                </button>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
}

export default Settings;
