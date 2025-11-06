"use client"

import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function MetricsPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <div className="flex">
        <Sidebar activeItem="metrics" />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h2 className="text-2xl text-neutral-900">My Metrics</h2>
            <p className="text-neutral-600 mt-1">Manage your factory operational and cost metrics</p>
          </div>

          <div className="space-y-6">
            {/* Contact Person */}
            <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
              <h3 className="text-lg text-neutral-900 mb-4">Contact Person</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label className="text-sm text-neutral-600 mb-2">Name</Label>
                  <Input placeholder="Enter name" />
                </div>
                <div>
                  <Label className="text-sm text-neutral-600 mb-2">Phone Number</Label>
                  <Input placeholder="Enter phone" />
                </div>
                <div>
                  <Label className="text-sm text-neutral-600 mb-2">Email</Label>
                  <Input type="email" placeholder="Enter email" />
                </div>
              </div>
            </div>

            {/* Work Center Cost */}
            <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
              <h3 className="text-lg text-neutral-900 mb-4">Work Center Cost (USD per min)</h3>
              <div className="grid grid-cols-4 gap-4">
                {[
                  "Knitting",
                  "Hand Finish",
                  "Linking",
                  "Washing",
                  "Drying",
                  "Steaming",
                  "Button",
                  "Labeling",
                  "Care Label",
                  "QC",
                  "Packaging",
                ].map((item) => (
                  <div key={item}>
                    <Label className="text-sm text-neutral-600 mb-2">{item}</Label>
                    <Input type="number" step="0.01" placeholder="0.00" />
                  </div>
                ))}
              </div>
            </div>

            {/* Operations Times */}
            <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
              <h3 className="text-lg text-neutral-900 mb-4">Operations Times (min)</h3>
              <div className="grid grid-cols-4 gap-4">
                {[
                  "Hand Finish (average)",
                  "Linking (average)",
                  "Washing Regular",
                  "Washing Cashmere",
                  "Drying (average)",
                  "Steaming (average)",
                  "Labeling (per label)",
                  "Quality Control",
                  "Packaging (average)",
                ].map((item) => (
                  <div key={item}>
                    <Label className="text-sm text-neutral-600 mb-2">{item}</Label>
                    <Input type="number" placeholder="0" />
                  </div>
                ))}
              </div>
            </div>

            {/* Machine Inventory */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
                <h3 className="text-lg text-neutral-900 mb-4">Knitting Machine Inventory</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm text-neutral-600 mb-2">Gauge</Label>
                      <select className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-neutral-900">
                        <option>1.5 gg</option>
                        <option>3 gg</option>
                        <option>5 gg</option>
                        <option>7 gg</option>
                        <option>12 gg</option>
                        <option>14 gg</option>
                        <option>16 gg</option>
                        <option>18 gg</option>
                      </select>
                    </div>
                    <div>
                      <Label className="text-sm text-neutral-600 mb-2">Quantity</Label>
                      <Input type="number" placeholder="0" />
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    + Add Machine
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
                <h3 className="text-lg text-neutral-900 mb-4">Linker Inventory</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm text-neutral-600 mb-2">Gauge</Label>
                      <select className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-neutral-900">
                        <option>1.5 gg</option>
                        <option>3 gg</option>
                        <option>5 gg</option>
                        <option>7 gg</option>
                        <option>12 gg</option>
                        <option>14 gg</option>
                        <option>16 gg</option>
                        <option>18 gg</option>
                      </select>
                    </div>
                    <div>
                      <Label className="text-sm text-neutral-600 mb-2">Quantity</Label>
                      <Input type="number" placeholder="0" />
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    + Add Linker
                  </Button>
                </div>
              </div>
            </div>

            {/* Equipment */}
            <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
              <h3 className="text-lg text-neutral-900 mb-4">Wash, Dry & Steam Equipment</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label className="text-sm text-neutral-600 mb-2">Washing Machine Type</Label>
                  <Input placeholder="Enter machine type" />
                </div>
                <div>
                  <Label className="text-sm text-neutral-600 mb-2">Drying Machine Type</Label>
                  <Input placeholder="Enter machine type" />
                </div>
                <div>
                  <Label className="text-sm text-neutral-600 mb-2">Steam Table</Label>
                  <Input placeholder="Enter steam table type" />
                </div>
              </div>
            </div>

            {/* Production Queue */}
            <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
              <h3 className="text-lg text-neutral-900 mb-4">Production Queue & Duration</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm text-neutral-600 mb-2">Queue Waiting Time</Label>
                  <select className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-neutral-900">
                    <option>2-3 days</option>
                    <option>2 weeks</option>
                    <option>1 month</option>
                  </select>
                </div>
                <div>
                  <Label className="text-sm text-neutral-600 mb-2">Production Start-to-Finish</Label>
                  <select className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-neutral-900">
                    <option>2 weeks</option>
                    <option>1 month</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Margins & MOQs */}
            <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
              <h3 className="text-lg text-neutral-900 mb-4">Margins & MOQs</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <Label className="text-sm text-neutral-600 mb-2">Desired Margin (%)</Label>
                  <Input type="number" placeholder="0" />
                </div>
                <div>
                  <Label className="text-sm text-neutral-600 mb-2">Lowest Margin (%)</Label>
                  <Input type="number" placeholder="0" />
                </div>
              </div>
              <div>
                <Label className="text-sm text-neutral-600 mb-2">MOQ Brackets</Label>
                <div className="grid grid-cols-4 gap-2">
                  {["1-10 ", "10-25", "25-100", "100-250", "250-500", "500-1,000", "1,000-2,000", "2,000-5,000"].map(
                    (bracket) => (
                      <Input key={bracket} value={bracket} readOnly className="text-center" />
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Machine Program */}
            <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
              <h3 className="text-lg text-neutral-900 mb-4">Preferred Machine Program</h3>
              <div className="flex space-x-6">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-neutral-700">Stoll</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-neutral-700">Shima</span>
                </label>
              </div>
            </div>

            {/* Other Information */}
            <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
              <h3 className="text-lg text-neutral-900 mb-4">Other Information</h3>
              <div className="space-y-4">
                <div>
                  <Label className="text-sm text-neutral-600 mb-2">Do you do intarsia in-house?</Label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input type="radio" name="intarsia" className="mr-2" />
                      <span className="text-neutral-700">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="intarsia" className="mr-2" />
                      <span className="text-neutral-700">No</span>
                    </label>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-neutral-700">Offer development samples</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-neutral-700">Offer pre-production samples</span>
                  </label>
                </div>
                <div>
                  <Label className="text-sm text-neutral-600 mb-2">Pre-production sample pricing</Label>
                  <select className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-neutral-900">
                    <option>Same as dev</option>
                    <option>2× prod price</option>
                    <option>Custom input</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end space-x-3">
            <Button variant="outline">Cancel</Button>
            <Button className="bg-neutral-900 text-white hover:bg-neutral-800">Save Metrics</Button>
          </div>
        </main>
      </div>
    </div>
  )
}
