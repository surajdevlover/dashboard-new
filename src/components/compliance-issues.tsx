"use client";

import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// VPN Proxies data
const vpnProxiesData = [
  { name: "DCH", value: 93, color: "#6b21a8" },
  { name: "SES", value: 4, color: "#f97316" },
  { name: "VPN", value: 3, color: "#15803d" },
];

// Invalid Geo data
const invalidGeoData = [
  { name: "US", value: 58 },
  { name: "IN", value: 13 },
  { name: "AR", value: 12 },
  { name: "Others", value: 11 },
  { name: "FR", value: 6 },
];

export function ComplianceIssues() {
  return (
    <div className="border border-gray-300 rounded-sm bg-white">
      {/* Header */}
      <div className="bg-gray-100 py-2 px-4 border-b border-gray-300 text-center">
        <h2 className="text-lg font-semibold text-gray-800">Compliance Issues</h2>
      </div>

      {/* Headers */}
      <div className="grid grid-cols-2 bg-white">
        <div className="px-4 py-2 border-r border-gray-300">
          <span className="font-semibold text-gray-800">VPN Proxy (DCH): 3%</span>
        </div>
        <div className="px-4 py-2">
          <span className="font-semibold text-gray-800">Invalid Geo: 2%</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-2 border-t border-gray-300">
        {/* Left Column - VPN Proxies */}
        <div className="border-r border-gray-300">
          {/* VPN Proxies Chart */}
          <div className="border-gray-300 m-2 p-2">
            <div className="text-center font-semibold text-gray-700 mb-2">VPN Proxies %</div>
            <div className="h-[210px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={vpnProxiesData}
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={0}
                    dataKey="value"
                    nameKey="name"
                    startAngle={90}
                    endAngle={-270}
                    labelLine={false}
                    label={({ cx, cy, midAngle, innerRadius, outerRadius, /* percent, index, name, */ value }) => {
                      const RADIAN = Math.PI / 180;
                      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                      const x = cx + radius * Math.cos(-midAngle * RADIAN);
                      const y = cy + radius * Math.sin(-midAngle * RADIAN);
                      
                      return (
                        <text 
                          x={x} 
                          y={y} 
                          fill="white"
                          textAnchor="middle" 
                          dominantBaseline="central"
                          fontWeight="bold"
                          fontSize={12}
                        >
                          {value}%
                        </text>
                      );
                    }}
                  >
                    {vpnProxiesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend 
                    verticalAlign="bottom"
                    align="right"
                    layout="vertical"
                    iconType="square"
                    iconSize={10}
                    wrapperStyle={{ 
                      right: 0,
                      bottom: 0,
                      lineHeight: '24px',
                      fontSize: "12px"
                    }}
                    payload={[
                      { value: 'DCH', type: 'square', color: '#6b21a8' },
                      { value: 'SES', type: 'square', color: '#f97316' },
                      { value: 'VPN', type: 'square', color: '#15803d' }
                    ]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        {/* Right Column - Invalid Geo */}
        <div>
          {/* Invalid Geo Chart */}
          <div className="border-gray-300 m-2 p-2">
            <div className="text-center font-semibold text-gray-700 mb-2">Invalid Geo %</div>
            <div className="h-[210px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={invalidGeoData}
                  layout="vertical"
                  margin={{
                    top: 5,
                    right: 30,
                    left: 40,
                    bottom: 40,
                  }}
                  barSize={16}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={true} stroke="#e5e7eb" />
                  <XAxis 
                    type="number" 
                    domain={[0, 70]}
                    ticks={[0, 10, 20, 30, 40, 50, 60, 70]}
                    tick={{ fontSize: 10 }} 
                    tickFormatter={(value) => `${value}.0%`}
                    stroke="#6b7280"
                  />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    tick={{ fontSize: 10 }} 
                    stroke="#6b7280"
                    width={40}
                  />
                  <Tooltip
                    formatter={(value) => [`${value}%`]}
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e5e7eb",
                      borderRadius: "4px",
                      fontSize: "11px"
                    }}
                  />
                  <Legend 
                    layout="horizontal" 
                    verticalAlign="bottom" 
                    align="center"
                    wrapperStyle={{ 
                      paddingTop: "15px",
                      bottom: -15,
                      fontSize: "11px"
                    }}
                    iconType="square"
                    iconSize={10}
                    payload={[
                      { value: 'FR', type: 'square', color: '#f97316' },
                      { value: 'Others', type: 'square', color: '#9ca3af' },
                      { value: 'AR', type: 'square', color: '#fbbf24' },
                      { value: 'IN', type: 'square', color: '#3b82f6' },
                      { value: 'US', type: 'square', color: '#6b21a8' }
                    ]}
                  />
                  
                  <Bar 
                    dataKey="value" 
                    isAnimationActive={false}
                    shape={(props: any) => {
                      const { x, y, width, height, payload } = props;
                      let fill;
                      switch(payload.name) {
                        case "FR": fill = "#f97316"; break;
                        case "Others": fill = "#9ca3af"; break;
                        case "AR": fill = "#fbbf24"; break;
                        case "IN": fill = "#3b82f6"; break;
                        case "US": fill = "#6b21a8"; break;
                        default: fill = "#9ca3af";
                      }
                      return <rect x={x} y={y} width={width} height={height} fill={fill} />;
                    }}
                    radius={[0, 0, 0, 0]} 
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}