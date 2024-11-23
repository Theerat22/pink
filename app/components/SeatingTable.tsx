"use client";
import React, { useState } from "react";

interface Person {
  id: number;
  name: string;
  seat: string;
  grade: number; // Added grade property
}

interface SeatingTableProps {
  data: Person[];
}

const SeatingTable: React.FC<SeatingTableProps> = ({ data }) => {
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
  const columns = [1, 2, 3, 4, 5];

  const [seatMap, setSeatMap] = useState<Map<string, Person>>(
    new Map(data.map((person) => [person.seat, person]))
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);
  const [inputName, setInputName] = useState<string>("");
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);

  const handleSeatClick = (seat: string) => {
    const person = seatMap.get(seat);
    setSelectedSeat(seat);
    setInputName(person?.name || "");
    setSelectedGrade(person?.grade || null);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (selectedSeat) {
      const updatedMap = new Map(seatMap);
      updatedMap.set(selectedSeat, {
        id: updatedMap.get(selectedSeat)?.id || Date.now(),
        name: inputName,
        seat: selectedSeat,
        grade: selectedGrade || 0,
      });
      setSeatMap(updatedMap);
    }
    setIsModalOpen(false);
  };

  const getGradeClass = (grade: number) => {
    switch (grade) {
      case 1:
        return "bg-orange-400";
      case 2:
        return "bg-blue-300";
      case 3:
        return "bg-purple-400";
      case 4:
        return "bg-pink-400";
      case 5:
        return "bg-pink-600";
      default:
        return "bg-gray-300"; // Default color for empty seats
    }
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-4 overflow-x-auto">
      {/* Display column headers */}
      <div className="flex gap-x-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex justify-center items-center font-bold text-gray-700"></div>
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
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex justify-center items-center font-bold text-gray-700">
            {col}
          </div>
          {rows.map((row) => {
            const seat = `${row}${col}`;
            const person = seatMap.get(seat);
            const personName = person?.name || "ว่าง";
            const personGrade = person?.grade || 0;

            return (
              <div
                key={seat}
                onClick={() => handleSeatClick(seat)}
                className={`relative group flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full text-center text-sm sm:text-base font-medium shadow-md cursor-pointer ${
                  personName !== "ว่าง"
                    ? `${getGradeClass(personGrade)} text-white font-bold hover:${
                        getGradeClass(personGrade).replace("400", "500")
                      }`
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
            <h2 className="text-lg font-bold mb-4 text-pink-500">อัปเดตที่นั่ง</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Seat Number
              </label>
              <input
                type="text"
                value={selectedSeat || ""}
                disabled
                className="w-full px-3 py-2 border font-bold text-pink-500 rounded-md bg-gray-100 cursor-not-allowed"
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
                className="w-full px-3 py-2 border rounded-md text-black"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Grade
              </label>
              <input
                type="number"
                value={selectedGrade || ""}
                onChange={(e) => setSelectedGrade(Number(e.target.value))}
                className="w-full px-3 py-2 border rounded-md text-black"
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
