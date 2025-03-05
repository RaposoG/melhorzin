"use client";

import dynamic from "next/dynamic";

const Universe = dynamic(() => import("@/components/Universe"), { ssr: false });

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Universe />
    </div>
  );
}
