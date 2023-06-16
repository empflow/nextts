"use client";

import SearchIcon from "@/app/icons/Search";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

interface MobileSearchProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

export default function MobileSearch({ query, setQuery }: MobileSearchProps) {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const mobileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (mobileSearchOpen) {
      mobileInputRef.current?.focus();
    }
  }, [mobileSearchOpen]);

  return (
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
  );
}
