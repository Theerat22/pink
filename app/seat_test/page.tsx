import React from "react";
import SeatingTable from "@/app/components/SeatingTable2";
import Footer from "../components/Footer";
const HomePage = () => {
  const data = [
    // { id: 1, name: "สิทเอง", seat: "0" },
    // { id: 2, name: "กันนี่", seat: "B3" },
    // { id: 3, name: "แข่ว", seat: "C1" },
    { id: 1, name: "อัลฟ่า", seat: "A1", grade : 3, isPink: false },
    { id: 2, name: "ต้นกล้า", seat: "B1" , grade : 3, isPink: false },
    { id: 3, name: "เปรม", seat: "C1", grade : 3, isPink: false  },
    { id: 4, name: "เป้ปเปอร์", seat: "D1", grade : 3, isPink: false  },
    { id: 5, name: "เพลง", seat: "E1", grade : 3 , isPink: false },
    { id: 6, name: "ลูกแก้ว", seat: "F1", grade : 3, isPink: false  },
    { id: 7, name: "ข้าวสวย", seat: "G1", grade : 3 , isPink: false },
    { id: 8, name: "ริกะ", seat: "H1", grade : 3 , isPink: false },
    { id: 9, name: "เนวี่", seat: "I1", grade : 3 , isPink: false },
    { id: 10, name: "ปัน", seat: "J1", grade : 3 , isPink: false },
    { id: 11, name: "แพท", seat: "K1", grade : 3 , isPink: false },
    { id: 12, name: "ฟีฟ่า", seat: "A2", grade : 2 , isPink: false },
    { id: 13, name: "น้ำมนต์", seat: "B2", grade : 2 , isPink: false},
    { id: 14, name: "โอม", seat: "C2", grade : 3 , isPink: false },
    { id: 15, name: "ไทย", seat: "D2", grade : 2 , isPink: false },
    { id: 16, name: "วุ้น", seat: "E2", grade : 4  , isPink: false},
    { id: 17, name: "ณิณี", seat: "F2", grade : 4 , isPink: false },
    { id: 18, name: "เอ๋ยเอ๊ย", seat: "G2", grade : 4, isPink: false },
    { id: 19, name: "จันทร์แก้ว", seat: "H2", grade : 2 , isPink: false },
    { id: 20, name: "ซีเชล", seat: "I2", grade : 2, isPink: false },
    { id: 21, name: "ปริม", seat: "J2", grade : 2 , isPink: false },
    { id: 22, name: "ออมบุญ", seat: "K2", grade : 2  , isPink: false},
    { id: 23, name: "ภัค", seat: "A3", grade : 2  , isPink: false},
    { id: 24, name: "ปอนด์", seat: "B3", grade : 2 , isPink: false },
    { id: 25, name: "คริส", seat: "C3" , grade : 2 , isPink: false},
    { id: 26, name: "ที", seat: "D3", grade : 2 , isPink: false },
    { id: 27, name: "พีท", seat: "E3", grade : 4 , isPink: false },
    { id: 28, name: "ปลื้ม", seat: "F3", grade : 4  , isPink: false},
    { id: 29, name: "ภณ", seat: "G3", grade : 4 , isPink: false },
    { id: 30, name: "สิธา", seat: "H3", grade : 2 , isPink: false },
    { id: 31, name: "พีพี", seat: "I3", grade : 2 , isPink: false},
    { id: 32, name: "ไอซ์", seat: "J3", grade : 2 , isPink: false },
    { id: 33, name: "พิม", seat: "K3", grade : 2 , isPink: false},
    { id: 34, name: "ตั้งใจ", seat: "A4", grade : 1 , isPink: false },
    { id: 35, name: "ซีซาร์", seat: "B4", grade : 1 , isPink: false },
    { id: 36, name: "ออกัส", seat: "C4", grade : 1  , isPink: false},
    { id: 37, name: "โรวี่", seat: "D4", grade : 2  , isPink: false},
    { id: 38, name: "ของขวัญ", seat: "E4", grade : 4, isPink: false },
    { id: 39, name: "ได้", seat: "F4", grade : 4  , isPink: false},
    { id: 40, name: "กันสึ", seat: "G4", grade : 4 , isPink: false },
    { id: 41, name: "อินดี้", seat: "H4", grade : 2  , isPink: false},
    { id: 42, name: "นะโม", seat: "I4", grade : 1  , isPink: false},
    { id: 43, name: "รีส", seat: "J4", grade : 1  , isPink: false},
    { id: 44, name: "เฌอเบล", seat: "K4", grade : 1  , isPink: false},
    { id: 45, name: "ต้นสน", seat: "A5", grade : 1 , isPink: false},
    { id: 46, name: "กานต์", seat: "B5", grade : 1  , isPink: false},
    { id: 47, name: "ซอนด้า", seat: "C5", grade : 1  , isPink: false},
    { id: 48, name: "เพลิน", seat: "D5", grade : 1  , isPink: false},
    { id: 49, name: "พลอยพิม", seat: "E5", grade : 1  , isPink: false},
    { id: 50, name: "ต้นกล้า", seat: "F5", grade : 1  , isPink: false},
    { id: 51, name: "ลูกบัว", seat: "G5", grade : 1  , isPink: false},
    { id: 52, name: "มีนา", seat: "H5", grade : 1  , isPink: false},
    { id: 53, name: "เปลหวาย", seat: "I5", grade : 1 , isPink: false},
    { id: 54, name: "ทัด", seat: "J5", grade : 1  , isPink: false},
    { id: 55, name: "ฮาชิ", seat: "K5", grade : 1  , isPink: false}
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