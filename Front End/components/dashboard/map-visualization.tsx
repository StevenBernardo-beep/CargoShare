"use client"

import { MapPin, Navigation } from "lucide-react"

const routeNodes = [
  { id: 1, x: 15, y: 70, label: "Warehouse", isOrigin: true },
  { id: 2, x: 30, y: 35, label: "Stop 1" },
  { id: 3, x: 50, y: 55, label: "Stop 2" },
  { id: 4, x: 70, y: 25, label: "Stop 3" },
  { id: 5, x: 85, y: 50, label: "Destination", isDestination: true },
]

export function MapVisualization() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-secondary/30">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="text-border">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Route visualization */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        {/* Animated route path */}
        <path
          d={`M ${routeNodes.map((n) => `${n.x} ${n.y}`).join(" L ")}`}
          fill="none"
          stroke="#00FF00"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="route-line"
          strokeDasharray="2 2"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="20"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>

        {/* Route nodes */}
        {routeNodes.map((node) => (
          <g key={node.id}>
            {/* Outer glow */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.isOrigin || node.isDestination ? 3 : 2}
              fill={node.isOrigin || node.isDestination ? "#00FF00" : "#00FF00"}
              opacity={0.3}
              className="animate-pulse"
            />
            {/* Inner dot */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.isOrigin || node.isDestination ? 1.5 : 1}
              fill="#00FF00"
            />
          </g>
        ))}
      </svg>

      {/* Location labels */}
      <div className="absolute left-[12%] top-[62%] flex items-center gap-1">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00FF00]/20">
          <Navigation className="h-3 w-3 text-[#00FF00]" />
        </div>
        <span className="text-xs font-medium text-[#00FF00]">Origin</span>
      </div>

      <div className="absolute right-[12%] top-[40%] flex items-center gap-1">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00FF00]/20">
          <MapPin className="h-3 w-3 text-[#00FF00]" />
        </div>
        <span className="text-xs font-medium text-[#00FF00]">Destination</span>
      </div>

      {/* Stats overlay */}
      <div className="absolute bottom-4 left-4 flex gap-3">
        <div className="rounded-lg bg-card/80 px-3 py-2 backdrop-blur-sm border border-border">
          <p className="text-xs text-muted-foreground">Total Distance</p>
          <p className="text-sm font-semibold text-foreground">847 km</p>
        </div>
        <div className="rounded-lg bg-card/80 px-3 py-2 backdrop-blur-sm border border-border">
          <p className="text-xs text-muted-foreground">Est. Time</p>
          <p className="text-sm font-semibold text-foreground">9h 24m</p>
        </div>
        <div className="rounded-lg bg-card/80 px-3 py-2 backdrop-blur-sm border border-border">
          <p className="text-xs text-muted-foreground">Fuel Saved</p>
          <p className="text-sm font-semibold text-[#00FF00]">18%</p>
        </div>
      </div>

      {/* Live indicator */}
      <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-card/80 px-3 py-1.5 backdrop-blur-sm border border-border">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00FF00] opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00FF00]"></span>
        </span>
        <span className="text-xs font-medium text-foreground">Live Tracking</span>
      </div>
    </div>
  )
}
