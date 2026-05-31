"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation, Sparkles } from "lucide-react"

export function AddRouteView() {
  return (
    <Card className="border-border bg-card mx-auto max-w-xl">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold text-foreground">
              Add New Route
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Define origin and destination for optimization
            </CardDescription>
          </div>
          <Badge className="bg-[#00FF00]/10 text-[#00FF00] border border-[#00FF00]/30 hover:bg-[#00FF00]/20">
            <Sparkles className="mr-1 h-3 w-3" />
            Coming Soon
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Origin Input */}
        <div className="space-y-2">
          <Label htmlFor="origin" className="text-sm font-medium text-foreground">
            Supplier Location (Origin)
          </Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="origin"
              placeholder="Enter supplier address..."
              className="pl-10 bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-[#00FF00] focus:ring-[#00FF00]/20"
            />
          </div>
        </div>

        {/* Destination Input */}
        <div className="space-y-2">
          <Label htmlFor="destination" className="text-sm font-medium text-foreground">
            Store/Warehouse Location (Destination)
          </Label>
          <div className="relative">
            <Navigation className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="destination"
              placeholder="Enter destination address..."
              className="pl-10 bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-[#00FF00] focus:ring-[#00FF00]/20"
            />
          </div>
        </div>

        {/* Disabled Submit Button */}
        <Button
          disabled
          className="w-full bg-[#00FF00]/20 text-[#00FF00]/50 border border-[#00FF00]/20 cursor-not-allowed"
        >
          Submit Route
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          Route submission will be available in the next update
        </p>
      </CardContent>
    </Card>
  )
}
