import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import React from 'react'; // Added import for React

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MH Trends - Your Fashion Destination',
  description: 'Discover the latest fashion trends at MH Trends',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
