import JSZip from "jszip"
import { 
  getComponentSourceCode, 
  getFullComponentCode, 
  getComponentHTML,
  ComponentTextContent 
} from "@/lib/code-export-templates"
import { SelectedComponents } from "@/components/code-export-context"

interface UseCodeExportProps {
  selectedComponents: SelectedComponents
  customTextContent: Record<string, ComponentTextContent>
  componentColors: Record<string, string>
}

export function useCodeExport({
  selectedComponents,
  customTextContent,
  componentColors,
}: UseCodeExportProps) {
  
  const generateNextJSCode = () => {
    // Import statements for the page
    let code = `"use client"

import React from 'react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
`

    // Add each selected component's JSX directly
    Object.entries(selectedComponents).forEach(([category, componentId]) => {
      if (!componentId) return

      // Get the component's source code
      const componentCode = getComponentSourceCode(category, componentId, customTextContent, componentColors[category])

      // Add the component JSX directly
      code += `      {/* ${category.charAt(0).toUpperCase() + category.slice(1)}: ${componentId} */}\n`
      code += `      ${componentCode}\n\n`
    })

    code += `    </div>
  )
}

`

    // Add all component definitions as separate components
    Object.entries(selectedComponents).forEach(([category, componentId]) => {
      if (!componentId) return

      // Get the full component definition
      const fullComponentCode = getFullComponentCode(category, componentId, customTextContent, componentColors[category])

      // Add the component definition
      code += `\n// ${category.charAt(0).toUpperCase() + category.slice(1)} Component: ${componentId}\n`
      code += fullComponentCode
      code += "\n\n"
    })

    return code
  }

  const generateHTMLCode = () => {
    let htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: '#3b82f6', // blue-500
          }
        }
      }
    }
  </script>
</head>
<body>
  <div class="min-h-screen">
`

    // Convert React components to HTML with custom text
    Object.entries(selectedComponents).forEach(([category, componentId]) => {
      if (!componentId) return

      htmlCode += `    <!-- ${category.charAt(0).toUpperCase() + category.slice(1)}: ${componentId} -->\n`
      htmlCode += `    ${getComponentHTML(category, componentId, customTextContent, componentColors[category])}\n\n`
    })

    htmlCode += `  </div>
</body>
</html>`

    return htmlCode
  }

  const generateInstallationGuide = () => {
    return `# Installation Guide

## Option 1: Using the ZIP file (Recommended)

1. Extract the downloaded ZIP file
2. Open the folder in your terminal
3. Run \`npm install\` to install dependencies
4. Run \`npm run dev\` to start the development server
5. Open http://localhost:3000 in your browser

## Option 2: Manual Setup

1. Create a new Next.js project:
   \`npx create-next-app@latest my-website --typescript --tailwind --eslint\`

2. Install additional dependencies:
   \`npm install lucide-react clsx tailwind-merge framer-motion\`

3. Copy the generated code into \`app/page.tsx\`

4. Run the development server:
   \`npm run dev\`
`
  }

  const downloadProjectZip = async () => {
    const zip = new JSZip()
    
    // Package.json
    zip.file("package.json", JSON.stringify({
      name: "my-website",
      version: "0.1.0",
      private: true,
      scripts: {
        dev: "next dev",
        build: "next build",
        start: "next start",
        lint: "next lint"
      },
      dependencies: {
        "react": "^18",
        "react-dom": "^18",
        "next": "14.2.16",
        "lucide-react": "^0.454.0",
        "clsx": "^2.1.1",
        "tailwind-merge": "^2.5.5",
        "framer-motion": "^11.11.11"
      },
      devDependencies: {
        "typescript": "^5",
        "@types/node": "^20",
        "@types/react": "^18",
        "@types/react-dom": "^18",
        "postcss": "^8",
        "tailwindcss": "^3.4.1",
        "eslint": "^8",
        "eslint-config-next": "14.2.16"
      }
    }, null, 2))

    // tsconfig.json
    zip.file("tsconfig.json", JSON.stringify({
      compilerOptions: {
        lib: ["dom", "dom.iterable", "esnext"],
        allowJs: true,
        skipLibCheck: true,
        strict: true,
        noEmit: true,
        esModuleInterop: true,
        module: "esnext",
        moduleResolution: "bundler",
        resolveJsonModule: true,
        isolatedModules: true,
        jsx: "preserve",
        incremental: true,
        plugins: [{ name: "next" }],
        paths: { "@/*": ["./*"] }
      },
      include: ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
      exclude: ["node_modules"]
    }, null, 2))

    // tailwind.config.ts
    zip.file("tailwind.config.ts", `import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;`)

    // postcss.config.mjs
    zip.file("postcss.config.mjs", `/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
export default config;`)

    // next.config.mjs
    zip.file("next.config.mjs", `/** @type {import('next').NextConfig} */
const nextConfig = {};
export default nextConfig;`)

    // .gitignore
    zip.file(".gitignore", `node_modules
.next
.DS_Store
.env.local`)

    // App directory
    const app = zip.folder("app")
    if (app) {
        app.file("layout.tsx", `import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Website",
  description: "Created with Lail Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}`)

        app.file("globals.css", `@tailwind base;
@tailwind components;
@tailwind utilities;`)

        app.file("page.tsx", generateNextJSCode())
    }

    // Generate blob
    const content = await zip.generateAsync({ type: "blob" })
    
    // Download
    const element = document.createElement("a")
    element.href = URL.createObjectURL(content)
    element.download = "nextjs-project.zip"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return {
    generateNextJSCode,
    generateHTMLCode,
    generateInstallationGuide,
    downloadProjectZip
  }
}
