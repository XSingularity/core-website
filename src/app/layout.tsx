import './styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from "./components/footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'XSingularity | We Create & Optimize',
  description: 'Software development company, we create and optimize software for your business.',
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
        <Footer /> </body>
    </html>
  )
}
