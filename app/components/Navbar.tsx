"use client";

// import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // Import useRouter
import { useCallback, useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import { ArrowLeft } from "lucide-react";

type NavigationType = "single" | "multi";

type Navigation<T extends NavigationType> = {
  name: string;
  shortName?: string;
  path: T extends "single" ? `#${string}` : `/${string}`;
};

type NavbarProps<T extends NavigationType> = {
  items: Navigation<T>[];
  navigationType: T;
  backUrl?: string; // Optional prop for back button URL
};

export default function Navbar<T extends NavigationType>(props: NavbarProps<T>) {
  const [hash, setHash] = useState<string>("");
  const pathname = usePathname();
  const router = useRouter(); // Initialize useRouter

  const setCurrentHash = useCallback((arg?: string | unknown) => {
    if (typeof window === "undefined") return;
    const newHash = typeof arg === "string" ? arg : window.location.hash;
    setHash(newHash);
  }, []);

  useEffect(() => {
    setCurrentHash();
    window.addEventListener("hashchange", setCurrentHash);
    return () => {
      window.removeEventListener("hashchange", setCurrentHash);
    };
  }, [setCurrentHash]);

  const isLinkActive = useCallback(
    (path: string) => {
      if (props.navigationType === "multi") return path === pathname;
      return path === hash;
    },
    [hash, pathname, props.navigationType]
  );

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
