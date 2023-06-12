"use client";

import './globals.css'
import Link from 'next/link'
import { Abhaya_Libre } from "next/font/google";

const inter = Abhaya_Libre({
  subsets: ["latin"],
  weight: "700"
})


export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About this site</Link></li>
            <li><Link href="/about/me">About me</Link></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
