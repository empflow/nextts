"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      <div>current theme: {theme}</div>
      <button onClick={() => setTheme("light")}>Light</button>{" "}
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
}
