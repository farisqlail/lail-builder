import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <Loader2 size={40} className="text-primary animate-spin mx-auto mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Loading AI Generator</h2>
        <p className="text-gray-600 dark:text-gray-400">Preparing your personalized website creation experience...</p>
      </div>
    </div>
  )
}
