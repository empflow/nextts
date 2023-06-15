import Link from "next/link";
import LogoIcon from "../icons/Logo";
import Search from "./Search";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  return (
    <header className="sticky top-0 w-full gap-6 border-b border-b-zinc-400 bg-white/70 p-5 backdrop-blur-xl dark:border-b-zinc-700 dark:bg-black/70">
      <div className="m-auto flex max-w-6xl items-center justify-between overflow-auto">
        <LogoIcon className="fill-black dark:fill-white" height={24} />
        <nav className="">
          <ul className="flex gap-8">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>

        <Search />
      </div>
    </header>
  );
}
