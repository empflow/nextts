"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  return (
    <button onClick={() => router.push("/about")}>Go to about</button>
  )
}