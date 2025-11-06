"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"

const materials = [
  {
    name: "Cashmere Yarn - Navy",
    supplier: "Premium Fibers Ltd | 2/28 NM",
    quantity: "45 kg",
    leadTime: "7 days",
    payment: "Paid",
    status: "Delivered",
  },
  {
    name: "Cashmere Yarn - Cream",
    supplier: "Premium Fibers Ltd | 2/28 NM",
    quantity: "35 kg",
    leadTime: "5 days",
    payment: "Paid",
    status: "In Transit",
  },
  {
    name: "Cashmere Yarn - Charcoal",
    supplier: "Premium Fibers Ltd | 2/28 NM",
    quantity: "40 kg",
    leadTime: "7 days",
    payment: "Paid",
    status: "Delivered",
  },
  {
    name: "Merino Wool Blend - Heather Grey",
    supplier: "Alpine Yarns | 2/30 NM",
    quantity: "25 kg",
    leadTime: "10 days",
    payment: "Pending",
    status: "Pending",
  },
  {
    name: "Elastane Thread",
    supplier: "Stretch Solutions | 70 Denier",
    quantity: "5 kg",
    leadTime: "3 days",
    payment: "Paid",
    status: "Delivered",
  },
  {
    name: "Care Labels",
    supplier: "Label Co | Woven Satin",
    quantity: "1,000 pcs",
    leadTime: "3 days",
    payment: "Pending",
    status: "Pending",
  },
  {
    name: "Buttons - Mother of Pearl",
    supplier: "Button Masters | 12mm",
    quantity: "500 pcs",
    leadTime: "4 days",
    payment: "Paid",
    status: "Delivered",
  },
  {
    name: "Brand Labels",
    supplier: "MaeKnit Labels | Woven Cotton",
    quantity: "1,000 pcs",
    leadTime: "2 days",
    payment: "Paid",
    status: "Delivered",
  },
  {
    name: "Packaging Materials",
    supplier: "Eco Pack Solutions | Recycled Poly Bags",
    quantity: "1,000 pcs",
    leadTime: "1 day",
    payment: "Paid",
    status: "Delivered",
  },
]

export default function InProgressDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState<"project" | "qc">("project")

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <div className="flex">
        <Sidebar activeItem="in-progress" />
        <main className="flex-1 p-6">
          <div className="mb-6 flex items-center space-x-4">
            <Link href="/in-progress" className="text-neutral-600 hover:text-neutral-800">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-2xl text-neutral-900 mb-1">Cashmere Crew Neck - CCN-001</h1>
              <p className="text-neutral-600">Project details and quality control</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-6">
            <div className="border-b border-neutral-200">
              <nav className="flex space-x-8">
                <button
                  onClick={() => setActiveTab("project")}
                  className={`border-b-2 pb-2 px-1 text-sm ${
                    activeTab === "project"
                      ? "border-neutral-900 text-neutral-900"
                      : "border-transparent text-neutral-600 hover:text-neutral-800"
                  }`}
                >
                  Project
                </button>
                <button
                  onClick={() => setActiveTab("qc")}
                  className={`border-b-2 pb-2 px-1 text-sm ${
                    activeTab === "qc"
                      ? "border-neutral-900 text-neutral-900"
                      : "border-transparent text-neutral-600 hover:text-neutral-800"
                  }`}
                >
                  Quality Control
                </button>
              </nav>
            </div>
          </div>

          {activeTab === "project" && (
            <div className="space-y-6">
              {/* Downloads */}
              <div className="bg-white rounded-lg border border-neutral-200 p-6">
                <h3 className="text-lg text-neutral-900 mb-4">Downloads</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border border-neutral-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="bg-neutral-100 p-2 rounded">
                          <svg
                            className="w-5 h-5 text-neutral-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-neutral-900 text-sm font-medium">Machine Program</h4>
                          <p className="text-xs text-neutral-600">CCN-001_Program.stoll</p>
                        </div>
                      </div>
                      <Button size="sm" className="bg-neutral-600 text-white hover:bg-neutral-700">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="border border-neutral-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="bg-neutral-100 p-2 rounded">
                          <svg
                            className="w-5 h-5 text-neutral-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-neutral-900 text-sm font-medium">Calibration</h4>
                          <p className="text-xs text-neutral-600">CCN-001_Calibration.pdf</p>
                        </div>
                      </div>
                      <Button size="sm" className="bg-neutral-600 text-white hover:bg-neutral-700">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="border border-neutral-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="bg-neutral-100 p-2 rounded">
                          <svg
                            className="w-5 h-5 text-neutral-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-neutral-900 text-sm font-medium">CAD Files</h4>
                          <p className="text-xs text-neutral-600">CCN-001_CAD.zip</p>
                        </div>
                      </div>
                      <Button size="sm" className="bg-neutral-600 text-white hover:bg-neutral-700">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Materials & Components */}
              <div className="bg-white rounded-lg border border-neutral-200 p-6">
                <h3 className="text-lg text-neutral-900 mb-4">Materials & Components</h3>
                <div className="space-y-4">
                  {materials.map((material, index) => (
                    <div key={index} className="border border-neutral-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="text-neutral-900 mb-1 font-medium">{material.name}</h4>
                          <p className="text-sm text-neutral-600">{material.supplier}</p>
                        </div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            material.status === "Delivered"
                              ? "bg-neutral-100 text-neutral-800"
                              : material.status === "In Transit"
                                ? "bg-neutral-100 text-neutral-800"
                                : "bg-neutral-100 text-neutral-800"
                          }`}
                        >
                          {material.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-neutral-600">Quantity:</span>
                          <div className="text-neutral-900">{material.quantity}</div>
                        </div>
                        <div>
                          <span className="text-neutral-600">Lead Time:</span>
                          <div className="text-neutral-900">{material.leadTime}</div>
                        </div>
                        <div>
                          <span className="text-neutral-600">Payment:</span>
                          <div className="text-neutral-600">{material.payment}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "qc" && (
            <div className="bg-white rounded-lg border border-neutral-200 p-6">
              <h3 className="text-lg text-neutral-900 mb-6">Quality Control Measurements</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-neutral-900 mb-4">Measurement Points</h4>
                  <div className="space-y-4">
                    {[
                      "HPS (High Point Shoulder)",
                      "LPS (Low Point Shoulder)",
                      "Neck Width",
                      "Shoulder Width",
                      "Armhole Straight",
                    ].map((measurement, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-neutral-200">
                        <span className="text-neutral-700">{measurement}</span>
                        <div className="flex items-center space-x-2">
                          <input
                            type="text"
                            className="w-20 px-2 py-1 border border-neutral-300 rounded text-sm"
                            placeholder="cm"
                          />
                          <svg
                            className={`w-5 h-5 ${index === 0 || index === 2 ? "text-neutral-500" : "text-neutral-300"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-neutral-900 mb-4">Additional Measurements</h4>
                  <div className="space-y-4">
                    {["Bicep", "Sleeve Length", "Sleeve Cuff", "Bottom Cuff"].map((measurement, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-neutral-200">
                        <span className="text-neutral-700">{measurement}</span>
                        <div className="flex items-center space-x-2">
                          <input
                            type="text"
                            className="w-20 px-2 py-1 border border-neutral-300 rounded text-sm"
                            placeholder="cm"
                          />
                          <svg className="w-5 h-5 text-neutral-300" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-neutral-600">Progress: 2 of 9 measurements completed</div>
                  <div className="flex space-x-3">
                    <Button variant="outline">Save Draft</Button>
                    <Button className="bg-neutral-600 text-white hover:bg-neutral-700">Submit QC Report</Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
