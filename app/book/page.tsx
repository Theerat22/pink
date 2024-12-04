"use client";
import { useEffect, useState } from "react";

type Post = {
  _id: string;
  title: string;
  owner: string | null;
};

// Define a more specific error type
type FetchError = {
  message: string;
};

export default function Booking() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false); // Add loading state
  const [error, setError] = useState<string | null>(null); // Add error state

  const fetchPosts = async () => {
    setLoading(true); // Set loading to true before fetching
    setError(null); // Reset previous error
    try {
      const response = await fetch('/api/sports');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const postsData = await response.json();
      setPosts(postsData); // Update state with fetched posts
    } catch (error) {
      // Ensure the error is a standard Error object and type it correctly
      const e = error as FetchError;
      setError(e.message); // Set error if fetching fails
      console.error(e);
    } finally {
      setLoading(false); // Set loading to false after fetch attempt
    }
  };

  useEffect(() => {
    fetchPosts(); // Fetch posts when the component mounts
  }, []);

  return (
    <div className="p-4 text-black">
      <h1 className="text-2xl font-bold mt-8 text-black">Sports</h1>
      {loading && <div>Loading...</div>} {/* Display loading state */}
      {error && <div className="text-red-500">Error: {error}</div>} {/* Display error state */}
      <table className="min-w-full table-auto mt-4">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-black">Title</th>
            <th className="border px-4 py-2 text-black">Owner</th>
          </tr>
        </thead>
        <tbody>
          {posts.length > 0 ? (
            posts.map((sport) => (
              <tr key={sport._id}>
                <td className="border px-4 py-2 text-black">{sport.title}</td>
                <td className="border px-4 py-2 text-black">{sport.owner || "None"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2} className="border px-4 py-2 text-center text-black">
                No sports available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
