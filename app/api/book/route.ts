import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';  // Import ObjectId if you're using MongoDB ObjectId

export async function POST(req: Request) {
  try {
    const { idnumber, postId } = await req.json();
    console.log("Received data:", { idnumber, postId });

    if (idnumber === undefined || postId === undefined) {
      console.error("Missing idnumber or postId");
      return NextResponse.json({ error: "Missing idnumber or postId" }, { status: 400 });
    }

    const idnumberNum = Number(idnumber);
    console.log("Converted idnumber to number:", idnumberNum);

    const client = await clientPromise;
    const db = client.db('sports');

    // Find the user in the database based on idnumber
    const user = await db.collection('users').findOne({ idname: idnumberNum });
    console.log("User found:", user);
    if (!user) {
      console.error("User not found");
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Ensure firstName and lastName are strings
    const firstName = user.firstname ? String(user.firstname).trim() : '';
    const lastName = user.lastname ? String(user.lastname).trim() : '';

    // Combine the names to form the owner's full name
    const ownerName = firstName && lastName ? `${firstName} ${lastName}` : 'Unknown'; // Default to 'Unknown' if names are empty

    // Convert postId to ObjectId if necessary
    const postIdObjectId = new ObjectId(postId);

    // Update the owner in the sports collection
    const result = await db.collection('sports').updateOne(
      { _id: postIdObjectId },
      { $set: { owner: ownerName } }
    );
    console.log("Update result:", result);

    // Check if the update was successful
    if (result.modifiedCount === 0) {
      console.error("Failed to update post");
      return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Owner updated successfully' }, { status: 200 });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
