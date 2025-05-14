"use client"

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Save, FileCode, Settings, Code } from "lucide-react"
import Link from "next/link"

interface NavbarComponentProps {
  onExport: () => void
}

export function NavbarComponent({ onExport }: NavbarComponentProps) {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 w-full">
      <div className="px-4 py-4 flex justify-between items-center w-full">
        <Link href="/" className="font-bold text-xl">
          Lail Builder
        </Link>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
