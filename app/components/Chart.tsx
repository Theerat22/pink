"use client";
import React from "react";

interface ChartWithLabelsProps {
  labels: { name: string; color: string }[];
}

const ChartWithLabels: React.FC<ChartWithLabelsProps> = ({ labels }) => {
  return (
    <div className="flex items-center mt-5 justify-center p-4 sm:block hidden">
      <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6">
        {labels.map((label, index) => (
          <div key={index} className="flex items-center space-x-4">
            {/* Label */}
            <div className="text-gray-700 text-sm sm:text-base font-medium">
              {label.name}
            </div>

            {/* Circle */}
            <div
              className={`w-9 h-9 rounded-full flex justify-center items-center text-white font-bold shadow-md ${label.color}`}
            >
              {/* {label.name} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartWithLabels;
