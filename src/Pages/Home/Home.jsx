import React from "react";
import { Line, Bar, Pie, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Register Chart.js plugins
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Example data and options
const chartData = {
  labels: ["January", "February", "March", "April"],
  datasets: [
    {
      label: "Sales",
      data: [12, 19, 3, 5],
      backgroundColor: ["rgba(75, 192, 192, 0.2)"],
      borderColor: ["rgba(75, 192, 192, 1)"],
      borderWidth: 1,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
  },
};

function Home() {
  return (
    <div>

            {/* Cards Section */}
            <div className=" flex flex-col items-start justify-start bg-gray-100 p-4 pl-10">
        <div className="flex w-full justify-start gap-8">
          {/* Blue Card */}
          <div className="flex items-start justify-between bg-blue-500 text-white rounded-lg shadow h-[200px] w-[30%] min-w-[200px] p-4">
            <h3 className="text-lg font-semibold">PRODUCTS</h3>
            <i className="fas fa-info-circle text-4xl"></i>
          </div>

          {/* Orange Card */}
          <div className="flex items-start justify-between bg-orange-500 text-white rounded-lg shadow h-[200px] w-[30%] min-w-[200px] p-4">
            <h3 className="text-lg font-semibold">CATEGORIES</h3>
            <i className="fas fa-lightbulb text-4xl"></i>
          </div>

          {/* Green Card */}
          <div className="flex items-start justify-between bg-green-500 text-white rounded-lg shadow h-[200px] w-[30%] min-w-[200px] p-4">
            <h3 className="text-lg font-semibold">CUSTOMERS</h3>
            <i className="fas fa-check-circle text-4xl"></i>
          </div>

          {/* Red Card */}
          <div className="flex items-start justify-between bg-red-500 text-white rounded-lg shadow h-[200px] w-[30%] min-w-[200px] p-4">
            <h3 className="text-lg font-semibold">ALERTS</h3>
            <i className="fas fa-exclamation-triangle text-4xl"></i>
          </div>
        </div>
      </div>
      {/* Charts Section (Placed above second row of cards) */}
      <div className="charts w-full bg-gray-50 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Chart 1: Line Chart */}
          <div className="bg-white shadow rounded-lg p-8 flex items-center justify-center h-[300px]">
            <h3 className="text-lg font-semibold">Line Chart</h3>
            <Line data={chartData} options={chartOptions} />
          </div>

          {/* Chart 2: Bar Chart */}
          <div className="bg-white shadow rounded-lg p-8 flex items-center justify-center h-[300px]">
            <h3 className="text-lg font-semibold">Bar Chart</h3>
            <Bar data={chartData} options={chartOptions} />
          </div>

          {/* Chart 3: Pie Chart */}
          <div className="bg-white shadow rounded-lg p-4 flex items-center justify-center h-[300px]">
            <h3 className="text-lg font-semibold">Pie Chart</h3>
            <Pie data={chartData} options={chartOptions} />
          </div>

          {/* Chart 4: Doughnut Chart */}
          <div className="bg-white shadow rounded-lg p-4 flex items-center justify-center h-[300px]">
            <h3 className="text-lg font-semibold">Doughnut Chart</h3>
            <Doughnut data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>


    </div>
  );
}

export default Home;
