import SearchIcon from "@/app/icons/Search";
import { Dispatch, FormEvent, SetStateAction } from "react";

interface DesktopSearchProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export default function DesktopSearch({
  query,
  setQuery,
  onSubmit,
}: DesktopSearchProps) {
  return (
    <div className="hidden md:block">
      <form
        className="flex max-w-[250px] flex-grow items-stretch"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded rounded-r-none border border-transparent bg-c-gray-200 px-3 py-1 text-black placeholder:font-light placeholder:text-c-gray-800 focus:border-blue-500 dark:bg-c-gray-1000 dark:text-white dark:focus:border-blue-900"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="flex items-center justify-center rounded-r border-l border-c-gray-600 bg-c-gray-200  p-[5px] dark:border-zinc-600 dark:bg-c-gray-1000"
          title="Search"
        >
          <SearchIcon
            pxSize={24}
            className="fill-c-gray-1000 dark:fill-c-gray-500"
          />
        </button>
      </form>
    </div>
  );
}
