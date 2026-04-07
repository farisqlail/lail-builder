"use client"

import { Button, Tooltip } from "@nextui-org/react"
import { Monitor, Tablet, Smartphone, Eye, EyeOff, Code } from "lucide-react"

interface BuilderToolbarProps {
  deviceView: 'desktop' | 'tablet' | 'mobile'
  setDeviceView: (view: 'desktop' | 'tablet' | 'mobile') => void
  isPreviewMode: boolean
  setIsPreviewMode: (is: boolean) => void
  currentColor: string
  onColorChange: (color: string) => void
  onExport: () => void
}

export function BuilderToolbar({
  deviceView,
  setDeviceView,
  isPreviewMode,
  setIsPreviewMode,
  currentColor,
  onColorChange,
  onExport
}: BuilderToolbarProps) {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="flex items-center gap-2">
        <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          <Tooltip content="Desktop View">
            <Button
              isIconOnly
              size="sm"
              variant={deviceView === 'desktop' ? 'solid' : 'light'}
              color={deviceView === 'desktop' ? 'primary' : 'default'}
              onPress={() => setDeviceView('desktop')}
            >
              <Monitor size={18} />
            </Button>
          </Tooltip>
          <Tooltip content="Tablet View">
            <Button
              isIconOnly
              size="sm"
              variant={deviceView === 'tablet' ? 'solid' : 'light'}
              color={deviceView === 'tablet' ? 'primary' : 'default'}
              onPress={() => setDeviceView('tablet')}
            >
              <Tablet size={18} />
            </Button>
          </Tooltip>
          <Tooltip content="Mobile View">
            <Button
              isIconOnly
              size="sm"
              variant={deviceView === 'mobile' ? 'solid' : 'light'}
              color={deviceView === 'mobile' ? 'primary' : 'default'}
              onPress={() => setDeviceView('mobile')}
            >
              <Smartphone size={18} />
            </Button>
          </Tooltip>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Global Color</span>
          <div className="flex items-center gap-2 pl-1 pr-3 py-1">
            <input
              type="color"
              value={currentColor}
              onChange={(e) => onColorChange(e.target.value)}
              className="w-6 h-6 rounded-full cursor-pointer border-none p-0 bg-transparent"
              title="Choose color"
            />
          </div>
        </div>

        <div className="h-6 w-px bg-gray-200 dark:bg-gray-800"></div>

        <Button
          size="sm"
          color={isPreviewMode ? "primary" : "default"}
          variant={isPreviewMode ? "solid" : "bordered"}
          startContent={isPreviewMode ? <EyeOff size={16} /> : <Eye size={16} />}
          onPress={() => setIsPreviewMode(!isPreviewMode)}
        >
          {isPreviewMode ? "Edit Mode" : "Preview Mode"}
        </Button>

        <Button
          size="sm"
          color="primary"
          variant="flat"
          className="font-medium"
          startContent={<Code size={16} />}
          onPress={onExport}
        >
          Export Code
        </Button>
      </div>
    </div>
  )
}
