import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { FaEllipsisV } from "react-icons/fa";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const RecentOrderChart = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  // Chart data
  const lineData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Recent Orders",
        data: [30, 50, 40, 60, 70, 50, 80, 60, 70, 90, 40, 20],
        borderColor: "#4299E1", // Tailwind's blue
        backgroundColor: "rgba(66, 153, 225, 0.2)", // Light blue with opacity
        fill: true, // Enables the shaded area under the line
        tension: 0.4, // Smooth curve
        borderWidth: 2,
        pointRadius: 0, // No dots on the line
      },
    ],
  };

  // Chart options
  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide vertical grid lines
        },
        ticks: {
          color: "#A0AEC0", // Tailwind's gray-400
        },
      },
      y: {
        grid: {
          color: "#EDF2F7", // Tailwind's gray-100
        },
        ticks: {
          beginAtZero: true,
          color: "#A0AEC0", // Tailwind's gray-400
        },
      },
    },
  };

  return (
    <div className="w-full flex  p-4 ">
      <div className="bg-white rounded-lg shadow-md relative w-1/2 p-10">
        <div className="flex justify-between ">
          <h2 className="text-lg font-semibold">Recent Order</h2>
          <div className="relative">
            {/* Three-dot icon */}
            <FaEllipsisV
              className="cursor-pointer text-gray-500 hover:text-gray-700"
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-md">
                <ul className="text-sm text-gray-700">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => alert("Option 1 selected")}
                  >
                    Option 1
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => alert("Option 2 selected")}
                  >
                    Option 2
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <Line data={lineData} options={lineOptions} />
      </div>
    </div>
  );
};

export default RecentOrderChart;
