"use client"

import type React from "react"

import { NextUIProvider } from "@nextui-org/react"
import { ThemeProvider } from "@/components/theme-provider"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </NextUIProvider>
  )
}
