"use client"

import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"

interface CodeTerminalProps {
    codeLines: string[];
    name: string;
    title: string;
    yearsOfExperience: number;
}

export default function CodeTerminal({
    codeLines,
    name,
    title,
    yearsOfExperience
}: CodeTerminalProps) {
    const [terminalText, setTerminalText] = useState("")
    const [cursorVisible, setCursorVisible] = useState(true)
    const [terminalLines, setTerminalLines] = useState<string[]>([])
    const [currentLineIndex, setCurrentLineIndex] = useState(0)
    const [mounted, setMounted] = useState(false)
    const terminalRef = useRef<HTMLDivElement>(null)

    // Efeito para inicializar o terminal somente no cliente
    useEffect(() => {
        setMounted(true)
    }, [])

    // Efeito para a animação de digitação - somente executado no cliente
    useEffect(() => {
        if (!mounted) return;

        // Reset states quando o componente montar
        setTerminalLines([])
        setTerminalText("")
        setCurrentLineIndex(0)

        let timeout: NodeJS.Timeout;
        const typingActive = { current: true };

        const typeTerminalText = () => {
            if (!typingActive.current) return;

            const processNextLine = (lineIndex: number) => {
                if (lineIndex >= codeLines.length || !typingActive.current) return;

                const currentLine = codeLines[lineIndex];
                let charIndex = 0;

                const typeChar = () => {
                    if (!typingActive.current) return;

                    if (charIndex < currentLine.length) {
                        setTerminalText(prev => prev + currentLine.charAt(charIndex));
                        charIndex++;

                        // Usar um valor fixo/constante para o timing inicial
                        // Math.random só será usado após a montagem completa
                        const typingDelay = mounted ? (Math.random() * 30 + 10) : 20;
                        timeout = setTimeout(typeChar, typingDelay);
                    } else {
                        setTerminalLines(prev => [...prev, currentLine]);
                        setTerminalText("");
                        setCurrentLineIndex(lineIndex + 1);
                        timeout = setTimeout(() => processNextLine(lineIndex + 1), 100);
                    }
                };

                typeChar();
            };

            processNextLine(0);
        };

        // Iniciar efeito de digitação após um breve delay
        timeout = setTimeout(typeTerminalText, 500);

        // Efeito de cursor piscando
        const cursorInterval = setInterval(() => {
            setCursorVisible(prev => !prev);
        }, 500);

        return () => {
            typingActive.current = false;
            clearTimeout(timeout);
            clearInterval(cursorInterval);
        };
    }, [mounted, codeLines]); // Observe que mounted é uma dependência agora

    // Scroll automático
    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight
        }
    }, [terminalLines])

    // Renderizar placeholder ou shell vazio durante SSR/hidratação inicial
    if (!mounted) {
        return (
            <div className="hidden md:block">
                <div className="bg-slate-900/90 backdrop-blur-md rounded-lg border border-slate-700/50 shadow-xl overflow-hidden">
                    <div className="flex items-center px-4 py-2 bg-slate-800/80 border-b border-slate-700/50">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="ml-4 text-xs font-mono text-slate-400">SeniorDeveloper.cs</div>
                    </div>
                    <div className="p-4 h-[340px] font-mono text-sm text-blue-100">
                        {/* Conteúdo vazio durante SSR */}
                    </div>
                </div>
            </div>
        );
    }

    // Terminal completo renderizado apenas no cliente
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block"
        >
            <div className="bg-slate-900/90 backdrop-blur-md rounded-lg border border-slate-700/50 shadow-xl overflow-hidden">
                <div className="flex items-center px-4 py-2 bg-slate-800/80 border-b border-slate-700/50">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="ml-4 text-xs font-mono text-slate-400">SeniorDeveloper.cs</div>
                </div>
                <div
                    ref={terminalRef}
                    className="p-4 h-[340px] overflow-y-auto font-mono text-sm text-blue-100 custom-scrollbar"
                >
                    {terminalLines.map((line, index) => (
                        <div key={index} className="whitespace-pre">
                            <span
                                className={`${
                                    // C# keywords (blue)
                                    line.match(/\b(using|namespace|class|public|private|protected|internal|static|void|virtual|override)\b/)
                                        ? "text-blue-300"
                                        // LINQ methods and other special keywords (purple)
                                        : line.match(/\b(get;|set;|return|new|Where|OrderBy|Select|FirstOrDefault)\b/)
                                            ? "text-purple-400"
                                            // Type definitions (teal)
                                            : line.match(/\b(string|int|bool|IEnumerable|List|Dictionary|Task|var)\b/)
                                                ? "text-teal-300"
                                                // Default text color
                                                : "text-blue-100"
                                    }`}
                            >
                                {line}
                            </span>
                        </div>
                    ))}
                    <div className="whitespace-pre">
                        <span className="text-blue-100">{terminalText}</span>
                        {cursorVisible && <span className="text-blue-300 animate-pulse">|</span>}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}