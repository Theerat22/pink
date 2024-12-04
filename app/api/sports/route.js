import clientPromise from '@/lib/mongodb';

export async function GET(res) {
  try {
    const client = await clientPromise;
    const db = client.db("sports");

    const posts = await db.collection("sports").find({}).toArray();

    res.json(posts);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message }); // Send error response to the client
  }
}
