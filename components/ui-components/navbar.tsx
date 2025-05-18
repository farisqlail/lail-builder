"use client"

import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const toHome = () => {
    router.push('/')
  }
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 w-full">
      <div className="px-4 py-4 flex justify-between items-center w-full">
        <div className="flex items-center cursor-pointer" onClick={toHome}>
          <div className="w-10 h-10 bg-[#3b82f6] rounded-full flex items-center justify-center mr-3">
            <img src="/favicon.png" className="rounded-full" alt="logo" />
          </div>
          <span className="text-xl font-semibold text-[#333333]">Lail Builder</span>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
