"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart, 
  Line
} from "recharts";

// Iframe Size data
const iframeData = [
  { name: "NO:363,18", desktop: 10, mobile: 90 },
  { name: "NO:414,17", desktop: 20, mobile: 80 },
  { name: "NO:393,17", desktop: 25, mobile: 75 },
  { name: "NO:393,14", desktop: 30, mobile: 70 },
  { name: "NO:393,16", desktop: 15, mobile: 85 },
  { name: "NO:0,0", desktop: 0, mobile: 100 },
];

// Line chart data
const lineChartData = [
  { name: '360', standard: 11, demandGen: 17 },
  { name: '800', standard: 8, demandGen: 2 },
  { name: '930', standard: 5, demandGen: 0 },
  { name: '844', standard: 4, demandGen: 0 },
  { name: '896', standard: 4, demandGen: 0 },
  { name: '375', standard: 4, demandGen: 0 },
  { name: '667', standard: 4, demandGen: 0 },
  { name: '412', standard: 3, demandGen: 0 },
  { name: '732', standard: 3, demandGen: 0 },
  { name: '414', standard: 3, demandGen: 0 },
  { name: '736', standard: 3, demandGen: 0 },
  { name: '320', standard: 0, demandGen: 0 },
  { name: '568', standard: 0, demandGen: 0 },
  { name: '375', standard: 0, demandGen: 0 },
  { name: '812', standard: 0, demandGen: 0 },
  { name: '384', standard: 0, demandGen: 0 },
  { name: '640', standard: 0, demandGen: 0 },
  { name: '412', standard: 0, demandGen: 0 },
  { name: '742', standard: 0, demandGen: 0 },
  { name: '360', standard: 0, demandGen: 2 },
  { name: '640', standard: 0, demandGen: 0 },
];

export function LowIntentUser() {
  return (
    <div className="border border-gray-300 rounded-sm bg-white">
      {/* Header */}
      <div className="bg-gray-100 py-2 px-4 border-b border-gray-300 text-center">
        <h2 className="text-lg font-semibold text-gray-800">Low Intent User</h2>
      </div>

      {/* Top Section with Warning Boxes */}
      <div className="grid grid-cols-2 bg-white border-b border-gray-300">
        {/* Left Column - Pop Under */}
        <div className="border-r border-gray-300">
          <div className="px-4 py-2">
            <span className="font-semibold text-gray-800">Pop Under: 5%</span>
          </div>
          <div className="grid grid-cols-2 gap-2 p-4">
            <div className="border border-gray-300 bg-white">
              <div className="bg-yellow-400 py-1 px-2">
                <div className="text-center font-bold text-xs">HasFocus = FALSE</div>
              </div>
              <div className="p-2">
                <div className="text-xs text-center">
                  Page is not opening in the Active tab.
                </div>
              </div>
            </div>
            
            <div className="border border-gray-300 bg-white">
              <div className="bg-yellow-400 py-1 px-2">
                <div className="text-center font-bold text-xs">17%</div>
              </div>
              <div className="p-2">
                <div className="text-xs text-center">
                  Height & Width of the browser window is small
                </div>
              </div>
            </div>

            <div className="border border-gray-300 bg-white">
              <div className="bg-yellow-400 py-1 px-2">
                <div className="text-center font-bold text-xs">Time Spent On Page: 0 sec</div>
              </div>
              <div className="p-2">
                <div className="text-xs text-center">
                  User has NOT interacted with the website.
                </div>
              </div>
            </div>
            
            <div className="border border-gray-300 bg-white">
              <div className="bg-yellow-400 py-1 px-2">
                <div className="text-center font-bold text-xs">Slide/Scroll/Touch: FALSE</div>
              </div>
              <div className="p-2">
                <div className="text-xs text-center">
                  User has NOT interacted with the website.
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column - Imperceptible Window */}
        <div>
          <div className="px-4 py-2">
            <span className="font-semibold text-gray-800">Imperceptible Window: 4%</span>
          </div>
          <div className="grid grid-cols-2 gap-2 p-4">
            <div className="border border-gray-300 bg-white">
              <div className="bg-yellow-400 py-1 px-2">
                <div className="text-center font-bold text-xs">HasFocus = FALSE</div>
              </div>
              <div className="p-2">
                <div className="text-xs text-center">
                  Page is not opening in the Active tab.
                </div>
              </div>
            </div>
            
            <div className="border border-gray-300 bg-white">
              <div className="bg-yellow-400 py-1 px-2">
                <div className="text-center font-bold text-xs">Has iframe: 0x0</div>
              </div>
              <div className="p-2">
                <div className="text-xs text-center">
                  Height & Width of the browser window is small
                </div>
              </div>
            </div>

            <div className="border border-gray-300 bg-white">
              <div className="bg-yellow-400 py-1 px-2">
                <div className="text-center font-bold text-xs">Time Spent On Page: 0 sec</div>
              </div>
              <div className="p-2">
                <div className="text-xs text-center">
                  User has NOT interacted with the website.
                </div>
              </div>
            </div>
            
            <div className="border border-gray-300 bg-white">
              <div className="bg-yellow-400 py-1 px-2">
                <div className="text-center font-bold text-xs">Slide/Scroll/Touch: FALSE</div>
              </div>
              <div className="p-2">
                <div className="text-xs text-center">
                  User has NOT interacted with the website.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-2 p-4 gap-4">
        {/* Left Column - Device Type and Line Chart */}
        <div className="bg-white border border-gray-300">
          <div className="font-semibold text-gray-800 mb-2 p-2">Device type: Mobile</div>
          <div className="h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={lineChartData}
                margin={{
                  top: 5,
                  right: 10,
                  left: 0,
                  bottom: 35,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 9 }}
                  stroke="#6b7280"
                  interval={0}
                  angle={-45}
                  textAnchor="end"
                />
                <YAxis 
                  tickCount={10}
                  domain={[0, 18]}
                  ticks={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18]}
                  tickFormatter={(value) => `${value}%`}
                  tick={{ fontSize: 9 }}
                  stroke="#6b7280"
                />
                <Tooltip 
                  formatter={(value) => [`${value}%`]}
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "4px",
                    fontSize: "10px"
                  }}
                />
                <Legend 
                  wrapperStyle={{
                    paddingTop: "5px", 
                    fontSize: "10px",
                    bottom: 0
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="standard" 
                  name="Standard"
                  stroke="#0f5888"
                  strokeWidth={2}
                  activeDot={{ r: 4 }}
                  dot={{ r: 2 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="demandGen" 
                  name="DemandGen"
                  stroke="#ea580c"
                  strokeWidth={2}
                  dot={{ r: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Right Column - iframe Size */}
        <div className="bg-white border border-gray-300">
          <div className="font-semibold text-gray-800 mb-2 text-right p-2">iframe Size</div>
          <div className="h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={iframeData}
                layout="vertical"
                margin={{
                  top: 5,
                  right: 10,
                  left: 65,
                  bottom: 35,
                }}
                barSize={20}
                barGap={0}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" horizontal={true} vertical={false} />
                <XAxis 
                  type="number" 
                  domain={[0, 100]}
                  tickFormatter={(value) => `${value}%`}
                  ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
                  tick={{ fontSize: 9 }} 
                  stroke="#6b7280"
                />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  tick={{ fontSize: 10 }} 
                  stroke="#6b7280"
                />
                <Tooltip
                  formatter={(value) => [`${value}%`]}
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "4px",
                    fontSize: "10px"
                  }}
                />
                <Legend 
                  layout="horizontal" 
                  verticalAlign="bottom" 
                  align="center"
                  wrapperStyle={{ 
                    paddingTop: "5px",
                    fontSize: "10px",
                    bottom: 0
                  }}
                />
                <Bar 
                  dataKey="desktop" 
                  name="Desktop" 
                  stackId="a" 
                  fill="#38bdf8"
                />
                <Bar 
                  dataKey="mobile" 
                  name="Mobile" 
                  stackId="a" 
                  fill="#f97316"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
} 