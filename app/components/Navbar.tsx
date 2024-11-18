"use client";

// import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter
import { Menu } from "@headlessui/react";
import { ArrowLeft } from "lucide-react";


export default function Navbar() {
  const router = useRouter(); // Initialize useRouter


  return (
    <Menu
      as="nav"
      className="z-40 top-0 left-0 w-[100vw] flex items-center justify-between p-6 lg:p-8 fixed"
    >
        <>
          {/* Back Button on the Left */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.back()} // Use router.back() to navigate back
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-6 w-6" color="black" />
              <span className="font-bold text-lg text-black">ย้อนกลับ</span>
            </button>
            {/* Alternatively, use the optional backUrl prop if provided */}
            {/* 
            <Link href={props.backUrl || "#"} className="flex items-center gap-2">
              <ArrowLeft className="h-6 w-6" />
              <span className="font-bold text-lg">ย้อนกลับ</span>
            </Link>
            */}
          </div>

        
        </>
    </Menu>
  );
}
