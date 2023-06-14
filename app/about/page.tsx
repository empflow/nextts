"use client";

import { useState } from "react";

export default function () {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>About page</div>
      <div>Count: {count}</div>
      <div>
        <span onClick={() => setCount((prev) => prev + 1)}>+</span>
        <span onClick={() => setCount((prev) => prev - 1)}>-</span>
      </div>
    </>
  );
}
