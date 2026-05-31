"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface Order {
  id: string
  weight: number
  destination: string
  status: "pending" | "in-transit" | "delivered"
}

const orders: Order[] = [
  { id: "ORD-001", weight: 250, destination: "New York, NY", status: "pending" },
  { id: "ORD-002", weight: 180, destination: "Los Angeles, CA", status: "pending" },
  { id: "ORD-003", weight: 420, destination: "Chicago, IL", status: "pending" },
  { id: "ORD-004", weight: 95, destination: "Houston, TX", status: "pending" },
  { id: "ORD-005", weight: 310, destination: "Phoenix, AZ", status: "pending" },
  { id: "ORD-006", weight: 145, destination: "Seattle, WA", status: "pending" },
]

export function CargoTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <Table>
        <TableHeader>
          <TableRow className="border-border hover:bg-transparent">
            <TableHead className="text-muted-foreground font-medium">Order ID</TableHead>
            <TableHead className="text-muted-foreground font-medium">Weight (kg)</TableHead>
            <TableHead className="text-muted-foreground font-medium">Destination</TableHead>
            <TableHead className="text-muted-foreground font-medium text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id} className="border-border hover:bg-secondary/50">
              <TableCell className="font-mono text-sm text-foreground">{order.id}</TableCell>
              <TableCell className="text-foreground">{order.weight}</TableCell>
              <TableCell className="text-foreground">{order.destination}</TableCell>
              <TableCell className="text-right">
                <Badge
                  variant="outline"
                  className="border-[#00FF00]/30 bg-[#00FF00]/10 text-[#00FF00] font-medium"
                >
                  {order.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
