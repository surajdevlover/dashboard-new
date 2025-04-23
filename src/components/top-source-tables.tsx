"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const publisherData = [
  {
    id: 1,
    name: "Publisher 1",
    totalVisits: 40000,
    invalidVisitPercent: "20%",
    totalEvents: 10000,
    invalidEventPercent: "6%",
    validTrafficConvRate: "2%",
    invalidTrafficConvRate: "0.2%",
  },
  {
    id: 2,
    name: "Publisher 2",
    totalVisits: 50000,
    invalidVisitPercent: "34%",
    totalEvents: 18000,
    invalidEventPercent: "7%",
    validTrafficConvRate: "3%",
    invalidTrafficConvRate: "0.4%",
  },
  {
    id: 3,
    name: "Publisher 3",
    totalVisits: 40000,
    invalidVisitPercent: "20%",
    totalEvents: 10000,
    invalidEventPercent: "6%",
    validTrafficConvRate: "2%",
    invalidTrafficConvRate: "0.2%",
  },
  {
    id: 4,
    name: "Publisher 4",
    totalVisits: 50000,
    invalidVisitPercent: "34%",
    totalEvents: 18000,
    invalidEventPercent: "7%",
    validTrafficConvRate: "3%",
    invalidTrafficConvRate: "0.4%",
  },
  {
    id: 5,
    name: "Publisher 5",
    totalVisits: 40000,
    invalidVisitPercent: "20%",
    totalEvents: 10000,
    invalidEventPercent: "6%",
    validTrafficConvRate: "2%",
    invalidTrafficConvRate: "0.2%",
  },
];

const campaignData = [
  {
    id: 1,
    name: "Campaign 1",
    totalVisits: 40000,
    invalidVisitPercent: "20%",
    totalEvents: 10000,
    invalidEventPercent: "6%",
  },
  {
    id: 2,
    name: "Campaign 2",
    totalVisits: 50000,
    invalidVisitPercent: "34%",
    totalEvents: 18000,
    invalidEventPercent: "7%",
  },
  {
    id: 3,
    name: "Campaign 3",
    totalVisits: 40000,
    invalidVisitPercent: "20%",
    totalEvents: 10000,
    invalidEventPercent: "6%",
  },
  {
    id: 4,
    name: "Campaign 4",
    totalVisits: 50000,
    invalidVisitPercent: "34%",
    totalEvents: 18000,
    invalidEventPercent: "7%",
  },
  {
    id: 5,
    name: "Campaign 5",
    totalVisits: 40000,
    invalidVisitPercent: "20%",
    totalEvents: 10000,
    invalidEventPercent: "6%",
  },
];

export function TopSourceTables() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <Card className="bg-white border-gray-200 shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Top 5 Sources/Publisher</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="text-xs font-semibold">Source</TableHead>
                <TableHead className="text-xs font-semibold">Total Visits</TableHead>
                <TableHead className="text-xs font-semibold">Invalid Visit %</TableHead>
                <TableHead className="text-xs font-semibold">Total Events</TableHead>
                <TableHead className="text-xs font-semibold">Invalid Event %</TableHead>
                <TableHead className="text-xs font-semibold">Valid Traffic Conv. Ratio</TableHead>
                <TableHead className="text-xs font-semibold">Invalid Traffic Conv. Ratio</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {publisherData.map((publisher) => (
                <TableRow key={publisher.id} className="hover:bg-gray-50">
                  <TableCell className="text-xs font-medium">
                    {publisher.name}
                  </TableCell>
                  <TableCell className="text-xs">{publisher.totalVisits.toLocaleString()}</TableCell>
                  <TableCell className="text-xs">{publisher.invalidVisitPercent}</TableCell>
                  <TableCell className="text-xs">{publisher.totalEvents.toLocaleString()}</TableCell>
                  <TableCell className="text-xs">{publisher.invalidEventPercent}</TableCell>
                  <TableCell className="text-xs">{publisher.validTrafficConvRate}</TableCell>
                  <TableCell className="text-xs">{publisher.invalidTrafficConvRate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="bg-white border-gray-200 shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Top 5 Campaigns</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="text-xs font-semibold">Campaign ID</TableHead>
                <TableHead className="text-xs font-semibold">Total Visits</TableHead>
                <TableHead className="text-xs font-semibold">Invalid Visit %</TableHead>
                <TableHead className="text-xs font-semibold">Total Events</TableHead>
                <TableHead className="text-xs font-semibold">Invalid Event %</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaignData.map((campaign) => (
                <TableRow key={campaign.id} className="hover:bg-gray-50">
                  <TableCell className="text-xs font-medium">
                    {campaign.name}
                  </TableCell>
                  <TableCell className="text-xs">{campaign.totalVisits.toLocaleString()}</TableCell>
                  <TableCell className="text-xs">{campaign.invalidVisitPercent}</TableCell>
                  <TableCell className="text-xs">{campaign.totalEvents.toLocaleString()}</TableCell>
                  <TableCell className="text-xs">{campaign.invalidEventPercent}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
} 