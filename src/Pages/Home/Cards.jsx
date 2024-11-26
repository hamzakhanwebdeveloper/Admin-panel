import React from "react";
import "./Home.css";
import {
  FaShoppingBag,
  FaDollarSign,
  FaUser,
  FaChartLine,
} from "react-icons/fa";
function Cards() {
  return (
    <div>
         <div className="p-6 bg-gray-100  w-3/4 cards_container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Sales Card */}
        <div className="bg-white rounded-lg shadow-md p-4 card">
          <div className="flex items-center justify-between">
            <div className="rounded-full p-3 bg-green-500">
              <FaShoppingBag className="text-white text-2xl" />
            </div>
            <span className="text-sm font-medium text-green-500">▲ 1.56%</span>
          </div>
          <h2 className="text-gray-500 text-sm mt-2">Total Sales</h2>
          <p className="text-2xl font-bold">34,945</p>
        </div>

        {/* Total Income Card */}
        <div className="bg-white rounded-lg shadow-md p-4 card">
          <div className="flex items-center justify-between">
            <div className="rounded-full p-3 bg-orange-500">
              <FaDollarSign className="text-white text-2xl" />
            </div>
            <span className="text-sm font-medium text-red-500">▼ 1.56%</span>
          </div>
          <h2 className="text-gray-500 text-sm mt-2">Total Income</h2>
          <p className="text-2xl font-bold">$37,802</p>
        </div>

        {/* Total Users Card */}
        <div className="bg-white rounded-lg shadow-md p-4 card">
          <div className="flex items-center justify-between">
            <div className="rounded-full p-3 bg-blue-500">
              <FaUser className="text-white text-2xl" />
            </div>
            <span className="text-sm font-medium text-green-500">▲ 3.45%</span>
          </div>
          <h2 className="text-gray-500 text-sm mt-2">Total Users</h2>
          <p className="text-2xl font-bold">12,345</p>
        </div>

        {/* Total Visits Card */}
        <div className="bg-white rounded-lg shadow-md p-4 card">
          <div className="flex items-center justify-between">
            <div className="rounded-full p-3 bg-purple-500">
              <FaChartLine className="text-white text-2xl" />
            </div>
            <span className="text-sm font-medium text-red-500">▼ 0.89%</span>
          </div>
          <h2 className="text-gray-500 text-sm mt-2">Total Visits</h2>
          <p className="text-2xl font-bold">78,901</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Cards