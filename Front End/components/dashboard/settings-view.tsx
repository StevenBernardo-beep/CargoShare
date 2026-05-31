"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Settings, Truck, Satellite, Globe } from "lucide-react"

export function SettingsView() {
  const [maxCapacity, setMaxCapacity] = useState([1000])
  const [gpsEnabled, setGpsEnabled] = useState(true)
  const [apiEndpoint, setApiEndpoint] = useState("https://api.sharecargo.io/v1")

  return (
    <Card className="border-border bg-card mx-auto max-w-xl">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00FF00]/10">
            <Settings className="h-5 w-5 text-[#00FF00]" />
          </div>
          <div>
            <CardTitle className="text-lg font-semibold text-foreground">
              Settings
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Configure your route optimization preferences
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Max Vehicle Capacity Slider */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Truck className="h-4 w-4 text-[#00FF00]" />
            <Label className="text-sm font-medium text-foreground">
              Max Vehicle Capacity (kg)
            </Label>
          </div>
          <Slider
            value={maxCapacity}
            onValueChange={setMaxCapacity}
            max={5000}
            min={100}
            step={100}
            className="[&_[role=slider]]:bg-[#00FF00] [&_[role=slider]]:border-[#00FF00] [&_.relative]:bg-secondary [&_[data-state=active]]:bg-[#00FF00]"
          />
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>100 kg</span>
            <span className="rounded-md bg-[#00FF00]/10 px-2 py-1 font-mono text-[#00FF00]">
              {maxCapacity[0]} kg
            </span>
            <span>5000 kg</span>
          </div>
        </div>

        {/* GPS Toggle */}
        <div className="flex items-center justify-between rounded-xl bg-secondary p-4">
          <div className="flex items-center gap-3">
            <Satellite className="h-4 w-4 text-[#00FF00]" />
            <div>
              <Label className="text-sm font-medium text-foreground">
                Real-time GPS Tracking
              </Label>
              <p className="text-xs text-muted-foreground">
                Enable live vehicle location updates
              </p>
            </div>
          </div>
          <Switch
            checked={gpsEnabled}
            onCheckedChange={setGpsEnabled}
            className="data-[state=checked]:bg-[#00FF00]"
          />
        </div>

        {/* API Endpoint Input */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <Globe className="h-4 w-4 text-[#00FF00]" />
            <Label htmlFor="api-endpoint" className="text-sm font-medium text-foreground">
              API Endpoint URL
            </Label>
          </div>
          <Input
            id="api-endpoint"
            value={apiEndpoint}
            onChange={(e) => setApiEndpoint(e.target.value)}
            placeholder="https://api.example.com/v1"
            className="bg-secondary border-border text-foreground font-mono text-sm placeholder:text-muted-foreground focus:border-[#00FF00] focus:ring-[#00FF00]/20"
          />
          <p className="text-xs text-muted-foreground">
            Connect to your custom logistics API endpoint
          </p>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center gap-2 rounded-xl bg-[#00FF00]/5 p-3 border border-[#00FF00]/20">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00FF00] opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00FF00]"></span>
          </span>
          <span className="text-xs text-[#00FF00]">All systems operational</span>
        </div>
      </CardContent>
    </Card>
  )
}
