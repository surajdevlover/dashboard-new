"use client";

import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon } from "lucide-react";

export function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <Button
      variant={darkMode ? "outline" : "default"}
      size="icon"
      onClick={toggleTheme}
      title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-full"
    >
      {darkMode ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </Button>
  );
} 