"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: "VC-2025-001",
    name: "Vintage Crewneck",
    styleCode: "VC-2025-001",
    revenue: 2450,
    profit: 685,
    sizes: "XS-XL",
    colors: 3,
  },
  {
    id: "CD-2025-007",
    name: "Cardigan",
    styleCode: "CD-2025-007",
    revenue: 1890,
    profit: 520,
    sizes: "S-XXL",
    colors: 2,
  },
  {
    id: "SC-2025-003",
    name: "Scarf",
    styleCode: "SC-2025-003",
    revenue: 3200,
    profit: 890,
    sizes: "One Size",
    colors: 4,
  },
  {
    id: "VT-2025-012",
    name: "Vest",
    styleCode: "VT-2025-012",
    revenue: 1650,
    profit: 465,
    sizes: "S-XL",
    colors: 2,
  },
  {
    id: "MT-2025-015",
    name: "4x1 Merino Top",
    styleCode: "MT-2025-015",
    revenue: 2780,
    profit: 775,
    sizes: "XS-L",
    colors: 5,
  },
  {
    id: "BN-2025-009",
    name: "Beanie",
    styleCode: "BN-2025-009",
    revenue: 1420,
    profit: 395,
    sizes: "One Size",
    colors: 3,
  },
  {
    id: "BL-2025-021",
    name: "Blanket",
    styleCode: "BL-2025-021",
    revenue: 3850,
    profit: 1075,
    sizes: "One Size",
    colors: 4,
  },
  {
    id: "HD-2025-018",
    name: "Hoodie",
    styleCode: "HD-2025-018",
    revenue: 2100,
    profit: 585,
    sizes: "XS-XXL",
    colors: 3,
  },
]

export default function IncomingProjectsPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <div className="flex">
        <Sidebar activeItem="incoming" />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h2 className="text-2xl text-neutral-900">Incoming Projects</h2>
            <p className="text-neutral-600 mt-1">Review and manage new project requests</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-neutral-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-16 h-16 bg-neutral-300 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-white">Style Image</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-neutral-600">Revenue: ${project.revenue.toLocaleString()}</span>
                    <p className="text-xs text-neutral-500">Profit: ${project.profit}</p>
                  </div>
                </div>
                <h4 className="text-neutral-900 font-medium">{project.name}</h4>
                <p className="text-sm text-neutral-600">Style Code: {project.styleCode}</p>
                <div className="flex justify-between text-sm text-neutral-500 mt-2">
                  <span>Sizes: {project.sizes}</span>
                  <span>{project.colors} colors</span>
                </div>
                <Link href={`/incoming/${project.id}`}>
                  <Button className="w-full mt-3 bg-neutral-900 text-white hover:bg-neutral-800">View Details</Button>
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
