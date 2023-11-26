import './styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from "./components/footer";
import ScrollToTop from "./components/scroll_up";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'XSingularity | Software Development Company',
  description: "Software development company specialized in delivering high-quality solutions in backend, frontend, and blockchain. Let's take your project to the next level."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="">
      <body className="bg-white flex h-screen flex-col">
        {children}
        <ScrollToTop />
        <Footer /> </body>
    </html>
  )
}
