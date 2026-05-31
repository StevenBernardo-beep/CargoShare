"use client"

import { Package, LayoutDashboard, Truck, Settings, Route } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  activeItem?: string
  onItemClick?: (item: string) => void
}

const navItems = [
  { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { id: "add-route", icon: Route, label: "Add Route" },
  { id: "fleet", icon: Truck, label: "Fleet" },
  { id: "settings", icon: Settings, label: "Settings" },
]

export function Sidebar({ activeItem = "dashboard", onItemClick }: SidebarProps) {
  return (
    <aside className="flex h-screen w-16 flex-col items-center border-r border-border bg-sidebar py-6">
      {/* Logo */}
      <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-xl bg-[#00FF00]/10 neon-border">
        <Package className="h-5 w-5 text-[#00FF00]" />
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col items-center gap-4">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeItem === item.id
          return (
            <button
              key={item.id}
              onClick={() => onItemClick?.(item.id)}
              className={cn(
                "group relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200",
                isActive
                  ? "bg-[#00FF00]/10 text-[#00FF00]"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              {/* Tooltip */}
              <span className="absolute left-14 hidden rounded-md bg-popover px-2 py-1 text-xs font-medium text-popover-foreground shadow-lg group-hover:block">
                {item.label}
              </span>
              {/* Active indicator */}
              {isActive && (
                <span className="absolute -left-[1.5rem] h-6 w-1 rounded-r-full bg-[#00FF00]" />
              )}
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
