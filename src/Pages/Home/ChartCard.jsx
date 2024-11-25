import React from "react";

const ChartCard = ({ title, children }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="h-64">{children}</div>
    </div>
  );
};

export default ChartCard;
