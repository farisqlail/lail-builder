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

interface NavbarComponentProps {
  onExport: () => void
}

export function NavbarComponent({ onExport }: NavbarComponentProps) {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 w-full">
      <div className="px-4 py-4 flex justify-between items-center w-full">
        <div className="font-bold text-xl">Lail Builder</div>
        <div>
          <Button color="primary" variant="flat" startContent={<Save size={16} />}>
            Save Project
          </Button>
          <Button color="secondary" variant="flat" startContent={<Code size={16} />} onPress={onExport}>
            Export Code
          </Button>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered" startContent={<Settings size={16} />}>
                Settings
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Settings Actions">
              <DropdownItem key="export" startContent={<FileCode size={16} />}>
                Export as Code
              </DropdownItem>
              <DropdownItem key="preferences">Preferences</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
