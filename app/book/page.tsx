"use client";
import { useEffect, useState } from "react";

type Post = {
  _id: string;
  title: string;
  owner: string | null;
  type: number;
  gender: string;
  level: string;
};

type GroupedPostsByType = {
  [type: number]: {
    [level: string]: Post[];
  };
};

const typeTitles: { [key: number]: string } = {
  1: "รายการที่ 1 : วิ่ง 40 เมตร",
  2: "รายการที่ 2 : วิ่ง 80 เมตร",
  3: "รายการที่ 3 : วิ่งผลัดกระสอบ 4x80 เมตร",
  4: "รายการที่ 4 : วิ่งสามขา 40 เมตร",
  5: "รายการที่ 5 : วิ่งผลัดกะลา",
  6: "รายการที่ 6 : ชักเย่อ 16 คน",
  7: "รายการที่ 7 : วิ่ง 80 เมตร",
};

export default function SportsTable() {
  const [groupedPostsByType, setGroupedPostsByType] = useState<GroupedPostsByType>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [inputName, setInputName] = useState<number | null>(null);
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/sports");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const posts: Post[] = await response.json();

      // Group posts by type and level
      const groupedByType = posts.reduce<GroupedPostsByType>((acc, post) => {
        if (!acc[post.type]) acc[post.type] = {};
        if (!acc[post.type][post.level]) acc[post.type][post.level] = [];
        acc[post.type][post.level].push(post);
        return acc;
      }, {});

      setGroupedPostsByType(groupedByType);
    } catch {
      // console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(); // Fetch initially
    const intervalId = setInterval(fetchPosts, 5000); // Poll every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const handleSave = async () => {
    if (inputName === null || !selectedSeat) return;

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idnumber: inputName,  // Send idnumber as a number
          postId: selectedSeat,
        }),
      });

      if (response.ok) {
        setIsModalOpen(false); // Close the modal
        fetchPosts(); // Refresh the posts list
      }
    } catch {
      console.error("Failed to save the data");
    }
  };

  return (
    <div className="p-6 bg-white min-h-screen text-black">
      <h1 className="text-3xl font-bold text-pink-600 mt-5 mb-6 text-center">
        ตารางแสดงรายชื่อนักกีฬา
      </h1>
      {loading && <div className="text-gray-600">กำลังโหลดข้อมูล...</div>}
      {Object.keys(groupedPostsByType).length > 0 ? (
        Object.keys(groupedPostsByType)
          .sort((a, b) => Number(a) - Number(b))
          .map((type) => {
            const numericType = Number(type);
            const postsByType = groupedPostsByType[numericType];

            if (!postsByType) {
              return null;
            }

            return (
              <div key={numericType} className="mb-8">
                <h2 className="text-2xl font-semibold text-pink-500 mb-4">
                  {typeTitles[numericType] || `รายการที่ ${numericType}`}
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse table-auto bg-white shadow-md rounded-lg">
                    <thead className="bg-pink-200">
                      <tr>
                        <th className="border border-pink-300 px-4 py-2 text-left text-sm font-bold text-pink-600">ระดับ</th>
                        <th className="border border-pink-300 px-4 py-2 text-left text-sm font-bold text-pink-600">เพศ</th>
                        <th className="border border-pink-300 px-4 py-2 text-left text-sm font-bold text-pink-600">ชื่อนักกีฬา</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.keys(postsByType).map((level) =>
                        postsByType[level].map((post, index) => (
                          <tr key={post._id}>
                            {index === 0 && (
                              <td
                                className="border border-pink-300 px-4 py-2 font-bold bg-white text-pink-600"
                                rowSpan={postsByType[level].length}
                              >
                                {level}
                              </td>
                            )}
                            <td className="border border-pink-300 px-4 py-2 text-sm">{post.gender}</td>
                            <td className="border border-pink-300 px-4 py-2 text-sm text-center">
                              {post.owner ? (
                                post.owner
                              ) : (
                                <button
                                  onClick={() => {
                                    setIsModalOpen(true);
                                    setSelectedSeat(post._id); // Save the post _id
                                  }}
                                  className="px-4 py-2 bg-pink-500 text-white font-bold rounded-lg hover:bg-pink-600"
                                >
                                  ลงชื่อ
                                </button>
                              )}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })
      ) : (
        <div className="text-center">ไม่พบข้อมูล</div>
      )}

      {/* Modal for inputting name */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-semibold mb-4 text-pink-600">กรอกเลขประจำตัว</h3>
            <input
              type="number"
              value={inputName ?? ""}
              onChange={(e) => setInputName(Number(e.target.value))}
              className="border border-gray-300 px-4 py-2 rounded-lg mb-4 w-full"
              placeholder="เลขประจำตัว 4 หลัก"
            />
            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="bg-pink-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-pink-600"
              >
                ตกลง
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="ml-2 px-4 py-2 font-bold text-pink-600 hover:text-pink-800"
              >
                ยกเลิก
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
