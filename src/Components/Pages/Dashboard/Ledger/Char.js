import React from "react";
import { Line } from "react-chartjs-2";

export default function Char() {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "Number of sales this month",
        data: [12, 19, 3, 5, 2, 3],
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
