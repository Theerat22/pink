"use client";
import { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";

interface Player {
  id: number;
  name: string;
  fullname: string;
  class: string;
}

interface CategoryData {
  category: string;
  title: string;
  players: Player[];
}

interface SportsData {
  [slug: string]: CategoryData[];
}

export default function RoomDetails() {
  const [sportsData, setSportsData] = useState<SportsData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const params = useParams();
  const slug = params?.slug;

  useEffect(() => {
    fetch("/sportsData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setSportsData(data);
      })
      .catch((error) => {
        console.error("Error fetching sports data:", error);
        setError("There was an error loading the sports data. Please try again later.");
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!sportsData || !slug) {
    return <div>Loading...</div>;
  }

  const sport = sportsData[slug as keyof SportsData];

  if (!sport) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
          <div className="justify-center mt-24">
            <h1 className="text-4xl text-center text-black md:text-6xl font-semibold mb-4 lg:text-5xl ">
              รายชื่อนักกีฬา {sport[0]?.category}
            </h1>
          </div>

          {/* Iterate over the categories within the sport */}
          {sport.map((categoryData) => (
            <div key={categoryData.category}>
              <h2 className="text-2xl mt-10 text-black font-bold">{categoryData.title}</h2>
              <div className="w-full flex justify-center mt-8 text-black">
                <table className="table-auto w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border">รหัสประจำตัว</th>
                      <th className="px-4 py-2 border">ชื่อ - นามสกุล</th>
                      <th className="px-4 py-2 border">ชื่อเล่น</th>
                      <th className="px-4 py-2 border">ชั้น</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categoryData.players.map((player) => (
                      <tr key={player.id}>
                        <td className="px-4 py-2 border">{player.id}</td>
                        <td className="px-4 py-2 border">{player.fullname}</td>
                        <td className="px-4 py-2 border">{player.name}</td>
                        <td className="px-4 py-2 border">{player.class}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
