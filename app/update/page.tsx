// "use client";
// import { useEffect } from "react";

// export default function Update() {
//   useEffect(() => {
//     const updateDatabase = async () => {
//       try {
//         const response = await fetch('/api/update', { method: 'POST' });
//         if (response.ok) {
//           console.log('update success');
//         } else {
//           console.log('update failed');
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//       } catch (error) {
//         console.log('update error');
//         console.error("Error updating the database:", error);
//       }
//     };

//     updateDatabase(); // Fetch data when the component mounts
//   }, []);

//   return (
//     <div className="p-4 text-black">
//       update
//     </div>
//   );
// }
