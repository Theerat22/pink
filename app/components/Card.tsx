import Link from 'next/link';
import { IoFootball,IoBasketballOutline,IoTennisballSharp,IoGameControllerOutline } from "react-icons/io5";
import { TbBallFootball } from "react-icons/tb";
import { RiPingPongLine } from "react-icons/ri";
import { GiHockey } from "react-icons/gi";
import { MdOutlineSportsHandball,MdOutlineSportsVolleyball } from "react-icons/md";
import { FaBaseballBatBall } from "react-icons/fa6";

export default function IconGrid() {
  const items = [
    { icon: <IoFootball size={60} color='#ec4899' />, title: 'ฟุตบอล', slug: 'football' },
    { icon: <TbBallFootball size={60} color='#ec4899' />, title: 'ฟุตซอล', slug: 'footsal' },
    { icon: <IoBasketballOutline size={60} color='#ec4899'/>, title: 'บาสเก็ตบอล', slug: 'basketball' },
    { icon: <RiPingPongLine size={60} color='#ec4899'/>, title: 'ปิงปอง', slug: 'pingpong' },
    { icon: <FaBaseballBatBall size={60} color='#ec4899'/>, title: 'แบดมินตัน', slug: 'badminton' },
    { icon: <GiHockey size={60} color='#ec4899'/>, title: 'ฟลอร์บอล', slug: 'floorball' },
    { icon: <MdOutlineSportsHandball size={60} color='#ec4899'/>, title: 'ดอร์จบอล', slug: 'dogeball' },
    { icon: <MdOutlineSportsVolleyball size={60} color='#ec4899'/>, title: 'วอลเลย์บอล', slug: 'volleyball' },
    { icon: <IoTennisballSharp size={60} color='#ec4899'/>, title: 'แชร์บอล', slug: 'shareball' },
    { icon: <IoGameControllerOutline size={60} color='#ec4899'/>, title: 'E-sport', slug: 'esport' },
    

  ];

  return (
    <div className="min-h-screen flex flex-col items-center mt-10 lg:mt-17">
      <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
        {items.map((item, index) => (
          <Link key={index} href={`/sports/${item.slug}`} className="flex flex-col items-center justify-center transform hover:scale-110 transition duration-300">
            <div className="p-5 border border-pink-500 border-solid rounded-full flex items-center justify-center">
              {item.icon}
            </div>
            <p className="mt-4 text-lg text-black font-bold">{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}