"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import SearchIcon from "../icons/Search";

export default function Search() {
  const [query, setQuery] = useState("");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const mobileInputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (mobileSearchOpen) {
      mobileInputRef.current?.focus();
    }
  }, [mobileSearchOpen]);

  return (
    <>
      {/* desktop search */}
      <div className="hidden md:block">
        <form className="max-w-[250px] flex-grow">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded bg-c-gray-200 px-3 py-1 text-black duration-200 placeholder:font-light placeholder:text-c-gray-800 dark:bg-zinc-800 dark:text-white"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>

      {/* mobile search */}
      <div className="flex place-items-center md:hidden">
        <button
          className="hover:cursor-pointer"
          onClick={() => setMobileSearchOpen((prev) => !prev)}
        >
          <SearchIcon />
        </button>

        <form
          className={`${
            mobileSearchOpen
              ? "pointer-events-auto translate-y-[73px] opacity-100"
              : "pointer-events-none translate-y-[41px] opacity-0"
          } absolute left-0 right-0 top-0 duration-200`}
        >
          <input
            type="text"
            className="h-10 min-w-full bg-c-gray-200 px-5 text-black placeholder:font-light placeholder:text-c-gray-800 dark:bg-zinc-800 dark:text-white"
            placeholder="Search..."
            ref={mobileInputRef}
            disabled={!mobileSearchOpen}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>
    </>
  );
}
