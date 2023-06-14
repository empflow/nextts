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
        className="w-full rounded bg-c-gray-100 px-3 py-1 text-black duration-200 placeholder:font-light placeholder:text-gray-400 focus:bg-c-gray-200 dark:bg-neutral-700 dark:text-white"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
