"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const visitData = [
  { name: "Geo Fraud", value: 170, percentage: 20, color: "#14b8a6" },
  { name: "Blacklisted Fraud", value: 170, percentage: 20, color: "#f97316" },
  { name: "Pop Under", value: 80, percentage: 10, color: "#eab308" },
  { name: "Device Spoofing", value: 190, percentage: 22, color: "#3b82f6" },
  { name: "VPN Proxy", value: 70, percentage: 10, color: "#f59e0b" },
];

const eventData = [
  { name: "Geo Fraud", value: 170, percentage: 20, color: "#14b8a6" },
  { name: "Blacklisted Fraud", value: 170, percentage: 20, color: "#f97316" },
  { name: "Pop Under", value: 80, percentage: 10, color: "#eab308" },
  { name: "Device Spoofing", value: 190, percentage: 22, color: "#3b82f6" },
  { name: "VPN Proxy", value: 70, percentage: 10, color: "#f59e0b" },
];

export function TrafficDonutCharts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <Card className="bg-white border-gray-200 shadow-sm">
        <CardHeader className="flex items-center justify-between pb-2">
          <CardTitle className="text-lg">Visit Traffic</CardTitle>
          <div className="flex items-center gap-2">
            <select className="text-sm border border-gray-200 rounded px-2 py-1 bg-white">
              <option>Google</option>
            </select>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="flex items-start gap-6">
            <div className="relative flex-shrink-0">
              <div className="h-[150px] w-[150px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={visitData}
                      cx="50%"
                      cy="50%"
                      innerRadius={45}
                      outerRadius={70}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {visitData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#fff",
                        border: "1px solid #e5e7eb",
                        borderRadius: "4px",
                      }}
                      formatter={(value) => [`${value}K`]}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold">570K</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-grow space-y-2">
              {visitData.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-gray-700">
                    {item.name} - {item.value}K ({item.percentage}%)
                  </span>
                </div>
              ))}
              <div className="flex justify-end mt-auto pt-2">
                <a href="#" className="text-blue-500 text-xs">
                  View all
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white border-gray-200 shadow-sm">
        <CardHeader className="flex items-center justify-between pb-2">
          <CardTitle className="text-lg">Event Traffic</CardTitle>
          <div className="flex items-center gap-2">
            <select className="text-sm border border-gray-200 rounded px-2 py-1 bg-white">
              <option>Google</option>
            </select>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="flex items-start gap-6">
            <div className="relative flex-shrink-0">
              <div className="h-[150px] w-[150px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={eventData}
                      cx="50%"
                      cy="50%"
                      innerRadius={45}
                      outerRadius={70}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {eventData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#fff",
                        border: "1px solid #e5e7eb",
                        borderRadius: "4px",
                      }}
                      formatter={(value) => [`${value}K`]}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold">480K</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-grow space-y-2">
              {eventData.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-gray-700">
                    {item.name} - {item.value}K ({item.percentage}%)
                  </span>
                </div>
              ))}
              <div className="flex justify-end mt-auto pt-2">
                <a href="#" className="text-blue-500 text-xs">
                  View all
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 