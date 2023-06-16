"use client";

import SearchIcon from "@/app/icons/Search";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

interface MobileSearchProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export default function MobileSearch({
  query,
  setQuery,
  onSubmit,
}: MobileSearchProps) {
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
        <SearchIcon
          pxSize={24}
          className="fill-c-gray-1000 dark:fill-c-gray-500"
        />
      </button>

      <form
        className={`${
          mobileSearchOpen
            ? "pointer-events-auto translate-y-[65px] opacity-100"
            : "pointer-events-none translate-y-[25px] opacity-0"
        } absolute left-0 right-0 top-0 duration-200`}
        onSubmit={onSubmit}
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
