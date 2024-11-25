import React from "react";
import { Bar } from "react-chartjs-2";
import ChartCard from "./ChartCard"; // Reusable card component

const BarChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  return (
    <ChartCard title="Bar Chart">
      <Bar data={data} />
    </ChartCard>
  );
};

export default BarChart;
