import React from "react";
import SeatingTable from "@/app/components/SeatingTable";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react"

const HomePage = () => {
  const data = [
    // { id: 1, name: "สิทเอง", seat: "0" },
    // { id: 2, name: "กันนี่", seat: "B3" },
    // { id: 3, name: "แข่ว", seat: "C1" },
    { id: 2, name: "test", seat: "A1" , grade : 3 }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <Analytics/>
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