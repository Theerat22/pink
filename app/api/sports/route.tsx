import path from 'path';
import fs from 'fs/promises';
import { NextResponse } from 'next/server';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'sportsData.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(jsonData);
  return NextResponse.json(data);
}
