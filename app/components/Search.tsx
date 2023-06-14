"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  return (
    <div className="max-w-[250px] flex-grow">
      <input
        type="text"
        placeholder="Search..."
        className="dark:text-black w-full rounded-sm bg-neutral-700 px-3 py-1"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
