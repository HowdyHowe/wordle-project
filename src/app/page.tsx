"use client";

// O = Correct, I = Semi Correct, X = Wrong

import Navbar from "@/components/navbar";
import { useEffect, useRef, useState } from "react";

type LetterData = {
  letter: string;
  status: "O" | "I" | "X";
};

const data: Record<number, LetterData[]> = {};

export default function MainPage() {
    const [ guess, setGuess ] = useState<string[]>([]);
    const [ done, setDone ] = useState({
        line1: false,
        line2: false,
        line3: false,
        line4: false,
        line5: false,
        line6: false
    });
    const [ turn, setTurn ] = useState(1);
    const word = "CEPAT".split("");
    const maxWords = 5;


    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            setGuess(prev => {
                if (e.key === "Backspace") {
                    return prev.slice(0, -1);
                }

                if (e.key === "Enter") {
                    const g = guess.map(e => e.toUpperCase())
                    if (g.length == (maxWords)) {
                        data[turn] = [];
                        for (let i = 0; i < g.length; i++) {
                            if (g[i] === word[i]) {
                                data[turn].push({letter: g[i], status: "O"})

                            } else if (word.includes(g[i])) {
                                data[turn].push({letter: g[i], status: "I"})

                            } else {
                                data[turn].push({letter: g[i], status: "X"})

                            }
                        }
                    }

                    setTimeout(() => setGuess([]), 0);
                    return prev;
                }

                if (prev.length <= maxWords && turn != 0) {
                    if (e.key.length === 1) {
                        return [...prev, e.key];
                    }
                }
                return prev;
            })
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [guess, guess.length, turn, word]);

    return (
        <main className="flex flex-col items-center justify-center w-full h-screen">
            <Navbar/>
            <h1>{JSON.stringify(data)}</h1>
            <div className="grid grid-rows-4 gap-[6px]">
                <div className="grid grid-cols-5 gap-[6px]">
                    {
                        Array.from({ length:maxWords}).map((_, i) => (
                            <div key={i} className={(guess.length > i && turn == 1) ? `test-active animate-pop`: `test`}>
                                {turn == 1 ? guess[i] : ""}
                            </div>
                        ))
                    }
                </div>
                <div className="grid grid-cols-5 gap-[6px]">
                    {
                        Array.from({ length:maxWords}).map((_, i) => (
                            <div key={i} className={(guess.length > i && turn == 2) ? `test-active animate-pop`: `test`}>
                                {turn == 2 ? guess[0] : ""}
                            </div>
                        ))
                    }
                </div>
                <div className="grid grid-cols-5 gap-[6px]">
                    {
                        Array.from({ length:maxWords}).map((_, i) => (
                            <div key={i} className={(guess.length > i && turn == 3) ? `test-active animate-pop`: `test`}>
                                {turn == 3 ? guess[i] : ""}
                            </div>
                        ))
                    }
                </div>
                <div className="grid grid-cols-5 gap-[6px]">
                    {
                        Array.from({ length:maxWords}).map((_, i) => (
                            <div key={i} className={(guess.length > i && turn == 4) ? `test-active animate-pop`: `test`}>
                                {turn == 4 ? guess[i] : ""}
                            </div>
                        ))
                    }
                </div>
                <div className="grid grid-cols-5 gap-[6px]">
                    {
                        Array.from({ length:maxWords}).map((_, i) => (
                            <div key={i} className={(guess.length > i && turn == 5) ? `test-active animate-pop`: `test`}>
                                {turn == 5 ? guess[i] : ""}
                            </div>
                        ))
                    }
                </div>
                <div className="grid grid-cols-5 gap-[6px]">
                    {
                        Array.from({ length:maxWords}).map((_, i) => (
                            <div key={i} className={(guess.length > i && turn == 6) ? `test-active animate-pop`: `test`}>
                                {turn == 6 ? guess[i] : ""}
                            </div>
                        ))
                    }
                </div>
            </div>

        </main>
    )
}

