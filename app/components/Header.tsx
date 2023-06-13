import Link from "next/link";
import Search from "./Search";

export default function Header()     {
  return (
    <header className="gap-6 p-5 backdrop:blur-3xl bg-black/75 backdrop-blur-xl sticky top-0 w-full border-b border-b-white/20">
      <div className="max-w-6xl flex items-center justify-between m-auto overflow-auto">
        <h3 className="text-3xl font-semibold">Logo</h3>
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
  )
}