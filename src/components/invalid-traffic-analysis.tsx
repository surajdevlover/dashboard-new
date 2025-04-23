"use client";

// import { useTheme } from "@/components/theme-provider";
import {
  // Table,
  // TableBody,
  // TableCell,
  // TableHead,
  // TableHeader,
  // TableRow,
} from "@/components/ui/table";
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

// Bot Behavior data
const botBehaviorData = [
  { name: "Desktop", value: 2.0, color: "#0f5387" },
  { name: "Mobile", value: 5.9, color: "#f97316" },
];

// Repeat IPs data
const repeatIpsData = [
  { 
    name: "2409:40f0:dc:8e93:8000::", 
    value: 212, 
    type: "Total Event",
    index: 3 
  },
  { 
    name: "2401:4900:6401:8fa4:7e0:bcb4:43b1:6821", 
    value: 196, 
    type: "Total Visit",
    index: 2 
  },
  { 
    name: "2409:4065:5cb:10:b7:1c:a6ae:397d:cf892", 
    value: 184, 
    type: "Total Event",
    index: 1 
  },
  { 
    name: "2401:4900:3de9:aca5:8c36:18fff:7f7f:8b", 
    value: 142, 
    type: "Total Visit",
    index: 2 
  },
  { 
    name: "2409:40a4:6d:692:6020:fcff:fec0:4737", 
    value: 128, 
    type: "Total Event",
    index: 4 
  },
  { 
    name: "2409:40a4:5b:e198:9fe6:4d8a:410f:970", 
    value: 105, 
    type: "Total Visit",
    index: 3 
  },
  { 
    name: "2409:40f0:dc:8e93:8000::", 
    value: 98, 
    type: "Total Visit",
    index: 1 
  },
  { 
    name: "2401:4900:6401:8fa4:7e0:bcb4:43b1:6821", 
    value: 93, 
    type: "Total Event",
    index: 1 
  },
];

// Hardware Concurrency data
const hwConcurrencyData = [
  { name: "HC 192", mobile: 82, desktop: 18 },
  { name: "HC 128", mobile: 99, desktop: 1 },
  { name: "HC 72", mobile: 20, desktop: 80 },
  { name: "HC 9", mobile: 94, desktop: 6 },
  { name: "HC 3", mobile: 98, desktop: 2 },
  { name: "HC 1", mobile: 96, desktop: 4 },
];

// Device signature data
const deviceSignatureData = [
  {
    id: "d5120b0d4d3593dd16fb7920ea3357b",
    publisher: "Google Discovery",
    subPublisher: "PG",
    visits: 50
  },
  {
    id: "0cfc3c1eeb751122858f8bababbb9836",
    publisher: "Google Search",
    subPublisher: "CPC",
    visits: 14
  },
  {
    id: "bcd8a0d783fa45192444408893c34b15",
    publisher: "Google Search",
    subPublisher: "CPC",
    visits: 12
  },
  {
    id: "6bc5cd42b02895e3fc234aa27b5f54d",
    publisher: "Google Discovery",
    subPublisher: "PG",
    visits: 12
  },
  {
    id: "8bf12abd3ee6959508178f610c894",
    publisher: "Google Search",
    subPublisher: "CPC",
    visits: 10
  },
  {
    id: "279c892b8b59fc7f8cc984cbf57039a",
    publisher: "Google Search",
    subPublisher: "CPC",
    visits: 10
  }
];

export function InvalidTrafficAnalysis() {
  // const { darkMode } = useTheme();
  
  return (
    <div className="border border-gray-300 rounded-md bg-white">
      {/* Header */}
      <div className="bg-gray-100 py-2 px-4 border-b border-gray-300 text-center">
        <h2 className="text-lg font-semibold text-gray-800">Invalid Traffic (SIVT)</h2>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-2 bg-white">
        <div className="px-4 py-2 border-r border-gray-300">
          <span className="font-semibold text-gray-800">Repeat User: 8%</span>
        </div>
        <div className="px-4 py-2">
          <span className="font-semibold text-gray-800">Suspicious Behaviour: 4%</span>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-2 border-t border-gray-300">
        {/* Left Column */}
        <div className="border-r border-gray-300 flex flex-col justify-between h-full">
          {/* Device Signature Table */}
          <div>
            <table className="w-full">
              <thead className="bg-gray-200">
                <tr>
                  <th className="text-xs p-2 font-semibold text-gray-800 border-b border-gray-300 text-center">Device Signature</th>
                  <th className="text-xs p-2 font-semibold text-gray-800 border-b border-gray-300 text-center">Publisher Name</th>
                  <th className="text-xs p-2 font-semibold text-gray-800 border-b border-gray-300 text-center">Sub Publisher</th>
                  <th className="text-xs p-2 font-semibold text-gray-800 border-b border-gray-300 text-center">Visit</th>
                </tr>
              </thead>
              <tbody>
                {deviceSignatureData.map((item, index) => (
                  <tr key={index} className="bg-white border-b border-gray-300">
                    <td className="text-xs p-2 font-mono text-center text-gray-800">{item.id}</td>
                    <td className="text-xs p-2 text-center font-medium text-gray-800">{item.publisher}</td>
                    <td className="text-xs p-2 text-center text-gray-800">{item.subPublisher}</td>
                    <td className="text-xs p-2 text-center text-gray-800">{item.visits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* IP Repeat Header */}
          <div className="py-2 px-4 border-t border-gray-300 bg-white">
            <span className="font-semibold text-gray-800">IP Repeat: 7%</span>
          </div>
          
          {/* Repeat IPs Chart */}
          <div className="border border-gray-300 rounded-sm m-2">
            <div className="p-2">
              <div className="text-center font-semibold text-gray-700 mb-2">Repeat IPs</div>
              <div className="h-[225px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={repeatIpsData}
                    layout="vertical"
                    margin={{
                      top: 5,
                      right: 30,
                      left: 190,
                      bottom: 20,
                    }}
                    barSize={8}
                    barGap={6}
                  >
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={true} stroke="#e5e7eb" />
                    <XAxis 
                      type="number" 
                      tick={{ fontSize: 10 }} 
                      stroke="#6b7280" 
                      domain={[0, 250]}
                      ticks={[0, 50, 100, 150, 200, 250]}
                    />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      tick={{ fontSize: 9, fontFamily: 'monospace' }} 
                      stroke="#6b7280" 
                      width={185}
                      tickFormatter={(value) => value.substring(0, 36)}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#fff",
                        border: "1px solid #e5e7eb",
                        borderRadius: "4px",
                        fontSize: "11px"
                      }}
                      formatter={(value, name, props) => [value, props.payload.type]}
                    />
                    <Legend 
                      payload={[
                        { value: 'Total Event', type: 'square', color: '#FF8042' },
                        { value: 'Total Visit', type: 'square', color: '#9c27b0' }
                      ]}
                      layout="horizontal" 
                      verticalAlign="bottom" 
                      align="center"
                      wrapperStyle={{ paddingTop: "10px" }}
                      iconSize={8}
                    />
                    
                    {/* Index numbers */}
                    {repeatIpsData.map((entry, index) => (
                      <text
                        key={`index-${index}`}
                        x={-183}
                        y={index * 28 + 20}
                        textAnchor="start"
                        dominantBaseline="middle"
                        fill="#6b7280"
                        fontSize={12}
                        fontWeight="bold"
                      >
                        {entry.index}
                      </text>
                    ))}
                    
                    {/* Value labels */}
                    {repeatIpsData.map((entry, index) => (
                      <text
                        key={`label-${index}`}
                        x={entry.value + 5}
                        y={index * 28 + 20}
                        textAnchor="start"
                        dominantBaseline="middle"
                        fill="#6b7280"
                        fontSize={10}
                      >
                        {entry.value}
                      </text>
                    ))}
                    
                    <Bar 
                      dataKey="value" 
                      fill="#9c27b0"
                      name="Data"
                      isAnimationActive={false}
                      shape={(props: any) => {
                        const { x, y, width, height, payload } = props;
                        const fill = payload.type === "Total Event" ? "#FF8042" : "#9c27b0";
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
        
        {/* Right Column */}
        <div>
          {/* Top Section - Warning Boxes and Pie Chart */}
          <div className="grid grid-cols-2 gap-0 p-0 bg-white border-b border-gray-300">
            {/* Warning Boxes */}
            <div className="p-4">
              <div className="border border-gray-300 mb-4">
                <div className="bg-yellow-400 py-1">
                  <div className="text-center font-bold text-sm text-black">Mouse Movement: FALSE</div>
                </div>
                <div className="py-2 px-2 text-center text-xs text-gray-700">
                  User has NOT interacted with the website.
                </div>
              </div>
              
              <div className="border border-gray-300 mb-4">
                <div className="bg-yellow-400 py-1">
                  <div className="text-center font-bold text-sm text-black">Touch Support: FALSE</div>
                </div>
                <div className="py-2 px-2 text-center text-xs text-gray-700">
                  User has NOT interacted with the website.
                </div>
              </div>
              
              <div className="border border-gray-300">
                <div className="bg-yellow-400 py-1">
                  <div className="text-center font-bold text-sm text-black">HasFocus = FALSE</div>
                </div>
                <div className="py-2 px-2 text-center text-xs text-gray-700">
                  Page is not opening in the Active tab.
                </div>
              </div>
            </div>
            
            {/* Bot Behaviour Pie Chart */}
            <div className="border-l border-gray-300 p-4">
              <div className="border border-gray-300">
                <div className="p-3">
                  <div className="text-sm font-semibold text-center mb-3 text-gray-700">Bot Behaviour %</div>
                  <div className="h-[180px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={botBehaviorData}
                          innerRadius={0}
                          outerRadius={65}
                          paddingAngle={0}
                          fill="#8884d8"
                          dataKey="value"
                          nameKey="name"
                          labelLine={false}
                          label={({ cx, cy, midAngle, innerRadius, outerRadius, index, value }) => {
                            const RADIAN = Math.PI / 180;
                            const radius = 25 + innerRadius + (outerRadius - innerRadius);
                            const x = cx + radius * Math.cos(-midAngle * RADIAN);
                            const y = cy + radius * Math.sin(-midAngle * RADIAN);
                            
                            return (
                              <text 
                                x={x} 
                                y={y} 
                                fill={botBehaviorData[index].color}
                                textAnchor={x > cx ? 'start' : 'end'} 
                                dominantBaseline="central"
                                fontWeight="bold"
                                fontSize={12}
                              >
                                {value}%
                              </text>
                            );
                          }}
                        >
                          {botBehaviorData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Legend 
                          layout="horizontal" 
                          verticalAlign="bottom"
                          align="center"
                          wrapperStyle={{ 
                            paddingTop: "10px",
                            fontSize: "11px"
                          }}
                          iconSize={8}
                          iconType="square"
                          formatter={(value, entry, index) => {
                            return (
                              <span style={{ marginRight: 10 }}>
                                <span style={{ color: index === 0 ? "#0f5387" : "#f97316" }}>■</span> {value}
                              </span>
                            );
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Server Farm Header */}
          <div className="py-2 px-4 border-b border-gray-300 bg-white">
            <span className="font-semibold text-gray-800">Server Farm: 3%</span>
          </div>
          
          {/* Hardware Concurrency Chart */}
          <div className="border border-gray-300 m-0">
            <div className="p-3">
              <div className="text-center font-semibold text-gray-700 mb-3">Hardware Concurrency %</div>
              <div className="h-[230px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={hwConcurrencyData}
                    layout="vertical"
                    margin={{
                      top: 5,
                      right: 35,
                      left: 40,
                      bottom: 20,
                    }}
                    barSize={15}
                    barGap={0}
                  >
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={true} stroke="#e5e7eb" />
                    <XAxis 
                      type="number" 
                      tick={{ fontSize: 10 }} 
                      stroke="#6b7280" 
                      domain={[0, 100]}
                      tickFormatter={(value) => `${value}%`}
                      ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
                    />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      tick={{ fontSize: 10 }} 
                      stroke="#6b7280" 
                      width={45}
                      axisLine={true}
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
                      wrapperStyle={{ paddingTop: "10px" }}
                      iconSize={8}
                      iconType="square"
                    />
                    
                    {/* Mobile Bar */}
                    <Bar 
                      dataKey="mobile" 
                      name="Mobile" 
                      fill="#FF8042" 
                      radius={[0, 0, 0, 0]} 
                    />
                    
                    {/* Desktop Bar */}
                    <Bar 
                      dataKey="desktop" 
                      name="Desktop" 
                      fill="#0088FE" 
                      radius={[0, 0, 0, 0]} 
                    />
                    
                    {/* Percentage Labels */}
                    {hwConcurrencyData.map((entry, index) => (
                      <g key={`labels-${index}`}>
                        {/* Mobile label */}
                        {entry.mobile >= 15 && (
                          <text
                            x={entry.mobile / 2}
                            y={index * 38 + 27}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="white"
                            fontSize={10}
                          >
                            {entry.mobile}%
                          </text>
                        )}
                        
                        {/* Desktop label */}
                        {entry.desktop >= 15 && (
                          <text
                            x={entry.mobile + (entry.desktop / 2)}
                            y={index * 38 + 27}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="white"
                            fontSize={10}
                          >
                            {entry.desktop}%
                          </text>
                        )}
                        
                        {/* Right aligned percentage */}
                        <text
                          x={103}
                          y={index * 38 + 27}
                          textAnchor="start"
                          dominantBaseline="middle"
                          fill="black"
                          fontSize={10}
                        >
                          {`${entry.mobile}%`}
                        </text>
                      </g>
                    ))}
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 