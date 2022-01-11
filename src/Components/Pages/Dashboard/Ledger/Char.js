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
    DateTime.fromISO(time.time).toLocaleString(DateTime.DATE_MED)
  );

  console.log();

  const data = {
    labels: date,
    datasets: [
      {
        label: "Income",
        data: income.reverse().map((item) => item.amount),
        backgroundColor: "rgba(87,95,254, 0.2)",
        borderColor: "#575FFE",
        tension: 0.2,
        fill: true,
      },
      {
        label: "Expense",
        data: expense.reverse().map((item) => item.amount),
        fill: false,
        backgroundColor: "white",
        borderColor: "white",
        tension: 0.2,
      },
    ],
  };

  const options = {
    mode: "Index",
    responsive: true,
    scales: {
      yAxes: {
        ticks: {
          beginAtZero: true,
        },
        grid: {
          drawBorder: false,
          color: "rgba(255, 255, 255, 5%)",
        },
      },
      xAxes: {
        grid: {
          drawBorder: false,
          color: "rgba(255, 255, 255, 5%)",
        },
      },
    },
  };

  return (
    <div className="flex justify-center items-center bg-black-100 z-0">
      <Line data={data} options={options} />
    </div>
  );
}
