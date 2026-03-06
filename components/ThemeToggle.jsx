"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative rounded-full hover:bg-primary/10 transition-colors"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 text-yellow-500 transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 text-slate-700 transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100 dark:text-slate-300" />
    </Button>
  );
}
