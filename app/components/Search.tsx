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
        className="w-full rounded bg-gray-200 px-3 py-1 text-black duration-300 placeholder:font-light placeholder:text-c-gray-800 focus:bg-c-gray-200 dark:bg-zinc-800 dark:text-white"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
