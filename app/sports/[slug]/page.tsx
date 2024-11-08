"use client";
import { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import { notFound } from "next/navigation";
import { useParams } from 'next/navigation'; // Import useParams

export default function RoomDetails() {
  const [sportData, setSportData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  // Use the useParams hook to get dynamic parameters
  const params = useParams(); 
  const slug = params?.slug; // Extract the slug from params

  useEffect(() => {
    // Fetch data from the JSON file
    fetch("/sportsData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setSportData(data);
      })
      .catch((error) => {
        console.error("Error fetching sports data:", error);
        setError("There was an error loading the sports data. Please try again later.");
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!sportData || !slug) {
    return <div>Loading...</div>; // Show loading state until data is fetched
  }

  const sport = sportData[slug as keyof typeof sportData];

  if (!sport) {
    notFound(); // If sport is not found in data, return a 404 page
  }

  return (
    <>
      <Navbar
        navigationType={"single"}
        items={[
          { name: "Home", path: "#home" },
          { name: "Portfolio", path: "#" },
          { name: "Activities", path: "#activities" },
        ]}
      />
      <main>
        <section className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
          <div className="justify-center mt-24">
            <h1 className="text-4xl text-center md:text-6xl font-semibold mb-4 lg:text-5xl ">
              รายชื่อนักกีฬา '{sport.title}'
            </h1>
          </div>

          <div className="w-full flex justify-center  mt-8">
            <table className="table-auto w-full mt-4 border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-2 border">รหัสประจำตัว</th>
                  <th className="px-4 py-2 border">ชื่อ - นามสกุล</th>
                  <th className="px-4 py-2 border">ชั้น</th>
                </tr>
              </thead>
              <tbody>
                {sport.players.map((player: { id: number; name: string; class: string }) => (
                  <tr key={player.id}>
                    <td className="px-4 py-2 border">{player.id}</td>
                    <td className="px-4 py-2 border">{player.name}</td>
                    <td className="px-4 py-2 border">{player.class}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}
