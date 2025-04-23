"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "@/components/theme-provider";

export function Navigation() {
  const pathname = usePathname();
  const { darkMode } = useTheme();
  
  const getDefaultValue = () => {
    if (pathname === "/analysis") return "analysis";
    return "summary";
  };
  
  return (
    <div className={`border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="container mx-auto py-2 flex justify-between items-center">
        <Tabs defaultValue={getDefaultValue()} className="w-full">
          <TabsList className="grid w-full md:w-[600px] grid-cols-2">
            <TabsTrigger value="summary" asChild>
              <Link href="/">Overall Summary</Link>
            </TabsTrigger>
            <TabsTrigger value="analysis" asChild>
              <Link href="/analysis">Analysis Insights</Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
} 