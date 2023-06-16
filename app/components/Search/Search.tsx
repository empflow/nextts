"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import DesktopSearch from "./DesktopSearch";
import MobileSearch from "./MobileSearch";

export default function Search() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  return (
    <>
      <MobileSearch {...{ query, setQuery }} />
      <DesktopSearch {...{ query, setQuery }} />
    </>
  );
}
