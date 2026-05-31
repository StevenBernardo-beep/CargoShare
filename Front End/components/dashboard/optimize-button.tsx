"use client"

import { useState } from "react"
import { Sparkles, X, Truck, MapPin, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface OptimizeButtonProps {
  className?: string
}

export function OptimizeButton({ className }: OptimizeButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [optimizedData, setOptimizedData] = useState<any>(null);

  const handleOptimizeRoute = async () => {
    setIsLoading(true);
    
    try {
      const response = await fetch("https://happiness-crummy-keg.ngrok-free.dev/api/optimize-route", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true" 
  },

        body: JSON.stringify({
          orders: [
            { order_id: "ORD-001", weight_kg: 500, destination: "Warehouse A" },
            { order_id: "ORD-002", weight_kg: 300, destination: "Warehouse B" }
          ],
          vehicles: [
            { vehicle_id: "TRK-1", max_capacity_kg: 1000 }
          ]
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      // Simpan hasil dari Python untuk ditampilkan di layar
      setOptimizedData(result.optimized_data);

    } catch (error) {
      console.error("[ERROR] Connection failed:", error);
      alert("Connection failed. Please ensure the backend server (uvicorn) is running.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={handleOptimizeRoute}
        disabled={isLoading}
        className={cn(
          "relative h-11 gap-2 rounded-xl bg-[#00FF00] px-6 text-sm font-semibold text-black transition-all duration-300",
          "hover:bg-[#00FF00]/90 hover:scale-[1.02]",
          "neon-glow",
          "disabled:opacity-70 disabled:cursor-not-allowed",
          className
        )}
      >
        <Sparkles className={cn("h-4 w-4", isLoading && "animate-spin")} />
        {isLoading ? "Optimizing Route..." : "Optimize Route"}
      </Button>

      {/* POP-UP MODAL VISUALISASI RUTE (MUNCUL KALAU SUKSES) */}
      {optimizedData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-lg rounded-2xl border border-[#00FF00]/30 bg-zinc-950 p-6 shadow-[0_0_40px_rgba(0,255,0,0.15)]">
            
            {/* Tombol Close */}
            <button 
              onClick={() => setOptimizedData(null)}
              className="absolute right-4 top-4 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header Modal */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00FF00]/10">
                <CheckCircle2 className="h-6 w-6 text-[#00FF00]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Route Optimized!</h3>
                <p className="text-sm text-zinc-400">AI has successfully calculated the most efficient path.</p>
              </div>
            </div>

            {/* Hasil Optimasi Truk & Rute */}
            <div className="space-y-4">
              {optimizedData.routes.map((route: any, index: number) => (
                <div key={index} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
                  <div className="flex items-center gap-2 mb-3 text-[#00FF00] font-semibold">
                    <Truck className="h-5 w-5" />
                    <span>Vehicle: {route.vehicle}</span>
                    <span className="ml-auto text-xs text-zinc-400 font-normal">
                      Total Load: {optimizedData.total_weight} kg
                    </span>
                  </div>
                  
                  {/* Visualisasi Jalur */}
                  <div className="pl-2 space-y-4 relative before:absolute before:inset-y-2 before:left-[11px] before:w-[2px] before:bg-zinc-800">
                    {route.path.map((stop: string, step: number) => (
                      <div key={step} className="relative flex items-center gap-4">
                        <div className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-950 border-2 border-[#00FF00]">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#00FF00]" />
                        </div>
                        <div className="text-sm font-medium text-zinc-200">
                          <span className="text-zinc-500 mr-2">Stop {step + 1}:</span>
                          {stop}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Modal */}
            <div className="mt-6 flex justify-end">
              <Button 
                onClick={() => setOptimizedData(null)}
                className="bg-zinc-800 text-white hover:bg-zinc-700"
              >
                Done
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}