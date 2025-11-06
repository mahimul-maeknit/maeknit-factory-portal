import Link from "next/link"
import { Inbox, Clock, BarChart3 } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  activeItem: "incoming" | "in-progress" | "metrics"
}

export function Sidebar({ activeItem }: SidebarProps) {
  return (
    <aside className="w-64 bg-white border-r border-neutral-200 h-[calc(100vh-73px)]">
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link
              href="/incoming"
              className={cn(
                "flex items-center px-3 py-2 rounded-lg",
                activeItem === "incoming" ? "text-neutral-900 bg-neutral-100" : "text-neutral-600 hover:bg-neutral-100",
              )}
            >
              <Inbox className="w-5 h-5 mr-3" />
              Incoming Projects
            </Link>
          </li>
          <li>
            <Link
              href="/in-progress"
              className={cn(
                "flex items-center px-3 py-2 rounded-lg",
                activeItem === "in-progress"
                  ? "text-neutral-900 bg-neutral-100"
                  : "text-neutral-600 hover:bg-neutral-100",
              )}
            >
              <Clock className="w-5 h-5 mr-3" />
              In Progress
            </Link>
          </li>
          <li>
            <Link
              href="/metrics"
              className={cn(
                "flex items-center px-3 py-2 rounded-lg",
                activeItem === "metrics" ? "text-neutral-900 bg-neutral-100" : "text-neutral-600 hover:bg-neutral-100",
              )}
            >
              <BarChart3 className="w-5 h-5 mr-3" />
              My Metrics
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
