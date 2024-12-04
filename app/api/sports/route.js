import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("sports");

    const posts = await db.collection("sports").find({}).toArray();
    console.log(posts);
    return NextResponse.json(posts); // Use NextResponse.json instead of res.json
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 }); // Return error in case of failure
  }
}
