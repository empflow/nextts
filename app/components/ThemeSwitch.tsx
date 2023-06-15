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
    <div className="flex max-h-[36px] items-center gap-1 rounded-full border border-c-gray-800 p-1 dark:border-c-gray-700">
      <div
        onClick={() => updateTheme("light")}
        className={`${
          isLight ? "bg-c-gray-300 " : ""
        }flex items-center justify-center rounded-full p-1 hover:cursor-pointer`}
        title="Light theme"
      >
        <SunIcon
          pxSize={20}
          className={`${
            isLight
              ? "fill-c-gray-900 dark:fill-c-gray-500"
              : "fill-c-gray-800 dark:fill-c-gray-700"
          }`}
        />
      </div>

      <div
        onClick={() => updateTheme("system")}
        className={`${
          isSystem ? "bg-c-gray-300 dark:bg-zinc-700 " : ""
        }flex items-center justify-center rounded-full p-1 hover:cursor-pointer`}
        title="System theme"
      >
        <ComputerIcon
          pxSize={20}
          className={`${
            isSystem
              ? "fill-c-gray-900 dark:fill-c-gray-500"
              : "fill-c-gray-800 dark:fill-c-gray-700"
          }`}
        />
      </div>

      <div
        onClick={() => updateTheme("dark")}
        className={`${
          isDark ? "dark:bg-zinc-700 " : ""
        }flex items-center justify-center rounded-full p-1 hover:cursor-pointer`}
        title="Dark theme"
      >
        <MoonIcon
          pxSize={20}
          className={`${
            isDark
              ? "fill-c-gray-900 dark:fill-c-gray-500"
              : "fill-c-gray-800 dark:fill-c-gray-700"
          }`}
        />
      </div>
    </div>
  );
}
