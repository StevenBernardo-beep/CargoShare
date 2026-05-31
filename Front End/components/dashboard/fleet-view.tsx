"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function FleetView() {
  return (
    <Card className="border-border bg-card mx-auto max-w-xl">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold text-foreground">
              Fleet Management
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Vehicle tracking and management interface
            </CardDescription>
          </div>
          <Badge className="bg-[#00FF00]/10 text-[#00FF00] border border-[#00FF00]/30 hover:bg-[#00FF00]/20">
            <Sparkles className="mr-1 h-3 w-3" />
            Coming Soon
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center py-16">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#00FF00]/10 neon-border">
            <Truck className="h-10 w-10 text-[#00FF00]" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">
            Fleet Dashboard Coming Soon
          </h3>
          <p className="mt-2 max-w-sm text-center text-sm text-muted-foreground">
            Track your vehicles in real-time, manage maintenance schedules, and monitor driver performance all in one place.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-[#00FF00]">12</p>
              <p className="text-xs text-muted-foreground">Vehicles</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#00FF00]">8</p>
              <p className="text-xs text-muted-foreground">Active</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#00FF00]">4</p>
              <p className="text-xs text-muted-foreground">Idle</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
