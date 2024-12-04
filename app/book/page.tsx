// app/book/page.tsx
"use client";
import { useEffect, useState } from "react";

type Post = {
  _id: string;
  title: string;
  owner: string | null;
};

export default async function Booking() {
  const [posts, setPosts] = useState<Post[]>([]);

  // Fetch data inside the server component
  const fetchPosts = async () => {
    try {
      let response = await fetch('/api/sports');
      let postsData = await response.json();
      setPosts(postsData); // Update state with fetched posts
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts(); // Fetch posts when the component mounts
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mt-8">Sports</h1>
      <table className="min-w-full table-auto mt-4">
        <thead>
          <tr>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Owner</th>
          </tr>
        </thead>
        <tbody>
          {posts.length > 0 ? (
            posts.map((sport) => (
              <tr key={sport._id}>
                <td className="border px-4 py-2">{sport.title}</td>
                <td className="border px-4 py-2">{sport.owner || "None"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2} className="border px-4 py-2 text-center">
                No sports available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
