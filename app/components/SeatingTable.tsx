"use client";
import React, { useState } from "react";

interface Person {
  id: number;
  name: string;
  seat: string;
}

interface SeatingTableProps {
  data: Person[];
}

const SeatingTable: React.FC<SeatingTableProps> = ({ data }) => {
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"];
  const columns = [1, 2, 3, 4, 5];

  const [seatMap, setSeatMap] = useState<Map<string, string>>(
    new Map(data.map((person) => [person.seat, person.name]))
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);
  const [inputName, setInputName] = useState<string>("");

  const handleSeatClick = (seat: string) => {
    setSelectedSeat(seat);
    setInputName(seatMap.get(seat) || "");
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (selectedSeat) {
      const updatedMap = new Map(seatMap);
      updatedMap.set(selectedSeat, inputName);
      setSeatMap(updatedMap);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-4 overflow-x-auto">
      {/* Display column headers */}
      <div className="flex gap-x-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex justify-center items-center font-bold text-gray-700"></div> {/* Empty space */}
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
          {/* Display column number */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex justify-center items-center font-bold text-gray-700">
            {col}
          </div>
          {/* Display seats */}
          {rows.map((row) => {
            const seat = `${row}${col}`;
            const personName = seatMap.get(seat) || "ว่าง";

            return (
              <div
                key={seat}
                onClick={() => handleSeatClick(seat)}
                className={`relative group flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full text-center text-sm sm:text-base font-medium shadow-md cursor-pointer ${
                  personName !== "ว่าง"
                    ? "bg-pink-500 text-white font-bold hover:bg-pink-600"
                    : "bg-gray-300 text-gray-800"
                }`}
              >
                {personName !== "ว่าง" ? personName : ""}
                {/* Tooltip */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-800 text-white text-xs sm:text-sm rounded-md p-2 shadow-lg">
                  {personName}
                </div>
              </div>
            );
          })}
        </div>
      ))}

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4 text-pink-500">Update Seat Information</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Seat Number
              </label>
              <input
                type="text"
                value={selectedSeat || ""}
                disabled
                className="w-full px-3 py-2 border rounded-md bg-gray-100 cursor-not-allowed"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeatingTable;
