"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface CodeTerminalProps {
    codeLines: string[]
    name: string
    title: string
    yearsOfExperience: number
}

export default function CodeTerminal({ codeLines, name, title, yearsOfExperience }: CodeTerminalProps) {
    const [terminalText, setTerminalText] = useState("")
    const [cursorVisible, setCursorVisible] = useState(true)
    const [terminalLines, setTerminalLines] = useState<string[]>([])
    const [currentLineIndex, setCurrentLineIndex] = useState(0)
    const [isTypingComplete, setIsTypingComplete] = useState(false)
    const terminalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Terminal typing effect
        let timeout: NodeJS.Timeout

        const typeTerminalText = () => {
            if (currentLineIndex < codeLines.length) {
                const currentLine = codeLines[currentLineIndex]
                let i = 0

                const type = () => {
                    if (i < currentLine.length) {
                        setTerminalText((prev) => prev + currentLine.charAt(i))
                        i++
                        timeout = setTimeout(type, Math.random() * 50 + 20)
                    } else {
                        setTerminalLines((prev) => [...prev, currentLine])
                        setTerminalText("")
                        setCurrentLineIndex((prev) => prev + 1)
                        timeout = setTimeout(typeTerminalText, 100)
                    }
                }

                type()
            } else {
                setIsTypingComplete(true)
            }
        }

        typeTerminalText()

        // Cursor blinking effect
        const cursorInterval = setInterval(() => {
            setCursorVisible((prev) => !prev)
        }, 500)

        return () => {
            clearTimeout(timeout)
            clearInterval(cursorInterval)
        }
    }, [codeLines, currentLineIndex])

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight
        }
    }, [terminalLines])

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block"
        >
            <div className="bg-slate-900/90 dark:bg-black/80 backdrop-blur-md rounded-lg border border-slate-700/50 dark:border-orange-900/30 shadow-xl overflow-hidden">
                <div className="flex items-center px-4 py-2 bg-slate-800/80 dark:bg-slate-900/80 border-b border-slate-700/50 dark:border-orange-900/30">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="ml-4 text-xs font-mono text-slate-400 dark:text-orange-300/70">SeniorDeveloper.cs</div>
                </div>
                <div
                    ref={terminalRef}
                    className="p-4 h-[420px] overflow-y-auto font-mono text-sm text-blue-100 dark:text-orange-100 custom-scrollbar"
                >
                    {terminalLines.map((line, index) => (
                        <div key={index} className="whitespace-pre">
                            <span
                                className={`${line.includes("using ")
                                        ? "text-blue-300 dark:text-orange-300"
                                        : line.includes("namespace") || line.includes("class") || line.includes("public")
                                            ? "text-blue-300 dark:text-orange-300"
                                            : line.includes("get;") ||
                                                line.includes("set;") ||
                                                line.includes("return") ||
                                                line.includes("new") ||
                                                line.includes("Where") ||
                                                line.includes("OrderBy") ||
                                                line.includes("Select")
                                                ? "text-purple-400 dark:text-yellow-400"
                                                : line.includes("string") ||
                                                    line.includes("int") ||
                                                    line.includes("IEnumerable") ||
                                                    line.includes("List")
                                                    ? "text-teal-300 dark:text-green-400"
                                                    : "text-blue-100 dark:text-orange-100"
                                    }`}
                            >
                                {line}
                            </span>
                        </div>
                    ))}
                    <div className="whitespace-pre">
                        <span className="text-blue-300 dark:text-orange-300">{terminalText}</span>
                        {!isTypingComplete && cursorVisible && <span className="text-blue-300 dark:text-orange-300 animate-pulse">|</span>}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

