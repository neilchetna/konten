import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import { DateTime } from "luxon";

import { GlobalContext } from "../../../Context/GlobalState";

export default function Char() {
  const { transactions } = useContext(GlobalContext);

  const income = transactions.filter(function (transaction) {
    if (transaction.type === "Income") {
      return transaction.amount;
    }
  });

  const expense = transactions.filter(function (transaction) {
    if (transaction.type === "Expense") {
      return transaction.amount;
    }
  });

  const date = transactions.map((time) =>
    time.time.toLocaleString(DateTime.DATE_MED)
  );

  console.log();

  const data = {
    labels: date,
    datasets: [
      {
        label: "Income",
        data: income.reverse().map((item) => item.amount),
        fill: false,
        backgroundColor: "#575FFE",
        borderColor: "#575FFE",
        tension: 0.2,
      },
      // {
      //   label: "Expense",
      //   data: expense.reverse().map((item) => item.amount),
      //   fill: false,
      //   backgroundColor: "white",
      //   borderColor: "white",
      //   tension: 0.2,
      // },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="flex justify-center items-center bg-black-100 z-0">
      <Line data={data} options={options} />
    </div>
  );
}
