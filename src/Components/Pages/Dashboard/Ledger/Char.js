import React, { useContext } from "react";
import { Line } from "react-chartjs-2";

import { GlobalContext } from "../../../Context/GlobalState";

export default function Char() {
  const { transactions } = useContext(GlobalContext);

  const income = transactions.map(function (transaction) {
    if (transaction.type === "Income") {
      return transaction.amount;
    } else {
      return 0;
    }
  });

  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "Number of sales this month",
        data: income,
        fill: false,
        backgroundColor: "#575FFE",
        borderColor: "#575FFE",
      },
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
