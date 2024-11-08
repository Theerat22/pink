// import React, { useEffect, useRef } from 'react';
import Navbar from "@/app/components/Navbar";
import { notFound } from 'next/navigation';
const sportData = {
  football: {
    title: "ฟุตบอล",
  },
  footsal: {
    title: "ฟุตซอล",
  },
  basketball: {
    title: "บาสเก็ตบอล",
  },
  pingpong: {
    title: "ปิงปอง",
  },
  floorball: {
    title: "ฟลอร์บอล",
  },
  dogeball: {
    title: "ดอร์จบอล",
  },
  volleyball: {
    title: "วอลเลย์บอล",
  },
  shareball: {
    title: "แชร์บอล",
  },
  esport: {
    title: "E-sport",
  },
};

export default function RoomDetails({ params }: { params: { slug: string } }) {
  const sport = sportData[params.slug as keyof typeof sportData];

  if (!sport) {
    notFound(); 
  }
  return (
    <>
     <Navbar
        navigationType={"single"}
        items={[
          {
            name: "Home",
            path: "#home",
          },
          { name: "Portfolio", path: "#" },
          {
            name: "Activities",
            path: "#activities",
          },
        ]}
      />
  <main>
    <section className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">

        <div className="justify-center mt-24">
            <h1 className="text-4xl text-center md:text-6xl font-semibold mb-4 lg:text-5xl ">รายชื่อนักกีฬา '{sport.title}'</h1>
        </div>

        <div className="w-full flex justify-center">

        </div>

    </section>

    </main>
    </>
    
  );
}