"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  return (
    <div className="">
      <input
        type="text"
        placeholder="Search..."
        className="text-huge text-black"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </div>
  )
}