import { Bell, User } from "lucide-react"

export function Header() {
  return (
    <header className="bg-white border-b border-neutral-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl text-neutral-900">MAEKNIT Factory Portal</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-neutral-600 hover:bg-neutral-100 rounded-lg">
            <Bell className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 bg-neutral-300 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-neutral-600" />
          </div>
        </div>
      </div>
    </header>
  )
}
