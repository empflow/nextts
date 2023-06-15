import LogoIcon from "../icons/Logo";
import ThemeSwitch from "./ThemeSwitch";

export default function Footer() {
  return (
    <footer className="border border-c-gray-500 p-5">
      <div className="flex items-center justify-between">
        <LogoIcon className="fill-white" width={120} />
        <ThemeSwitch />
      </div>
    </footer>
  );
}
