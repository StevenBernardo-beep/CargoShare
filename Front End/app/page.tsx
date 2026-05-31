"use client"

import { useState } from "react"
import { Sidebar } from "@/components/dashboard/sidebar"
import { OptimizeButton } from "@/components/dashboard/optimize-button"
import { CargoTable } from "@/components/dashboard/cargo-table"
import { MapVisualization } from "@/components/dashboard/map-visualization"
import { AddRouteView } from "@/components/dashboard/add-route-view"
import { FleetView } from "@/components/dashboard/fleet-view"
import { SettingsView } from "@/components/dashboard/settings-view"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, TrendingUp, Truck, Clock } from "lucide-react"

const stats = [
  { label: "Active Orders", value: "24", icon: Package, change: "+12%" },
  { label: "Fleet Utilization", value: "87%", icon: Truck, change: "+5%" },
  { label: "Avg. Delivery Time", value: "2.4h", icon: Clock, change: "-18%" },
  { label: "Cost Efficiency", value: "94%", icon: TrendingUp, change: "+8%" },
]

const viewTitles: Record<string, { title: string; subtitle: string }> = {
  dashboard: { title: "Dashboard", subtitle: "AI-Powered Route Optimization Platform" },
  "add-route": { title: "Add Route", subtitle: "Create new delivery routes" },
  fleet: { title: "Fleet", subtitle: "Vehicle management and tracking" },
  settings: { title: "Settings", subtitle: "Configure system preferences" },
}

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState("dashboard")
  const [isOptimizing, setIsOptimizing] = useState(false)

  const handleOptimize = () => {
    setIsOptimizing(true)
    setTimeout(() => setIsOptimizing(false), 2000)
  }

  const currentView = viewTitles[activeNav] || viewTitles.dashboard

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar activeItem={activeNav} onItemClick={setActiveNav} />

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-6 lg:p-8">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-2xl font-bold text-foreground lg:text-3xl">
              Share<span className="text-[#00FF00]">Cargo</span>
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {currentView.subtitle}
            </p>
          </header>

          {/* Dashboard View */}
          {activeNav === "dashboard" && (
            <>
              {/* Stats Row */}
              <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
                {stats.map((stat) => {
                  const Icon = stat.icon
                  return (
                    <Card key={stat.label} className="border-border bg-card">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-muted-foreground">{stat.label}</p>
                            <p className="mt-1 text-xl font-bold text-foreground">{stat.value}</p>
                          </div>
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00FF00]/10">
                            <Icon className="h-5 w-5 text-[#00FF00]" />
                          </div>
                        </div>
                        <p className="mt-2 text-xs text-[#00FF00]">{stat.change} from last week</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Bento Grid - Main Content */}
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Left Card - Cargo Data */}
                <Card className="border-border bg-card">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg font-semibold text-foreground">
                          Pending Orders
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          6 orders awaiting route optimization
                        </CardDescription>
                      </div>
                      <OptimizeButton onClick={handleOptimize} isLoading={isOptimizing} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CargoTable />
                  </CardContent>
                </Card>

                {/* Right Card - Map Visualization */}
                <Card className="border-border bg-card min-h-[500px]">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-semibold text-foreground">
                      Route Visualization
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Optimized delivery path with real-time tracking
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="h-[calc(100%-5rem)]">
                    <MapVisualization />
                  </CardContent>
                </Card>
              </div>
            </>
          )}

          {/* Add Route View */}
          {activeNav === "add-route" && <AddRouteView />}

          {/* Fleet View */}
          {activeNav === "fleet" && <FleetView />}

          {/* Settings View */}
          {activeNav === "settings" && <SettingsView />}
        </div>
      </main>
    </div>
  )
}
