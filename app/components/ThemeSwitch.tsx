"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2 border border-c-gray-500">
      <div
        onClick={() => setTheme("light")}
        className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-black"
      >
        <Image src="/sun.svg" alt="computer" width={20} height={0} />
      </div>

      <div
        onClick={() => setTheme("light")}
        className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-black"
      >
        <Image src="/computer.svg" alt="computer" width={20} height={0} />
      </div>

      <div
        onClick={() => setTheme("light")}
        className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-black"
      >
        <Image src="/moon.svg" alt="computer" width={20} height={0} />
      </div>
    </div>
  );
}
