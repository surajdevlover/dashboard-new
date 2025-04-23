"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  ComposedChart,
} from "recharts";

// Calculate percentages for each data point
const data = [
  { date: "Jan 1", valid: 350, invalid: 150, total: 500, percentage: 30 },
  { date: "Jan 2", valid: 380, invalid: 140, total: 520, percentage: 25 },
  { date: "Jan 3", valid: 370, invalid: 130, total: 500, percentage: 20 },
  { date: "Jan 4", valid: 360, invalid: 120, total: 480, percentage: 15 },
  { date: "Jan 5", valid: 380, invalid: 140, total: 520, percentage: 10 },
  { date: "Jan 6", valid: 340, invalid: 130, total: 470, percentage: 12 },
  { date: "Jan 7", valid: 350, invalid: 120, total: 470, percentage: 14 },
  { date: "Jan 8", valid: 350, invalid: 120, total: 470, percentage: 15 },
  { date: "Jan 9", valid: 340, invalid: 110, total: 450, percentage: 16 },
  { date: "Jan 10", valid: 330, invalid: 110, total: 440, percentage: 18 },
  { date: "Jan 11", valid: 340, invalid: 110, total: 450, percentage: 19 },
  { date: "Jan 12", valid: 350, invalid: 120, total: 470, percentage: 21 },
  { date: "Jan 13", valid: 360, invalid: 130, total: 490, percentage: 22 },
  { date: "Jan 14", valid: 370, invalid: 140, total: 510, percentage: 23 },
  { date: "Jan 15", valid: 390, invalid: 150, total: 540, percentage: 25 },
  { date: "Jan 16", valid: 380, invalid: 140, total: 520, percentage: 20 },
  { date: "Jan 17", valid: 370, invalid: 130, total: 500, percentage: 15 },
  { date: "Jan 18", valid: 380, invalid: 140, total: 520, percentage: 10 },
  { date: "Jan 19", valid: 370, invalid: 130, total: 500, percentage: 12 },
  { date: "Jan 20", valid: 360, invalid: 140, total: 500, percentage: 15 },
];

export function TrafficTrendChart() {
  return (
    <Card className="bg-white border-gray-200 shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Traffic Trend</CardTitle>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-xs">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span>Valid</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <div className="h-2 w-2 rounded-full bg-red-500" />
              <span>Invalid</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <div className="h-2 w-2 rounded-full bg-orange-400" />
              <span>Trend %</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 30,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 10 }} 
                stroke="#6b7280"
                angle={-45}
                textAnchor="end" 
                height={50}
              />
              <YAxis 
                yAxisId="left" 
                orientation="left" 
                tick={{ fontSize: 10 }} 
                stroke="#6b7280"
                domain={[0, 'dataMax + 100']}
                label={{ 
                  value: '', 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { textAnchor: 'middle' } 
                }}
              />
              <YAxis 
                yAxisId="right" 
                orientation="right" 
                tick={{ fontSize: 10 }} 
                stroke="#6b7280"
                domain={[0, 50]}
                label={{ 
                  value: '%', 
                  angle: -90, 
                  position: 'insideRight',
                  style: { textAnchor: 'middle' } 
                }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "#fff", 
                  border: "1px solid #e5e7eb",
                  borderRadius: "4px"
                }}
                formatter={(value, name) => {
                  if (name === "percentage") return [`${value}%`, "Trend"];
                  return [value, name];
                }}
              />
              <Legend />
              <Bar 
                yAxisId="left"
                dataKey="valid" 
                stackId="a" 
                fill="#10b981" 
                name="Valid"
              />
              <Bar 
                yAxisId="left"
                dataKey="invalid" 
                stackId="a" 
                fill="#ef4444" 
                name="Invalid"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="percentage"
                name="Trend %"
                stroke="#f97316"
                strokeWidth={2}
                dot={{ fill: '#f97316', r: 2 }}
                activeDot={{ r: 6 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
} 