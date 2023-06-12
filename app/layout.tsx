"use client";

import './globals.css'
import Link from 'next/link'
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"]
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
