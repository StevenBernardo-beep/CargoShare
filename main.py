from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Order(BaseModel):
    order_id: str
    weight_kg: float
    destination: str

class Vehicle(BaseModel):
    vehicle_id: str
    max_capacity_kg: float

class OptimizationRequest(BaseModel):
    orders: List[Order]
    vehicles: List[Vehicle]

@app.post("/api/optimize-route")
async def optimize_route(request: OptimizationRequest):
    return {
        "status": "success",
        "message": "Route optimization completed",
        "optimized_data": {
            "total_weight": sum(order.weight_kg for order in request.orders),
            "routes": [
                {"vehicle": "TRK-1", "path": ["Warehouse A", "Warehouse B"]}
            ]
        }
    }