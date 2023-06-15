import LogoIcon from "../icons/Logo";
import ThemeSwitch from "./ThemeSwitch";

export default function Footer() {
  return (
    <footer className="border-t border-t-zinc-400 p-5 dark:border-t-zinc-700">
      <div className="m-auto flex max-w-6xl items-center justify-between">
        <LogoIcon className="fill-black dark:fill-white" height={24} />
        <ThemeSwitch />
      </div>
    </footer>
  );
}
