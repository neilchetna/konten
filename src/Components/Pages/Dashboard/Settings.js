import React, { useContext } from "react";
import { Listbox } from "@headlessui/react";
import { CurrencyContext } from "../../Context/CurrencyContext";
import { UserContext } from "../../Context/UserState";
import { useHistory } from "react-router-dom";

function Settings() {
  const { currency, switchCurrency } = useContext(CurrencyContext);
  const { userLogout } = useContext(UserContext);
  const history = useHistory();

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

  function handleCurrency(e) {
    switchCurrency(e);
  }

  function handleLogout() {
    userLogout();
    history.push("/signin");
  }

  return (
    <div className="">
      <div className="width-md flex justify-center flex-col items-center">
        <h2 className="text-2xl pb-4">Settings</h2>
        <Listbox
          value={currency}
          as="div"
          className="bg-black-200 p-3 gap-10 flex justify-between rounded-md shadow-lg relative max-w-screen-md"
          onChange={handleCurrency}
        >
          Currencies
          <Listbox.Button>
            {currency.name} {currency.uni}
          </Listbox.Button>
          <Listbox.Options className="absolute right-0 w-56 mt-2 origin-top-right bg-black-200 rounded-md shadow-sm ring-1 ring-gray-100 mt-10 ring-opacity-5  focus:outline-none">
            {curr.map((cur, index) => (
              <Listbox.Option key={index} value={cur}>
                <button className="hover:bg-astra-100 bg-opacity-10 p-3 px-1 w-full hover:bg-sky-50 hover:text-sky-700 rounded-lg font-bold border-b-1 border-gray-100">
                  {cur.name} {cur.uni}
                </button>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
        <button
          onClick={handleLogout}
          className="p-3 m-2 bg-red-400 rounded-md bg-opacity-10 text-red-400"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Settings;
