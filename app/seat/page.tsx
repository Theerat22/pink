import React from "react";
import SeatingTable from "@/app/components/SeatingTable";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react"

const HomePage = () => {
  const data = [
    // { id: 1, name: "สิทเอง", seat: "0" },
    // { id: 2, name: "กันนี่", seat: "B3" },
    // { id: 3, name: "แข่ว", seat: "C1" },
    { id: 1, name: "อัลฟ่า", seat: "A1", grade : 3 },
    { id: 2, name: "ต้นกล้า", seat: "B1" , grade : 3 },
    { id: 3, name: "เปรม", seat: "C1", grade : 3  },
    { id: 4, name: "เป้ปเปอร์", seat: "D1", grade : 3  },
    { id: 5, name: "เพลง", seat: "E1", grade : 3  },
    { id: 6, name: "ลูกแก้ว", seat: "F1", grade : 3  },
    { id: 7, name: "ข้าวสวย", seat: "G1", grade : 3  },
    { id: 8, name: "ริกะ", seat: "H1", grade : 3  },
    { id: 9, name: "เนวี่", seat: "I1", grade : 3  },
    { id: 10, name: "ปัน", seat: "J1", grade : 3  },
    { id: 11, name: "แพท", seat: "K1", grade : 3  },
    { id: 12, name: "ฟีฟ่า", seat: "A2", grade : 2  },
    { id: 13, name: "น้ำมนต์", seat: "B2", grade : 2 },
    { id: 14, name: "โอม", seat: "C2", grade : 3  },
    { id: 15, name: "ไทย", seat: "D2", grade : 2  },
    { id: 16, name: "วุ้น", seat: "E2", grade : 4  },
    { id: 17, name: "ณิณี", seat: "F2", grade : 4  },
    { id: 18, name: "เอ๋ยเอ๊ย", seat: "G2", grade : 4 },
    { id: 19, name: "จันทร์แก้ว", seat: "H2", grade : 2  },
    { id: 20, name: "ซีเชล", seat: "I2", grade : 2 },
    { id: 21, name: "ปริม", seat: "J2", grade : 2  },
    { id: 22, name: "ออมบุญ", seat: "K2", grade : 2  },
    { id: 23, name: "ภัค", seat: "A3", grade : 2  },
    { id: 24, name: "ปอนด์", seat: "B3", grade : 2  },
    { id: 25, name: "คริส", seat: "C3" , grade : 2 },
    { id: 26, name: "ที", seat: "D3", grade : 2  },
    { id: 27, name: "พีท", seat: "E3", grade : 4  },
    { id: 28, name: "ปลื้ม", seat: "F3", grade : 4  },
    { id: 29, name: "ภณ", seat: "G3", grade : 4  },
    { id: 30, name: "สิธา", seat: "H3", grade : 2  },
    { id: 31, name: "พีพี", seat: "I3", grade : 2 },
    { id: 32, name: "ไอซ์", seat: "J3", grade : 2  },
    { id: 33, name: "พิม", seat: "K3", grade : 2 },
    { id: 34, name: "ตั้งใจ", seat: "A4", grade : 1  },
    { id: 35, name: "ซีซาร์", seat: "B4", grade : 1  },
    { id: 36, name: "ออกัส", seat: "C4", grade : 1  },
    { id: 37, name: "โรวี่", seat: "D4", grade : 2  },
    { id: 38, name: "ของขวัญ", seat: "E4", grade : 4 },
    { id: 39, name: "ได้", seat: "F4", grade : 4  },
    { id: 40, name: "กันสึ", seat: "G4", grade : 4  },
    { id: 41, name: "อินดี้", seat: "H4", grade : 2  },
    { id: 42, name: "นะโม", seat: "I4", grade : 1  },
    { id: 43, name: "รีส", seat: "J4", grade : 1  },
    { id: 44, name: "เฌอเบล", seat: "K4", grade : 1  },
    { id: 45, name: "ต้นสน", seat: "A5", grade : 1 },
    { id: 46, name: "กานต์", seat: "B5", grade : 1  },
    { id: 47, name: "ซอนด้า", seat: "C5", grade : 1  },
    { id: 48, name: "เพลิน", seat: "D5", grade : 1  },
    { id: 49, name: "พลอยพิม", seat: "E5", grade : 1  },
    { id: 50, name: "ต้นกล้า", seat: "F5", grade : 1  },
    { id: 51, name: "ลูกบัว", seat: "G5", grade : 1  },
    { id: 52, name: "มีนา", seat: "H5", grade : 1  },
    { id: 53, name: "เปลหวาย", seat: "I5", grade : 1 },
    { id: 54, name: "ทัด", seat: "J5", grade : 1  },
    { id: 55, name: "ฮาชิ", seat: "K5", grade : 1  }
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