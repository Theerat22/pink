import React from "react";
import SeatingTable from "@/app/components/SeatingTable";
import Footer from "../components/Footer";
const HomePage = () => {
  const data = [
    { id: 1, name: "สิทเอง", seat: "A2" },
    { id: 2, name: "กันนี่", seat: "B3" },
    { id: 3, name: "แข่ว", seat: "C1" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow bg-gray-100 p-6 justify-center">
        <h1 className="text-3xl mt-20 font-bold text-center text-gray-800 mb-6">
          ตารางที่นั่งสแตน <span className="text-pink-500 underline">สีชมพู</span>
        </h1>
        <SeatingTable data={data} />
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;