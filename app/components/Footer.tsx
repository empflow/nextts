import Link from "next/link";
import LogoIcon from "../icons/Logo";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Footer() {
  return (
    <footer className="border-t border-t-zinc-400 px-3 py-4 dark:border-t-zinc-700 md:p-6">
      <div className="m-auto flex max-w-4xl items-center justify-between">
        <Link href="/">
          <LogoIcon className="fill-black dark:fill-white" height={24} />
        </Link>
        <ThemeSwitcher />
      </div>
    </footer>
  );
}
