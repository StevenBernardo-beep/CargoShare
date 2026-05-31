## Inspiration

The 2026 global energy crisis has fundamentally shifted the economics of logistics. With recent geopolitical disruptions and supply chain bottlenecks, fuel now accounts for nearly 50% of total operating costs for road transportation.

Inefficiency is no longer just a minor margin loss; it is a critical financial threat. I was inspired to build ShareCargo because I recognized that when global fuel prices skyrocket, the only variable companies can still control is operational efficiency. I wanted to build a system that treats delivery fleets like a well-optimized circuit—where data can flow seamlessly and physical trucks are routed using calculated logic to eliminate every unnecessary kilometer.

## What it does

ShareCargo is a web-based prototype dashboard designed to automate and visualize cargo vehicle routing. 

From the user's perspective, the workflow is simple and seamless:
1. **Initiate Request:** Users view a list of pending cargo orders on the dashboard and click the "Optimize Route" button.
2. **System Processing:** The frontend immediately triggers a secure request to my Python backend to process the logistics data (handling vehicle capacity and order destinations).
3. **Visual Output:** Once the calculation is complete, the dashboard presents a high-tech, interactive pop-up modal. This modal visually maps out the assigned vehicle, the total cargo load, and the exact step-by-step sequence of stops the truck needs to take. 

## How I built it

To move fast and focus on the core system architecture, I adopted an AI-assisted rapid prototyping approach for my UI, while manually engineering the backend and network integration.

**A. The Frontend:** I leveraged AI generation tools (like v0 by Vercel) to rapidly scaffold my initial React/Next.js components and Tailwind CSS styling.

**B. The Backend:**  The core logic processing is handled by a Python server running the FastAPI framework, which I chose for its speed and strict type validation.

**C. The Bridge:**  Because my frontend was deployed to the cloud via Vercel while my Python server ran locally, I utilized Ngrok to establish a secure, encrypted HTTPS tunnel. This allowed public web traffic to securely reach my local development environment.

## Challenges I ran into

**A. CORS & Mixed Content Policies:** When my Vercel-hosted frontend (HTTPS) attempted to fetch data from my local Python server (HTTP), the browser immediately blocked it due to strict security policies. 

**B. Bypassing Tunnel Warnings:** Even after setting up Ngrok, I had to carefully configure custom HTTP headers (`ngrok-skip-browser-warning`) in my Next.js fetch requests to prevent Ngrok's interstitial HTML pages from breaking my JSON API responses.

**C. Deployment Caching:** I spent considerable time debugging a "phantom" connection issue, only to realize that Vercel's aggressive build caching was holding onto an old `localhost` API route.

## Accomplishments that I'm proud of

My biggest point of pride is successfully architecting and debugging a decoupled full-stack environment under hackathon time constraints. 

I managed to make a cloud-deployed Next.js frontend on Vercel communicate flawlessly with a locally hosted Python FastAPI backend using Ngrok tunneling. Conquering strict CORS policies, bypassing mixed-content blocks, and resolving deployment cache issues to achieve a seamless, real-time data fetch was a massive technical win. 

When the user clicks the "Optimize Route" button, the data travels seamlessly from the cloud to my local machine and back, returning a clean UI visualization. Getting that entire communication pipeline to work flawlessly felt just like successfully closing a complex electrical circuit. I am proud to have built a solid, working prototype foundation that is genuinely scalable.

## What I learned

This project taught me that software engineering shares the exact same fundamental logic as hardware troubleshooting: when a system fails, you have to systematically trace the "signal path." 

I gained deep, practical knowledge about network protocols that I couldn't have learned just by reading theory. I learned how Cross-Origin Resource Sharing (CORS) acts as a strict security gatekeeper and how to establish secure tunneling (Ngrok) to expose local backend servers.

Additionally, I learned how to effectively leverage modern development tools. While utilizing AI to generate the frontend UI components allowed me to prototype at lightning speed, I realized that true engineering requires AI efficiency and strict human logic to work together to achieve anything meaningful.

## What's next for Share Cargo

Currently, my backend simulates the routing output to prove that the decoupled full-stack architecture and communication pipelines work reliably. Moving forward, I plan to evolve this prototype into a production-ready system through three key phases:

**A. Integrating True VRP Solvers:** I will replace the simulated backend logic with actual metaheuristic algorithms or operations research frameworks (such as Google OR-Tools) to dynamically calculate complex routing constraints based on real user inputs.

**B. Real-World Geospatial Data:** I plan to integrate mapping APIs (like Mapbox or Google Maps) so my routing calculations are based on actual road networks and real-time traffic conditions, rather than static coordinate assumptions.

**C. Hardware & IoT Integration:** Taking the system from the screen into the physical world, I aim to develop custom IoT tracking modules (utilizing microcontrollers like the ESP32) for the delivery trucks. This will allow the vehicles to feed live GPS coordinates and hardware telemetry directly back into my Next.js dashboard, creating a truly synchronized hardware-software ecosystem.