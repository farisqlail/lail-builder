import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { Providers } from "@/app/providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Web Component Builder",
  description: "Build websites by selecting components from different categories",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
