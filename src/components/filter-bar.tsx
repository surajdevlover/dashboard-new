"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function FilterBar() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-7 gap-4 my-4">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Package" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Packages</SelectItem>
          <SelectItem value="package1">Package 1</SelectItem>
          <SelectItem value="package2">Package 2</SelectItem>
        </SelectContent>
      </Select>
      
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Report Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Reports</SelectItem>
          <SelectItem value="type1">Type 1</SelectItem>
          <SelectItem value="type2">Type 2</SelectItem>
        </SelectContent>
      </Select>
      
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Date Range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="today">Today</SelectItem>
          <SelectItem value="week">This Week</SelectItem>
          <SelectItem value="month">This Month</SelectItem>
          <SelectItem value="quarter">This Quarter</SelectItem>
        </SelectContent>
      </Select>
      
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Publisher" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Publishers</SelectItem>
          <SelectItem value="pub1">Publisher 1</SelectItem>
          <SelectItem value="pub2">Publisher 2</SelectItem>
        </SelectContent>
      </Select>
      
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Sub Publisher" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Sub Publishers</SelectItem>
          <SelectItem value="sub1">Sub Publisher 1</SelectItem>
          <SelectItem value="sub2">Sub Publisher 2</SelectItem>
        </SelectContent>
      </Select>
      
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Campaign" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Campaigns</SelectItem>
          <SelectItem value="camp1">Campaign 1</SelectItem>
          <SelectItem value="camp2">Campaign 2</SelectItem>
        </SelectContent>
      </Select>
      
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Channel" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Channels</SelectItem>
          <SelectItem value="channel1">Channel 1</SelectItem>
          <SelectItem value="channel2">Channel 2</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
} 