"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  // Legend,
} from "recharts";

// Data for Visit Traffic distribution
const visitData = [
  {
    name: "perfmax",
    behaviorFraud: 8.07,
    botDevice: 6.55,
    deviceSpoofing: 4.12,
    ipRepeat: 0.01,
    distributionFraud: 15.43,
    other: 0.99,
  },
  {
    name: "social",
    behaviorFraud: 5.18,
    botDevice: 7.65,
    deviceSpoofing: 10.45,
    ipRepeat: 4.91,
    distributionFraud: 0,
    other: 1,
  },
  {
    name: "google",
    behaviorFraud: 8.44,
    botDevice: 1.44,
    deviceSpoofing: 2.21,
    ipRepeat: 0,
    distributionFraud: 2.71,
    other: 0,
  },
  {
    name: "HustleX",
    behaviorFraud: 5.11,
    botDevice: 0.91,
    deviceSpoofing: 3.32,
    ipRepeat: 0,
    distributionFraud: 1.17,
    other: 0,
  },
  {
    name: "print",
    behaviorFraud: 0.21,
    botDevice: 0,
    deviceSpoofing: 0,
    ipRepeat: 0,
    distributionFraud: 0,
    other: 0,
  },
  {
    name: "dv360",
    behaviorFraud: 0.12,
    botDevice: 0,
    deviceSpoofing: 0,
    ipRepeat: 0,
    distributionFraud: 0,
    other: 0,
  },
  {
    name: "DV360",
    behaviorFraud: 0.05,
    botDevice: 0,
    deviceSpoofing: 0,
    ipRepeat: 0,
    distributionFraud: 0,
    other: 0,
  },
  {
    name: "dailyhunt",
    behaviorFraud: 0.05,
    botDevice: 0,
    deviceSpoofing: 0,
    ipRepeat: 0,
    distributionFraud: 0,
    other: 0,
  },
  {
    name: "GMB",
    behaviorFraud: 0.01,
    botDevice: 0,
    deviceSpoofing: 0,
    ipRepeat: 0,
    distributionFraud: 0,
    other: 0,
  },
  {
    name: "dealerpage",
    behaviorFraud: 0.01,
    botDevice: 0,
    deviceSpoofing: 0,
    ipRepeat: 0,
    distributionFraud: 0,
    other: 0,
  },
  {
    name: "indoMST",
    behaviorFraud: 0.01,
    botDevice: 0,
    deviceSpoofing: 0,
    ipRepeat: 0,
    distributionFraud: 0,
    other: 0,
  },
  {
    name: "yt",
    behaviorFraud: 0.01,
    botDevice: 0,
    deviceSpoofing: 0,
    ipRepeat: 0,
    distributionFraud: 0,
    other: 0,
  },
];

// Data for Event Traffic distribution
const eventData = [...visitData]; // Using the same data for example purposes

// Legend items for fraud categories
const fraudCategories = [
  { name: "Behavior Fraud", color: "#a855f7" },
  { name: "Bot Device", color: "#ef4444" },
  { name: "Device Spoofing", color: "#3b82f6" },
  { name: "IP Repeat", color: "#22c55e" },
  { name: "Distribution Fraud", color: "#16a34a" },
  { name: "Pop Under", color: "#eab308" },
  { name: "Not Fraud", color: "#f97316" },
  { name: "VPN Proxy", color: "#8b5cf6" },
  { name: "Timezone Mismatch", color: "#0ea5e9" },
  { name: "Server Farm", color: "#64748b" },
  { name: "Imperceptible Window", color: "#ec4899" },
  { name: "Geo Fraud", color: "#14b8a6" },
];

export function DistributionSection() {
  return (
    <div className="mt-6">
      <div className="bg-gray-100 border border-gray-200 py-2 px-4 rounded-sm text-center shadow-sm">
        <h2 className="text-lg font-semibold">Distribution by Publisher</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader className="pb-0">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-semibold text-purple-800">Distribution By Publisher</CardTitle>
              <div className="flex items-center gap-2">
                <button className="text-gray-500 p-1 hover:text-gray-700 border border-gray-200 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 14v1"/><path d="M9 8v1"/><path d="M15 14v1"/><path d="M15 8v1"/><path d="M9 12h6"/></svg>
                </button>
                <button className="text-gray-500 p-1 hover:text-gray-700 border border-gray-200 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </button>
                <button className="text-gray-500 p-1 hover:text-gray-700 border border-gray-200 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                </button>
              </div>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              SHOWING TOP 50 IN VISIT_OFA_FRAUD_SUB_CATEGORY AND TOP 14 IN VISIT_OFA_FRAUD_SUB_CATEGORY
            </div>
          </CardHeader>
          <CardContent className="py-2">
            <div className="flex justify-between mt-1 mb-3">
              <div className="text-xs font-semibold">publisher_name</div>
              <div className="text-xs font-semibold">Sub Category</div>
            </div>
            <div className="h-[380px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={visitData}
                  layout="vertical"
                  margin={{
                    top: 5,
                    right: 30,
                    left: 0,
                    bottom: 5,
                  }}
                  barSize={16}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" horizontal={true} vertical={false} />
                  <XAxis 
                    type="number" 
                    tick={{ fontSize: 10 }} 
                    stroke="#6b7280"
                    domain={[0, 40]}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    tick={{ fontSize: 10 }} 
                    stroke="#6b7280" 
                    width={80}
                  />
                  <Tooltip
                    formatter={(value) => [`${value}%`]}
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e5e7eb",
                      borderRadius: "4px",
                      fontSize: "12px",
                    }}
                  />
                  <Bar dataKey="behaviorFraud" stackId="a" fill="#a855f7" name="Behavior Fraud" />
                  <Bar dataKey="botDevice" stackId="a" fill="#ef4444" name="Bot Device" />
                  <Bar dataKey="deviceSpoofing" stackId="a" fill="#3b82f6" name="Device Spoofing" />
                  <Bar dataKey="ipRepeat" stackId="a" fill="#22c55e" name="IP Repeat" />
                  <Bar dataKey="distributionFraud" stackId="a" fill="#16a34a" name="Distribution Fraud" />
                  <Bar dataKey="other" stackId="a" fill="#f97316" name="Other" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {fraudCategories.slice(0, 8).map((category, index) => (
                <div key={index} className="flex items-center gap-1 text-xs">
                  <div className="h-3 w-3 rounded" style={{ backgroundColor: category.color }} />
                  <span>{category.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader className="pb-0">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-semibold text-purple-800">Distribution By Publisher</CardTitle>
              <div className="flex items-center gap-2">
                <button className="text-gray-500 p-1 hover:text-gray-700 border border-gray-200 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 14v1"/><path d="M9 8v1"/><path d="M15 14v1"/><path d="M15 8v1"/><path d="M9 12h6"/></svg>
                </button>
                <button className="text-gray-500 p-1 hover:text-gray-700 border border-gray-200 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </button>
                <button className="text-gray-500 p-1 hover:text-gray-700 border border-gray-200 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                </button>
              </div>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              SHOWING TOP 50 IN VISIT_OFA_FRAUD_SUB_CATEGORY AND TOP 14 IN VISIT_OFA_FRAUD_SUB_CATEGORY
            </div>
          </CardHeader>
          <CardContent className="py-2">
            <div className="flex justify-between mt-1 mb-3">
              <div className="text-xs font-semibold">publisher_name</div>
              <div className="text-xs font-semibold">Sub Category</div>
            </div>
            <div className="h-[380px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={eventData}
                  layout="vertical"
                  margin={{
                    top: 5,
                    right: 30,
                    left: 0,
                    bottom: 5,
                  }}
                  barSize={16}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" horizontal={true} vertical={false} />
                  <XAxis 
                    type="number" 
                    tick={{ fontSize: 10 }} 
                    stroke="#6b7280"
                    domain={[0, 40]}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    tick={{ fontSize: 10 }} 
                    stroke="#6b7280" 
                    width={80}
                  />
                  <Tooltip
                    formatter={(value) => [`${value}%`]}
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e5e7eb",
                      borderRadius: "4px",
                      fontSize: "12px",
                    }}
                  />
                  <Bar dataKey="behaviorFraud" stackId="a" fill="#a855f7" name="Behavior Fraud" />
                  <Bar dataKey="botDevice" stackId="a" fill="#ef4444" name="Bot Device" />
                  <Bar dataKey="deviceSpoofing" stackId="a" fill="#3b82f6" name="Device Spoofing" />
                  <Bar dataKey="ipRepeat" stackId="a" fill="#22c55e" name="IP Repeat" />
                  <Bar dataKey="distributionFraud" stackId="a" fill="#16a34a" name="Distribution Fraud" />
                  <Bar dataKey="other" stackId="a" fill="#f97316" name="Other" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {fraudCategories.slice(0, 8).map((category, index) => (
                <div key={index} className="flex items-center gap-1 text-xs">
                  <div className="h-3 w-3 rounded" style={{ backgroundColor: category.color }} />
                  <span>{category.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 