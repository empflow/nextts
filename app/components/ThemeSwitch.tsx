"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ComputerIcon from "../icons/Computer";
import MoonIcon from "../icons/Moon";
import SunIcon from "../icons/Sun";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme(); // provided by 'next-themes' and does not include a 'system' theme
  const savedTheme = localStorage.getItem("theme");
  const [chosenTheme, setChosenTheme] = useState(savedTheme ?? "system");

  const isLight = chosenTheme === "light";
  const isDark = chosenTheme === "dark";
  const isSystem = chosenTheme === "system";

  console.log("hi");

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  function updateTheme(theme: "light" | "dark" | "system") {
    localStorage.setItem("theme", theme);
    setTheme(theme);
    setChosenTheme(theme);
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-c-gray-600 p-1">
      <div
        onClick={() => updateTheme("light")}
        className={`${
          isLight ? "bg-c-gray-300 text-c-gray-1000 " : ""
        }flex items-center justify-center rounded-full p-1 hover:cursor-pointer`}
        title="Light theme"
      >
        <SunIcon pxSize={20} className="fill-c-gray-900" />
      </div>

      <div
        onClick={() => updateTheme("system")}
        className={`${
          isSystem ? "bg-c-gray-300 text-c-gray-1000 " : ""
        }flex items-center justify-center rounded-full p-1 hover:cursor-pointer`}
        title="System theme"
      >
        <ComputerIcon pxSize={20} className="fill-c-gray-900" />
      </div>

      <div
        onClick={() => updateTheme("dark")}
        className={`${
          isDark ? "bg-c-gray-300 text-c-gray-1000 " : ""
        }flex items-center justify-center rounded-full p-1 hover:cursor-pointer`}
        title="Dark theme"
      >
        <MoonIcon pxSize={22} className="fill-c-gray-900" />
      </div>
    </div>
  );
}
