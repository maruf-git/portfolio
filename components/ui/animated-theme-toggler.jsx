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

  const toggleTheme = useCallback(() => {
    const button = buttonRef.current
    if (!button) return

    const { top, left, width, height } = button.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const viewportWidth = window.visualViewport?.width ?? window.innerWidth
    const viewportHeight = window.visualViewport?.height ?? window.innerHeight
    const maxRadius = Math.hypot(Math.max(x, viewportWidth - x), Math.max(y, viewportHeight - y))

    const isDark = resolvedTheme === "dark"

    const applyTheme = () => {
      const newTheme = isDark ? "light" : "dark"
      
      // Force an immediate DOM update to guarantee the view transition captures
      // exactly the right visual representation of the next frame synchronously.
      document.documentElement.classList.remove("light", "dark")
      document.documentElement.classList.add(newTheme)
      document.documentElement.style.colorScheme = newTheme
      
      // Pass the state up to next-themes for React context & localStorage persistence
      setTheme(newTheme)
    }

    if (typeof document.startViewTransition !== "function") {
      applyTheme()
      return
    }

    const transition = document.startViewTransition(() => {
      flushSync(applyTheme)
    })

    const ready = transition?.ready
    if (ready && typeof ready.then === "function") {
      ready.then(() => {
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
    }
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
