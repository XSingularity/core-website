import './styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'xSingularity',
  description: 'We Create & Optimize',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="">
      <body className="bg-white flex h-screen flex-col dark:bg-black ">
        

        {children}

        <Footer /> </body>
    </html>
  )
}
