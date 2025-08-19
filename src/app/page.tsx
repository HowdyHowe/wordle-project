"use client";

import Navbar from "@/components/navbar";
import { useEffect, useRef, useState } from "react";

export default function MainPage() {
    const [ guess, setGuess ] = useState<string[]>([])
    const [ turn, setTurn ] = useState("1")
    const maxWords = 4;
    const word = "CEPAT"

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Only capture printable keys (optional)
            setGuess(prev => {
                if (e.key === "Backspace") {
                    // Remove last letter
                    return prev.slice(0, -1);
                }
                if (e.key === "Enter" && guess.length == maxWords) {
                    for (let x of guess) {
                        for (let i of word) {
                            continue;
                        }
                    }
                }
                if (guess.length <= maxWords && turn != "stop") {
                    if (e.key.length === 1) {
                        // Add new letter
                        return [...prev, e.key];
                    }
                }
                return prev; // ignore other keys
            })
        };

        // Listen globally
        window.addEventListener("keydown", handleKeyDown);

        // No actual focus needed — it listens all the time
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [guess, guess.length, turn]);

    return (
        <main className="flex flex-col items-center justify-center w-full h-screen">
            <Navbar/>
            <h1>{guess.join("")}</h1>
            <div className="grid grid-rows-4 gap-[6px]">
                <div className="grid grid-cols-5 gap-[6px]">
                    <div className={(guess.length >= 1 && turn == "1") ? `test-active animate-pop`: `test`}>{turn == "1" ? guess[0] : ""}</div>
                    <div className={(guess.length >= 2 && turn == "1") ? `test-active animate-pop`: `test`}>{turn == "1" ? guess[1] : ""}</div>
                    <div className={(guess.length >= 3 && turn == "1") ? `test-active animate-pop`: `test`}>{turn == "1" ? guess[2] : ""}</div>
                    <div className={(guess.length >= 4 && turn == "1") ? `test-active animate-pop`: `test`}>{turn == "1" ? guess[3] : ""}</div>
                    <div className={(guess.length == 5 && turn == "1") ? `test-active animate-pop`: `test`}>{turn == "1" ? guess[4] : ""}</div>
                </div>
                <div className="grid grid-cols-5 gap-[6px]">
                    <div className={(guess.length >= 1 && turn == "2") ? `test-active animate-pop`: `test`}>{turn == "2" ? guess[0] : ""}</div>
                    <div className={(guess.length >= 2 && turn == "2") ? `test-active animate-pop`: `test`}>{turn == "2" ? guess[1] : ""}</div>
                    <div className={(guess.length >= 3 && turn == "2") ? `test-active animate-pop`: `test`}>{turn == "2" ? guess[2] : ""}</div>
                    <div className={(guess.length >= 4 && turn == "2") ? `test-active animate-pop`: `test`}>{turn == "2" ? guess[3] : ""}</div>
                    <div className={(guess.length == 5 && turn == "2") ? `test-active animate-pop`: `test`}>{turn == "2" ? guess[4] : ""}</div>
                </div>
                <div className="grid grid-cols-5 gap-[6px]">
                    <div className={(guess.length >= 1 && turn == "3") ? `test-active animate-pop`: `test`}>{turn == "3" ? guess[0] : ""}</div>
                    <div className={(guess.length >= 2 && turn == "3") ? `test-active animate-pop`: `test`}>{turn == "3" ? guess[1] : ""}</div>
                    <div className={(guess.length >= 3 && turn == "3") ? `test-active animate-pop`: `test`}>{turn == "3" ? guess[2] : ""}</div>
                    <div className={(guess.length >= 4 && turn == "3") ? `test-active animate-pop`: `test`}>{turn == "3" ? guess[3] : ""}</div>
                    <div className={(guess.length == 5 && turn == "3") ? `test-active animate-pop`: `test`}>{turn == "3" ? guess[4] : ""}</div>
                </div>
                <div className="grid grid-cols-5 gap-[6px]">
                    <div className={(guess.length >= 1 && turn == "4") ? `test-active animate-pop`: `test`}>{turn == "4" ? guess[0] : ""}</div>
                    <div className={(guess.length >= 2 && turn == "4") ? `test-active animate-pop`: `test`}>{turn == "4" ? guess[1] : ""}</div>
                    <div className={(guess.length >= 3 && turn == "4") ? `test-active animate-pop`: `test`}>{turn == "4" ? guess[2] : ""}</div>
                    <div className={(guess.length >= 4 && turn == "4") ? `test-active animate-pop`: `test`}>{turn == "4" ? guess[3] : ""}</div>
                    <div className={(guess.length == 5 && turn == "4") ? `test-active animate-pop`: `test`}>{turn == "4" ? guess[4] : ""}</div>
                </div>
                <div className="grid grid-cols-5 gap-[6px]">
                    <div className={(guess.length >= 1 && turn == "5") ? `test-active animate-pop`: `test`}>{turn == "5" ? guess[0] : ""}</div>
                    <div className={(guess.length >= 2 && turn == "5") ? `test-active animate-pop`: `test`}>{turn == "5" ? guess[1] : ""}</div>
                    <div className={(guess.length >= 3 && turn == "5") ? `test-active animate-pop`: `test`}>{turn == "5" ? guess[2] : ""}</div>
                    <div className={(guess.length >= 4 && turn == "5") ? `test-active animate-pop`: `test`}>{turn == "5" ? guess[3] : ""}</div>
                    <div className={(guess.length == 5 && turn == "5") ? `test-active animate-pop`: `test`}>{turn == "5" ? guess[4] : ""}</div>
                </div>
                <div className="grid grid-cols-5 gap-[6px]">
                    <div className={(guess.length >= 1 && turn == "6") ? `test-active animate-pop`: `test`}>{turn == "6" ? guess[0] : ""}</div>
                    <div className={(guess.length >= 2 && turn == "6") ? `test-active animate-pop`: `test`}>{turn == "6" ? guess[1] : ""}</div>
                    <div className={(guess.length >= 3 && turn == "6") ? `test-active animate-pop`: `test`}>{turn == "6" ? guess[2] : ""}</div>
                    <div className={(guess.length >= 4 && turn == "6") ? `test-active animate-pop`: `test`}>{turn == "6" ? guess[3] : ""}</div>
                    <div className={(guess.length == 5 && turn == "6") ? `test-active animate-pop`: `test`}>{turn == "6" ? guess[4] : ""}</div>
                </div>
            </div>

        </main>
    )
}

