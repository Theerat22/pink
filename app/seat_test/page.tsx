import React from "react";
import SeatingTable from "@/app/components/SeatingTable2";
import Footer from "../components/Footer";
const HomePage = () => {
  const data = [
    // { id: 1, name: "สิทเอง", seat: "0" },
    // { id: 2, name: "กันนี่", seat: "B3" },
    // { id: 3, name: "แข่ว", seat: "C1" },
    { "id": 1, "name": "ข้าวสวย", "seat": "A1", "grade": 3, "isPink": false },
    { "id": 2, "name": "ลูกแก้ว", "seat": "B1", "grade": 3, "isPink": false },
    { "id": 3, "name": "เพลง", "seat": "C1", "grade": 3, "isPink": false },
    { "id": 4, "name": "เปรม", "seat": "D1", "grade": 3, "isPink": false },
    { "id": 5, "name": "เปอร์", "seat": "E1", "grade": 3, "isPink": false },
    { "id": 6, "name": "โอม", "seat": "F1", "grade": 3 , "isPink": false},
    { "id": 7, "name": "ริกะ", "seat": "G1", "grade": 3 , "isPink": false},
    { "id": 8, "name": "ปัน", "seat": "H1", "grade": 3 , "isPink": false},
    { "id": 9, "name": "แพท", "seat": "I1", "grade": 3 , "isPink": false},
    { "id": 10, "name": "เนวี่", "seat": "J1", "grade": 3 , "isPink": false},
    { "id": 11, "name": "นีมส์", "seat": "K1", "grade": 3 , "isPink": false},
    { "id": 12, "name": "จันทร์แก้ว", "seat": "A2", "grade": 2, "isPink": false},
    { "id": 13, "name": "ชีเซลล์", "seat": "B2", "grade": 2 , "isPink": false},
    { "id": 14, "name": "ไท", "seat": "C2", "grade": 3, "isPink": false },
    { "id": 15, "name": "ข้าวเจ้า", "seat": "D2", "grade": 3, "isPink": false },
    { "id": 16, "name": "ปลื้ม", "seat": "E2", "grade": 4 , "isPink": false},
    { "id": 17, "name": "กันสึ", "seat": "F2", "grade": 4, "isPink": false },
    { "id": 18, "name": "พีท", "seat": "G2", "grade": 4, "isPink": false },
    { "id": 19, "name": "อินดี้", "seat": "H2", "grade": 2 , "isPink": false},
    { "id": 20, "name": "ภัค", "seat": "I2", "grade": 2 , "isPink": false},
    { "id": 21, "name": "สิธา", "seat": "J2", "grade": 2 , "isPink": false},
    { "id": 22, "name": "ที", "seat": "K2", "grade": 2, "isPink": false },
    { "id": 23, "name": "ออมบุญ", "seat": "A3", "grade": 2 , "isPink": false},
    { "id": 24, "name": "ปริม", "seat": "B3", "grade": 2 , "isPink": false},
    { "id": 25, "name": "โรวี่", "seat": "C3", "grade": 2 , "isPink": false},
    { "id": 26, "name": "ไอซ์", "seat": "D3", "grade": 2 , "isPink": false},
    { "id": 27, "name": "เอ๋ยเอ๊ย", "seat": "E3", "grade": 4 , "isPink": false},
    { "id": 28, "name": "ณิณี", "seat": "F3", "grade": 4 , "isPink": false},
    { "id": 29, "name": "วุ้น", "seat": "G3", "grade": 4 , "isPink": false},
    { "id": 30, "name": "ปอนด์", "seat": "H3", "grade": 2 , "isPink": false},
    { "id": 31, "name": "ฟีฟ่า", "seat": "I3", "grade": 2 , "isPink": false},
    { "id": 32, "name": "กิต", "seat": "J3", "grade": 2 , "isPink": false},
    { "id": 33, "name": "น้ำมนต์", "seat": "K3", "grade": 2 , "isPink": false},
    { "id": 34, "name": "ซีซาร์", "seat": "A4", "grade": 1 , "isPink": false},
    { "id": 35, "name": "ออกัส", "seat": "B4", "grade": 1 , "isPink": false},
    { "id": 36, "name": "กาญจน์", "seat": "C4", "grade": 1 , "isPink": false},
    { "id": 37, "name": "นะโม", "seat": "D4", "grade": 1 , "isPink": false},
    { "id": 38, "name": "ของขวัญ", "seat": "E4", "grade": 4 , "isPink": false},
    { "id": 39, "name": "ภณ", "seat": "F4", "grade": 4 , "isPink": false},
    { "id": 40, "name": "ได้", "seat": "G4", "grade": 4 , "isPink": false},
    { "id": 41, "name": "พีพี", "seat": "H4", "grade": 2 , "isPink": false},
    { "id": 42, "name": "เปลหวาย", "seat": "I4", "grade": 0 , "isPink": false},
    { "id": 43, "name": "ว่าง", "seat": "J4", "grade": 0 , "isPink": false},
    { "id": 44, "name": "ว่าง", "seat": "K4", "grade": 0 , "isPink": false},
    { "id": 45, "name": "ธัช", "seat": "A5", "grade": 1, "isPink": false },
    { "id": 46, "name": "ตังทอน", "seat": "B5", "grade": 1 , "isPink": false},
    { "id": 47, "name": "เฌอเบล", "seat": "C5", "grade": 1, "isPink": false },
    { "id": 48, "name": "พลอยพิม", "seat": "D5", "grade": 1 , "isPink": false},
    { "id": 49, "name": "ลูกบัว", "seat": "E5", "grade": 1, "isPink": false },
    { "id": 50, "name": "มีนา", "seat": "F5", "grade": 1, "isPink": false },
    { "id": 51, "name": "ซอนด้า", "seat": "G5", "grade": 1 , "isPink": false},
    { "id": 52, "name": "รีส", "seat": "H5", "grade": 1, "isPink": false },
    { "id": 53, "name": "เพลิน", "seat": "I5", "grade": 1 , "isPink": false},
    { "id": 54, "name": "ตั้งใจ", "seat": "J5", "grade": 1 , "isPink": false},
    { "id": 55, "name": "ว่าง", "seat": "K5", "grade": 0 , "isPink": false}
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