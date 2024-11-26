import React, { useState } from "react";

const ProductOverview = () => {
  const data = [
    {
      name: "Soft Fluffy Cats",
      productId: "#327",
      price: "$11.70",
      quantity: 28,
      revenue: "$328.85",
      status: "Available",
    },
    {
      name: "Taste of the Wild Formula Finder",
      productId: "#380",
      price: "$8.99",
      quantity: 10,
      revenue: "$105.55",
      status: "Not Available",
    },
    {
      name: "Wellness Natural Food",
      productId: "#126",
      price: "$5.22",
      quantity: 578,
      revenue: "$202.87",
      status: "Not Available",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div
      className="p-2 bg-gray-100 flex justify-start sm:flex-wrap lg:justify-center "
      style={{ height: "45vh" }}
    >
      <div className="bg-white rounded-lg shadow-md overflow-x-auto w-full sm:w-11/12 lg:w-3/4 m-2">
        <div className="p-2 border-b">
          <h2 className="text-lg font-semibold">Product Overview</h2>
        </div>
        <table className="w-full table-auto mx-auto">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-600">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Product ID</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Revenue</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr
                key={index}
                className="border-b last:border-none text-sm text-gray-700"
              >
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.productId}</td>
                <td className="px-4 py-2">{item.price}</td>
                <td className="px-4 py-2">{item.quantity}</td>
                <td className="px-4 py-2">{item.revenue}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.status === "Available"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center p-2">
          <span className="text-sm text-gray-600">
            Showing {itemsPerPage} entries
          </span>
          <div className="flex space-x-1">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`px-3 py-1 rounded-lg text-sm font-medium ${
                  page === currentPage
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
