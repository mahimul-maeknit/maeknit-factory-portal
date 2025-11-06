"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import React from "react"
const projectDetails = {
  "VC-2025-001": {
    name: "Vintage Crewneck",
    styleCode: "CS-2025-001",
    deliveryDeadline: "December 15, 2025",
    totalRevenue: 8640,
    projectedProfit: 2592,
    profitMargin: 30,
    variants: [
      { size: "XS", color: "Navy", quantity: 15, unitPrice: 80, total: 1200 },
      { size: "S", color: "Navy", quantity: 25, unitPrice: 80, total: 2000 },
      { size: "M", color: "Navy", quantity: 30, unitPrice: 80, total: 2400 },
      { size: "L", color: "Charcoal", quantity: 20, unitPrice: 80, total: 1600 },
      { size: "XL", color: "Cream", quantity: 18, unitPrice: 80, total: 1440 },
    ],
    totalUnits: 108,
    gauge: "12 GG",
    yarnComposition: "100% Cashmere",
    stitchPattern: "1x1 Rib, Stockinette",
    machineKnitTime: "55 minutes",
    timeline: [
      { label: "Sample Approval", date: "Nov 20, 2025" },
      { label: "Production Start", date: "Nov 25, 2025" },
      { label: "Quality Control", date: "Dec 10, 2025" },
      { label: "Final Delivery", date: "Dec 15, 2025" },
    ],
    client: {
      brand: "Rudimentary",
      contact: "Sam Ojile",
      email: "sam@rudimentary.com",
    },
  },
}

export default function IncomingProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const unwrappedParams = React.use(params)
  const { id } = unwrappedParams

  const project = projectDetails[id as keyof typeof projectDetails]

  if (!project) return <div>Project not found</div>


  const handleAccept = () => {
    router.push("/in-progress")
  }

  const handleDecline = () => {
    router.push("/incoming")
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <div className="flex">
        <Sidebar activeItem="incoming" />
        <main className="flex-1 p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <Link
                href="/incoming"
                className="flex items-center space-x-2 mb-2 text-neutral-600 hover:text-neutral-900"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Back to Incoming</span>
              </Link>
              <h2 className="text-2xl text-neutral-900">Style Detail View</h2>
              <p className="text-neutral-600 mt-1">Review project specifications and variants</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" onClick={handleDecline}>
                Decline
              </Button>
              <Button className="bg-neutral-900 text-white hover:bg-neutral-800" onClick={handleAccept}>
                Accept Project
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 space-y-6">
              {/* Project Overview */}
              <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
                <h3 className="text-lg text-neutral-900 mb-4">Project Overview</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-neutral-600 mb-1">Style Name</label>
                    <p className="text-neutral-900">{project.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-600 mb-1">Style Code</label>
                    <p className="text-neutral-900">{project.styleCode}</p>
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-600 mb-1">Delivery Deadline</label>
                    <p className="text-neutral-900">{project.deliveryDeadline}</p>
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-600 mb-1">Total Revenue</label>
                    <p className="text-neutral-900 text-lg">${project.totalRevenue.toLocaleString()}</p>
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-600 mb-1">Projected Profit</label>
                    <p className="text-neutral-900 text-lg text-neutral-600">
                      ${project.projectedProfit.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-600 mb-1">Profit Margin</label>
                    <p className="text-neutral-900">{project.profitMargin}%</p>
                  </div>
                </div>
              </div>

              {/* Style Variants */}
              <div className="bg-white rounded-lg shadow-sm border border-neutral-200">
                <div className="p-6 border-b border-neutral-200">
                  <h3 className="text-lg text-neutral-900">Style Variants</h3>
                  <p className="text-sm text-neutral-600 mt-1">Line items for each size and color combination</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-neutral-50 border-b border-neutral-200">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs text-neutral-500 uppercase tracking-wider">Size</th>
                        <th className="px-6 py-3 text-left text-xs text-neutral-500 uppercase tracking-wider">Color</th>
                        <th className="px-6 py-3 text-left text-xs text-neutral-500 uppercase tracking-wider">
                          Quantity
                        </th>
                        <th className="px-6 py-3 text-left text-xs text-neutral-500 uppercase tracking-wider">
                          Unit Price
                        </th>
                        <th className="px-6 py-3 text-left text-xs text-neutral-500 uppercase tracking-wider">Total</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-neutral-200">
                      {project.variants.map((variant, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">{variant.size}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">{variant.color}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">{variant.quantity}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">${variant.unitPrice}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                            ${variant.total.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-6 border-t border-neutral-200 bg-neutral-50">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600">Total Units: {project.totalUnits}</span>
                    <span className="text-lg text-neutral-900">Total: ${project.totalRevenue.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
                <h3 className="text-lg text-neutral-900 mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-neutral-600 mb-1">Gauge</label>
                    <p className="text-neutral-900">{project.gauge}</p>
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-600 mb-1">Yarn Composition</label>
                    <p className="text-neutral-900">{project.yarnComposition}</p>
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-600 mb-1">Stitch Pattern</label>
                    <p className="text-neutral-900">{project.stitchPattern}</p>
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-600 mb-1">Machine Knit Time</label>
                    <p className="text-neutral-900">{project.machineKnitTime}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Style Images */}
              <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
                <h3 className="text-lg text-neutral-900 mb-4">Style Images</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-neutral-600 mb-2">Front View</label>
                    <div className="w-full h-48 bg-white border-2 border-dashed border-neutral-300 rounded-lg flex items-center justify-center">
                      <span className="text-neutral-500 text-sm">Front Style Image</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-600 mb-2">Back View</label>
                    <div className="w-full h-48 bg-white border-2 border-dashed border-neutral-300 rounded-lg flex items-center justify-center">
                      <span className="text-neutral-500 text-sm">Back Style Image</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Production Timeline */}
              <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
                <h3 className="text-lg text-neutral-900 mb-4">Production Timeline</h3>
                <div className="space-y-3">
                  {project.timeline.map((item, index) => (
                    <div
                      key={index}
                      className={`flex justify-between ${index === project.timeline.length - 1 ? "border-t border-neutral-200 pt-3" : ""}`}
                    >
                      <span
                        className={`text-sm ${index === project.timeline.length - 1 ? "text-neutral-900" : "text-neutral-600"}`}
                      >
                        {item.label}
                      </span>
                      <span className="text-sm text-neutral-900">{item.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Information */}
              <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
                <h3 className="text-lg text-neutral-900 mb-4">Client Information</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm text-neutral-600">Brand</label>
                    <p className="text-neutral-900">{project.client.brand}</p>
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-600">Contact</label>
                    <p className="text-neutral-900">{project.client.contact}</p>
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-600">Email</label>
                    <p className="text-neutral-900">{project.client.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
