"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme } = useTheme()

    // Evita problemas de hidratação
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="fixed top-4 left-4 z-50 p-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-md text-slate-700 dark:text-orange-400 hover:bg-white dark:hover:bg-slate-800 transition-colors"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
            {theme === "dark" ? <Sun size={20} className="text-orange-400" /> : <Moon size={20} />}
        </button>
    )
}
