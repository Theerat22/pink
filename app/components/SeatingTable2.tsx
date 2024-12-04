"use client";
import React, { useState } from "react";

interface Person {
  seat: string;
  isPink: boolean;
  id: number;
  name: string;
  grade: number;
}

interface SeatingTableProps {
  data: Person[];
}

const SeatingTable: React.FC<SeatingTableProps> = ({ data }) => {
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
  const columns = [1, 2, 3, 4, 5];

  // Map seats with initial color state
  const [seatMap, setSeatMap] = useState<Map<string, boolean>>(
    new Map(data.map((seat) => [seat.seat, seat.isPink]))
  );

  const handleSeatClick = (seat: string) => {
    const updatedMap = new Map(seatMap);
    updatedMap.set(seat, !seatMap.get(seat)); // Toggle seat color state
    setSeatMap(updatedMap);
  };

  // Map seat to name for quick lookup
  const seatToNameMap = new Map(data.map((person) => [person.seat, person.name]));

  return (
    <div className="flex flex-col items-center p-4 space-y-4 overflow-x-auto">
      {/* Display column headers */}
      <div className="flex gap-x-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"></div>
        {rows.map((row) => (
          <div
            key={row}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex justify-center items-center font-bold text-gray-700"
          >
            {row}
          </div>
        ))}
      </div>

      {/* Display seating rows */}
      {columns.map((col) => (
        <div key={col} className="flex items-center gap-x-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex justify-center items-center font-bold text-gray-700"
          >
            {col}
          </div>
          {rows.map((row) => {
            const seat = `${row}${col}`;
            const isPink = seatMap.get(seat);
            const name = seatToNameMap.get(seat) || ""; // Get name for the seat

            return (
              <div
                key={seat}
                onClick={() => handleSeatClick(seat)}
                className={`flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-sm cursor-pointer shadow-md ${
                  isPink ? "bg-pink-500" : "bg-pink-200"
                }`}
              >
                <span
                  className={`text-sm font-bold ${
                    isPink ? "text-white" : "text-white"
                  }`}
                >
                  {name}
                </span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default SeatingTable;
