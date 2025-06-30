import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Poppins, Dancing_Script } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing-script",
  display: "swap",
})

export const metadata: Metadata = {
  title: "My Precious Girl",
  description: "",
  icons:{
    icon: "/favicon.png", // Can also use .png or a URL 
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`antialiased ${poppins.variable} ${dancingScript.variable}`}>{children}</body>
    </html>
  )
}
