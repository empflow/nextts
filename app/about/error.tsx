"use client"

import { useEffect } from "react";


export default function Error({ error, reset }: { error: Error, reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
    <h2>Unfortunately, something went horribly wrong</h2>
    <p>basically the app just crashed</p>
    <p>well you could try clicking the button below, but I doubt that that's going to help 😉</p>
    <button onClick={reset}>
      TryAgain
    </button>
    </>
  )
}