import Link from "next/link";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About"
}

export default function About() {
  return (
    <>
    <h1>about page</h1>
    <div>
      <Link href="/about/me">Information about the creator of this undeniably great WEB SITE</Link>
    </div>
    </>
  )
}