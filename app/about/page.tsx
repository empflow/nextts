"use client"

import { Metadata } from "next";
import Link from "next/link";
import { FC } from "react";

interface IAboutProps {

}

// export const metadata: Metadata = {
//   title: "About page",
//   description: "This page is created by https://github.com/empflow"
// }

const About: FC<IAboutProps> = () => {
  function crashApp() {
  }

  return (
    <>
    <h1>about page</h1>
    <div>
      <Link href="/about/me">Information about the creator of this undeniably great WEB SITE</Link>
    </div>
    </>
  )
}

export default About;