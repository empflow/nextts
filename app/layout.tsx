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
        <nav className='nav'>
          <ul className='nav-items'>
            <li className='nav-item'><Link href="/">Home</Link></li>
            <li className='nav-item'><Link href="/about">About this site</Link></li>
            <li className='nav-item'><Link href="/users">Our unhappy users</Link></li>
          </ul>
        </nav>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
