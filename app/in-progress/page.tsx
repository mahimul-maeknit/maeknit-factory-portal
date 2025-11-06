"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Clock, Circle } from "lucide-react"

const projects = [
  {
    id: "VC-2025-001",
    name: "Vintage Crewneck",
    styleCode: "VC-2025-001",
    progress: 65,
    dueDate: "Mar 15, 2025",
    revenue: 2450,
    status: "On Track",
    stages: [
      { label: "Knitting Complete", status: "complete" },
      { label: "Linking In Progress", status: "progress" },
      { label: "Washing Pending", status: "pending" },
    ],
  },
  {
    id: "CD-2025-007",
    name: "Cardigan",
    styleCode: "CD-2025-007",
    progress: 35,
    dueDate: "Mar 10, 2025",
    revenue: 1890,
    status: "Behind",
    stages: [
      { label: "Knitting In Progress", status: "progress" },
      { label: "Linking Pending", status: "pending" },
      { label: "Washing Pending", status: "pending" },
    ],
  },
  {
    id: "MT-2025-003",
    name: "4x1 Merino Top",
    styleCode: "MT-2025-003",
    progress: 90,
    dueDate: "Mar 20, 2025",
    revenue: 3200,
    status: "QC Phase",
    stages: [
      { label: "Production Complete", status: "complete" },
      { label: "Quality Control", status: "progress" },
      { label: "Packaging Pending", status: "pending" },
    ],
  },
  {
    id: "VT-2025-012",
    name: "Vest",
    styleCode: "VT-2025-012",
    progress: 45,
    dueDate: "Mar 25, 2025",
    revenue: 1650,
    status: "On Track",
    stages: [
      { label: "Knitting Complete", status: "complete" },
      { label: "Linking Complete", status: "complete" },
      { label: "Washing In Progress", status: "progress" },
    ],
  },
  {
    id: "SC-2025-008",
    name: "Scarf",
    styleCode: "SC-2025-008",
    progress: 15,
    dueDate: "Apr 5, 2025",
    revenue: 980,
    status: "Materials",
    stages: [
      { label: "Awaiting Materials", status: "progress" },
      { label: "Knitting Pending", status: "pending" },
      { label: "Finishing Pending", status: "pending" },
    ],
  },
  {
    id: "BN-2025-015",
    name: "Beanie",
    styleCode: "BN-2025-015",
    progress: 75,
    dueDate: "Mar 18, 2025",
    revenue: 1320,
    status: "On Track",
    stages: [
      { label: "Knitting Complete", status: "complete" },
      { label: "Washing Complete", status: "complete" },
      { label: "Steaming In Progress", status: "progress" },
    ],
  },
  {
    id: "BL-2025-019",
    name: "Blanket",
    styleCode: "BL-2025-019",
    progress: 55,
    dueDate: "Mar 30, 2025",
    revenue: 2850,
    status: "On Track",
    stages: [
      { label: "Knitting Complete", status: "complete" },
      { label: "Linking In Progress", status: "progress" },
      { label: "Finishing Pending", status: "pending" },
    ],
  },
  {
    id: "HD-2025-021",
    name: "Hoodie",
    styleCode: "HD-2025-021",
    progress: 20,
    dueDate: "Apr 2, 2025",
    revenue: 2100,
    status: "Starting",
    stages: [
      { label: "Knitting In Progress", status: "progress" },
      { label: "Linking Pending", status: "pending" },
      { label: "Washing Pending", status: "pending" },
    ],
  },
]

export default function InProgressPage() {
  const activeProjects = projects.length
  const dueThisWeek = projects.filter(
    (p) => new Date(p.dueDate) < new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  ).length
  const behindSchedule = projects.filter((p) => p.status === "Behind").length
  const totalValue = projects.reduce((sum, p) => sum + p.revenue, 0)

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <div className="flex">
        <Sidebar activeItem="in-progress" />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h2 className="text-2xl text-neutral-900">In Progress Projects</h2>
            <p className="text-neutral-600 mt-1">Monitor and manage active production projects</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl text-neutral-900">{activeProjects}</p>
                  <p className="text-sm text-neutral-500">Active Projects</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl text-neutral-900">{dueThisWeek}</p>
                  <p className="text-sm text-neutral-500">Due This Week</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl text-neutral-900">{behindSchedule}</p>
                  <p className="text-sm text-neutral-500">Behind Schedule</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl text-neutral-900">${(totalValue / 1000).toFixed(1)}K</p>
                  <p className="text-sm text-neutral-500">Total Value</p>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-neutral-300 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-white">Style Image</span>
                  </div>
                  <span className="px-2 py-1 bg-neutral-100 text-neutral-800 text-xs rounded-full">
                    {project.status}
                  </span>
                </div>
                <h3 className="text-lg text-neutral-900 mb-2">{project.name}</h3>
                <p className="text-sm text-neutral-600 mb-3">{project.styleCode}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500">Progress</span>
                    <span className="text-neutral-900">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${project.status === "Behind" ? "bg-neutral-600" : "bg-neutral-900"}`}
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  <div>
                    <p className="text-neutral-500">Due Date</p>
                    <p className={project.status === "Behind" ? "text-neutral-600" : "text-neutral-900"}>
                      {project.dueDate}
                    </p>
                  </div>
                  <div>
                    <p className="text-neutral-500">Revenue</p>
                    <p className="text-neutral-900">${project.revenue.toLocaleString()}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {project.stages.map((stage, index) => (
                    <div key={index} className="flex items-center text-sm">
                      {stage.status === "complete" && <CheckCircle2 className="w-4 h-4 text-neutral-600 mr-2" />}
                      {stage.status === "progress" && <Clock className="w-4 h-4 text-neutral-400 mr-2" />}
                      {stage.status === "pending" && <Circle className="w-4 h-4 text-neutral-300 mr-2" />}
                      <span className={stage.status === "pending" ? "text-neutral-400" : "text-neutral-600"}>
                        {stage.label}
                      </span>
                    </div>
                  ))}
                </div>

                <Link href={`/in-progress/${project.id}`}>
                  <Button className="w-full bg-neutral-900 text-white hover:bg-neutral-800">View Details</Button>
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
