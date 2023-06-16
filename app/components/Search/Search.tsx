"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import DesktopSearch from "./DesktopSearch";
import MobileSearch from "./MobileSearch";

export default function Search() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setQuery("");
    router.push(`/${query}`);
  }

  return (
    <>
      <MobileSearch {...{ query, setQuery }} onSubmit={handleSubmit} />
      <DesktopSearch {...{ query, setQuery }} onSubmit={handleSubmit} />
    </>
  );
}
