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
    images: {
      front: "/assets/1.png",
      back: "/assets/1.png",
    },
  },
  "MSS-2025-001": {
    name: "Mohair Striped Sweater",
    styleCode: "MSS-2025-001",
    deliveryDeadline: "March 15, 2025",
    totalRevenue: 9800,
    projectedProfit: 2450,
    profitMargin: 25,
    variants: [
      { size: "XS", color: "Navy/Cream", quantity: 12, unitPrice: 70, total: 840 },
      { size: "S", color: "Navy/Cream", quantity: 28, unitPrice: 70, total: 1960 },
      { size: "M", color: "Navy/Cream", quantity: 35, unitPrice: 70, total: 2450 },
      { size: "L", color: "Charcoal/Beige", quantity: 25, unitPrice: 70, total: 1750 },
      { size: "XL", color: "Charcoal/Beige", quantity: 20, unitPrice: 70, total: 1400 },
      { size: "S", color: "Forest/Cream", quantity: 20, unitPrice: 70, total: 1400 },
    ],
    totalUnits: 140,
    gauge: "7 GG",
    yarnComposition: "80% Mohair, 20% Wool",
    stitchPattern: "Striped Pattern, Stockinette",
    machineKnitTime: "48 minutes",
    timeline: [
      { label: "Sample Approval", date: "Feb 20, 2025" },
      { label: "Production Start", date: "Feb 25, 2025" },
      { label: "Quality Control", date: "Mar 10, 2025" },
      { label: "Final Delivery", date: "Mar 15, 2025" },
    ],
    client: {
      brand: "Nordic Knits",
      contact: "Emma Johnson",
      email: "emma@nordicknits.com",
    },
    images: {
      front: "/assets/5.png",
      back: "/assets/5.png",
    },
  },
  "CD-2025-007": {
    name: "Cardigan",
    styleCode: "CD-2025-007",
    deliveryDeadline: "March 20, 2025",
    totalRevenue: 7560,
    projectedProfit: 1890,
    profitMargin: 25,
    variants: [
      { size: "S", color: "Charcoal", quantity: 18, unitPrice: 90, total: 1620 },
      { size: "M", color: "Charcoal", quantity: 22, unitPrice: 90, total: 1980 },
      { size: "L", color: "Charcoal", quantity: 20, unitPrice: 90, total: 1800 },
      { size: "XL", color: "Navy", quantity: 12, unitPrice: 90, total: 1080 },
      { size: "XXL", color: "Navy", quantity: 12, unitPrice: 90, total: 1080 },
    ],
    totalUnits: 84,
    gauge: "12 GG",
    yarnComposition: "100% Merino Wool",
    stitchPattern: "Cable Knit, Ribbed Edges",
    machineKnitTime: "62 minutes",
    timeline: [
      { label: "Sample Approval", date: "Feb 25, 2025" },
      { label: "Production Start", date: "Mar 1, 2025" },
      { label: "Quality Control", date: "Mar 15, 2025" },
      { label: "Final Delivery", date: "Mar 20, 2025" },
    ],
    client: {
      brand: "Urban Threads",
      contact: "Michael Chen",
      email: "michael@urbanthreads.com",
    },
    images: {
      front: "/assets/4.png",
      back: "/assets/4.png",
    },
  },
  "AV-2025-003": {
    name: "Argyle Vest",
    styleCode: "AV-2025-003",
    deliveryDeadline: "April 5, 2025",
    totalRevenue: 12800,
    projectedProfit: 3200,
    profitMargin: 25,
    variants: [
      { size: "One Size", color: "Navy/Red/Cream", quantity: 40, unitPrice: 80, total: 3200 },
      { size: "One Size", color: "Forest/Tan/Cream", quantity: 35, unitPrice: 80, total: 2800 },
      { size: "One Size", color: "Burgundy/Navy/Grey", quantity: 45, unitPrice: 80, total: 3600 },
      { size: "One Size", color: "Black/White/Grey", quantity: 40, unitPrice: 80, total: 3200 },
    ],
    totalUnits: 160,
    gauge: "12 GG",
    yarnComposition: "100% Cotton",
    stitchPattern: "Argyle Pattern, Ribbed Trim",
    machineKnitTime: "45 minutes",
    timeline: [
      { label: "Sample Approval", date: "Mar 10, 2025" },
      { label: "Production Start", date: "Mar 15, 2025" },
      { label: "Quality Control", date: "Mar 30, 2025" },
      { label: "Final Delivery", date: "Apr 5, 2025" },
    ],
    client: {
      brand: "Prep Style Co",
      contact: "Sarah Williams",
      email: "sarah@prepstyle.com",
    },
    images: {
      front: "/assets/2.png",
      back: "/assets/2.png",
    },
  },
  "SC-2025-012": {
    name: "Scarf",
    styleCode: "SC-2025-012",
    deliveryDeadline: "March 25, 2025",
    totalRevenue: 6600,
    projectedProfit: 1650,
    profitMargin: 25,
    variants: [
      { size: "S", color: "Cream", quantity: 30, unitPrice: 55, total: 1650 },
      { size: "M", color: "Cream", quantity: 35, unitPrice: 55, total: 1925 },
      { size: "L", color: "Navy", quantity: 25, unitPrice: 55, total: 1375 },
      { size: "XL", color: "Navy", quantity: 30, unitPrice: 55, total: 1650 },
    ],
    totalUnits: 120,
    gauge: "5 GG",
    yarnComposition: "100% Alpaca",
    stitchPattern: "Cable Pattern",
    machineKnitTime: "35 minutes",
    timeline: [
      { label: "Sample Approval", date: "Feb 28, 2025" },
      { label: "Production Start", date: "Mar 5, 2025" },
      { label: "Quality Control", date: "Mar 20, 2025" },
      { label: "Final Delivery", date: "Mar 25, 2025" },
    ],
    client: {
      brand: "Alpine Accessories",
      contact: "David Martinez",
      email: "david@alpineacc.com",
    },
    images: {
      front: "/assets/7.webp",
      back: "/assets/7.webp",
    },
  },
  "PL-2025-021": {
    name: "POLO",
    styleCode: "PL-2025-021",
    deliveryDeadline: "April 10, 2025",
    totalRevenue: 15400,
    projectedProfit: 3850,
    profitMargin: 25,
    variants: [
      { size: "One Size", color: "Navy", quantity: 50, unitPrice: 77, total: 3850 },
      { size: "One Size", color: "White", quantity: 45, unitPrice: 77, total: 3465 },
      { size: "One Size", color: "Black", quantity: 55, unitPrice: 77, total: 4235 },
      { size: "One Size", color: "Grey", quantity: 50, unitPrice: 77, total: 3850 },
    ],
    totalUnits: 200,
    gauge: "14 GG",
    yarnComposition: "100% Pima Cotton",
    stitchPattern: "Pique Knit, Ribbed Collar",
    machineKnitTime: "40 minutes",
    timeline: [
      { label: "Sample Approval", date: "Mar 15, 2025" },
      { label: "Production Start", date: "Mar 20, 2025" },
      { label: "Quality Control", date: "Apr 5, 2025" },
      { label: "Final Delivery", date: "Apr 10, 2025" },
    ],
    client: {
      brand: "Classic Sportswear",
      contact: "James Anderson",
      email: "james@classicsport.com",
    },
    images: {
      front: "/assets/3.png",
      back: "/assets/3.png",
    },
  },
  "MT-2025-015": {
    name: "4x1 Merino Top",
    styleCode: "MT-2025-015",
    deliveryDeadline: "March 30, 2025",
    totalRevenue: 11120,
    projectedProfit: 2780,
    profitMargin: 25,
    variants: [
      { size: "XS", color: "Charcoal", quantity: 15, unitPrice: 80, total: 1200 },
      { size: "S", color: "Charcoal", quantity: 25, unitPrice: 80, total: 2000 },
      { size: "M", color: "Navy", quantity: 30, unitPrice: 80, total: 2400 },
      { size: "M", color: "Cream", quantity: 28, unitPrice: 80, total: 2240 },
      { size: "L", color: "Forest", quantity: 22, unitPrice: 80, total: 1760 },
      { size: "L", color: "Burgundy", quantity: 19, unitPrice: 80, total: 1520 },
    ],
    totalUnits: 139,
    gauge: "12 GG",
    yarnComposition: "100% Merino Wool",
    stitchPattern: "4x1 Rib",
    machineKnitTime: "50 minutes",
    timeline: [
      { label: "Sample Approval", date: "Mar 5, 2025" },
      { label: "Production Start", date: "Mar 10, 2025" },
      { label: "Quality Control", date: "Mar 25, 2025" },
      { label: "Final Delivery", date: "Mar 30, 2025" },
    ],
    client: {
      brand: "Merino Essentials",
      contact: "Lisa Thompson",
      email: "lisa@merinoess.com",
    },
    images: {
      front: "/assets/6.JPG",
      back: "/assets/6.JPG",
    },
  },
  "BN-2025-009": {
    name: "Beanie",
    styleCode: "BN-2025-009",
    deliveryDeadline: "March 18, 2025",
    totalRevenue: 5680,
    projectedProfit: 1420,
    profitMargin: 25,
    variants: [
      { size: "One Size", color: "Black", quantity: 40, unitPrice: 40, total: 1600 },
      { size: "One Size", color: "Navy", quantity: 35, unitPrice: 40, total: 1400 },
      { size: "One Size", color: "Grey", quantity: 42, unitPrice: 40, total: 1680 },
      { size: "One Size", color: "Cream", quantity: 25, unitPrice: 40, total: 1000 },
    ],
    totalUnits: 142,
    gauge: "7 GG",
    yarnComposition: "100% Merino Wool",
    stitchPattern: "Ribbed Knit",
    machineKnitTime: "25 minutes",
    timeline: [
      { label: "Sample Approval", date: "Feb 28, 2025" },
      { label: "Production Start", date: "Mar 3, 2025" },
      { label: "Quality Control", date: "Mar 13, 2025" },
      { label: "Final Delivery", date: "Mar 18, 2025" },
    ],
    client: {
      brand: "Winter Warmth",
      contact: "Robert Lee",
      email: "robert@winterwarmth.com",
    },
    images: {
      front: "/assets/1.png",
      back: "/assets/1.png",
    },
  },
  "MCC-2025-018": {
    name: "Mohair Cropped Cardigan",
    styleCode: "MCC-2025-018",
    deliveryDeadline: "April 2, 2025",
    totalRevenue: 8400,
    projectedProfit: 2100,
    profitMargin: 25,
    variants: [
      { size: "XS", color: "Cream", quantity: 18, unitPrice: 100, total: 1800 },
      { size: "S", color: "Cream", quantity: 22, unitPrice: 100, total: 2200 },
      { size: "M", color: "Blush", quantity: 20, unitPrice: 100, total: 2000 },
      { size: "L", color: "Blush", quantity: 14, unitPrice: 100, total: 1400 },
      { size: "XL", color: "Sage", quantity: 10, unitPrice: 100, total: 1000 },
    ],
    totalUnits: 84,
    gauge: "7 GG",
    yarnComposition: "70% Mohair, 30% Silk",
    stitchPattern: "Stockinette, Ribbed Edges",
    machineKnitTime: "55 minutes",
    timeline: [
      { label: "Sample Approval", date: "Mar 8, 2025" },
      { label: "Production Start", date: "Mar 13, 2025" },
      { label: "Quality Control", date: "Mar 28, 2025" },
      { label: "Final Delivery", date: "Apr 2, 2025" },
    ],
    client: {
      brand: "Soft Luxe",
      contact: "Amanda White",
      email: "amanda@softluxe.com",
    },
    images: {
      front: "/assets/8.png",
      back: "/assets/8.png",
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
                  <label className="block text-sm text-neutral-600 mb-2">Image View</label>
                  <div className="relative w-full aspect-square bg-white border-2 border-dashed border-neutral-300 rounded-lg overflow-hidden">
                    <img
                      src={project.images.front || "/placeholder.svg"}
                      alt="Image View"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
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
