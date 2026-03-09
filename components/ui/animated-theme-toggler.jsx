"use client";
import { useCallback, useEffect, useRef, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { flushSync } from "react-dom"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

export const AnimatedThemeToggler = ({
  className,
  duration = 500,
  ...props
}) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const buttonRef = useRef(null)

  useEffect(() => setMounted(true), [])

  const toggleTheme = useCallback((e) => {
    const isDark = resolvedTheme === "dark"
    const newTheme = isDark ? "light" : "dark"

    if (typeof document.startViewTransition !== "function") {
      setTheme(newTheme)
      return
    }

    // Get click coords for origin
    const { clientX: x, clientY: y } = e
    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )

    const transition = document.startViewTransition(async () => {
      setTheme(newTheme)
      // next-themes applies class right away, but to be absolutely safe for the transition capture:
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    transition.ready.then(() => {
      document.documentElement.animate({
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      }, {
        duration,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      })
    })
  }, [resolvedTheme, setTheme, duration])

  if (!mounted) return <div className="w-9 h-9" />

  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn("w-9 h-9 flex items-center justify-center rounded-full hover:bg-primary/10 transition-colors focus:outline-none", className)}
      aria-label="Toggle theme"
      {...props}>
      {isDark ? <Moon className="h-5 w-5 text-slate-300 transition-all" /> : <Sun className="h-5 w-5 text-yellow-500 transition-all" />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
