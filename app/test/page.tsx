import path from 'path';
import fs from 'fs';
import { FC } from 'react';

type SportData = {
  title: string;
  category: number;
  persons: string[];
};

const SportsList: FC<{ sportsData: SportData[] }> = async () => {
  // โหลดข้อมูล JSON
  const filePath = path.join(process.cwd(), 'public', 'sportsData.json');
  const jsonData = await fs.promises.readFile(filePath, 'utf-8');
  const sportsData: SportData[] = JSON.parse(jsonData);

  // กรองข้อมูลให้เฉพาะ title ที่มีชื่อว่า "ฟลอร์บอล"
  const filteredData = sportsData.filter(sport => sport.title === "ฟลอร์บอล");

  return (
    <div className="min-h-screen flex flex-col items-center mt-10 lg:mt-17">
      <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-2">
        {filteredData.map((sport, index) => (
          <div key={index} className="flex flex-col items-center border p-4 rounded-lg">
            <h2 className="text-2xl font-bold">{sport.title}</h2>
            <p className="text-lg">Category: {sport.category}</p>
            <p className="text-md">Persons: {sport.persons.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsList;
