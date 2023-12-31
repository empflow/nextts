import Link from "next/link";
import LogoIcon from "../icons/Logo";
import Search from "./Search/Search";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 w-full gap-6 border-b border-b-zinc-400 bg-white/70 px-3 py-4  backdrop-blur-xl dark:border-b-zinc-700 dark:bg-black/70 md:p-6">
      <div className="m-auto flex max-w-6xl items-center justify-between overflow-auto">
        <Link href="/">
          <LogoIcon className="fill-black dark:fill-white" height={24} />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Search />
      </div>
    </header>
  );
}
