"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/components/theme-provider";

export function SummaryStats() {
  const { darkMode } = useTheme();
  
  return (
    <Card className="bg-white border-gray-200 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Total Traffic</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-purple-700 font-semibold">Visit: 570K</h3>
          <h3 className="text-purple-700 font-semibold">Event: 480K</h3>
        </div>
        
        <Separator className="bg-gray-200" />
        
        <div>
          <h3 className="font-semibold text-gray-600 mb-2">Valid Traffic</h3>
          <div className="flex items-center justify-between">
            <p className="text-green-600 font-semibold">Visit: 180K (57%)</p>
            <p className="text-green-600 font-semibold">Event: 150K (48%)</p>
          </div>
        </div>
        
        <Separator className="bg-gray-200" />
        
        <div>
          <h3 className="font-semibold text-gray-600 mb-2">Invalid Traffic</h3>
          <div className="flex items-center justify-between">
            <p className="text-red-600 font-semibold">Visit: 420K (43%)</p>
            <p className="text-red-600 font-semibold">Event: 300K (2%)</p>
          </div>
        </div>
        
        <Separator className="bg-gray-200" />
        
        <div>
          <h3 className="font-semibold text-gray-600 mb-2">Conversion Rate</h3>
          <div className="flex items-center justify-between">
            <p className="text-purple-700 font-semibold">Valid traffic: 2.3%</p>
            <p className="text-purple-700 font-semibold">Invalid traffic: 0.3%</p>
          </div>
        </div>
        
        <Separator className="bg-gray-200" />
        
        <div>
          <h3 className="font-semibold text-gray-600 mb-2">Conv. Rate (Valid to invalid delta)</h3>
          <div>
            <p className="text-green-600 font-semibold">3X</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 