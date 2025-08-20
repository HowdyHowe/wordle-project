"use client";

// O = Correct, I = Semi Correct, X = Wrong

import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";

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
                if (e.key === "Backspace" && turn != 0) {
                    return prev.slice(0, -1);
                }

                if (prev.length < maxWords && turn != 0) {
                    // only accept alphabet letters
                    if (/^[a-zA-Z]$/.test(e.key)) {
                        return [...prev, e.key.toUpperCase()];
                    } else {
                        return prev
                    }
                }

                if (e.key === "Enter" && turn != 0) {
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
                    } else {
                        return prev;
                    }

                    setDone(prev => ({...prev, [`line${turn}`]: true}))
                    setTurn(turn + 1);
                    setTimeout(() => setGuess([]), 0);
                    return prev;
                }

                if (prev.length <= maxWords - 1 && turn != 0) {
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
                            <div key={i} className={
                                done.line1 == false ?
                                (guess.length > i && turn == 1) ? `test-active`: `test`:
                                data[1][i].status === "O" ? `box-correct` :
                                data[1][i].status === "I" ? `box-semi-correct` :
                                data[1][i].status === "X" ? `box-incorrect` : "test"
                            }
                            >
                                {done.line1 == false ? turn == 1 ? guess[i] : "" : data[1][i].letter}
                            </div>
                        ))
                    }
                </div>
                <div className="grid grid-cols-5 gap-[6px]">
                    {
                        Array.from({ length:maxWords}).map((_, i) => (
                            <div key={i} className={
                                done.line2 == false ?
                                (guess.length > i && turn == 2) ? `test-active`: `test`:
                                data[2][i].status === "O" ? `box-correct` :
                                data[2][i].status === "I" ? `box-semi-correct` :
                                data[2][i].status === "X" ? `box-incorrect` : "test"
                            }
                            >
                                {done.line2 == false ? turn == 2 ? guess[i] : "" : data[2][i].letter}
                            </div>
                        ))
                    }
                </div>
                <div className="grid grid-cols-5 gap-[6px]">
                    {
                        Array.from({ length:maxWords}).map((_, i) => (
                            done.line3 == false ?
                            <div key={i} className={(guess.length > i && turn == 3) ? `test-active animate-pop`: `test`}
                            >
                                {turn == 3 ? guess[i] : ""}
                            </div> :
                            <div key={i} className={
                                data[3][i].status == "O" ? "box-correct" :
                                data[3][i].status == "I" ? "box-semi-correct" :
                                data[3][i].status == "X" ? "box-incorrect" : "test"
                                }
                            >
                                {data[3][i].letter}
                            </div>
                        ))
                    }
                </div>
                <div className="grid grid-cols-5 gap-[6px]">
                    {
                        Array.from({ length:maxWords}).map((_, i) => (
                            done.line4 == false ?
                            <div key={i} className={(guess.length > i && turn == 4) ? `test-active animate-pop`: `test`}
                            >
                                {turn == 4 ? guess[i] : ""}
                            </div> :
                            <div key={i} className={
                                data[4][i].status == "O" ? "box-correct" :
                                data[4][i].status == "I" ? "box-semi-correct" :
                                data[4][i].status == "X" ? "box-incorrect" : "test"
                                }
                            >
                                {data[4][i].letter}
                            </div>
                        ))
                    }
                </div>
                <div className="grid grid-cols-5 gap-[6px]">
                    {
                        Array.from({ length:maxWords}).map((_, i) => (
                            done.line5 == false ?
                            <div key={i} className={(guess.length > i && turn == 5) ? `test-active animate-pop`: `test`}
                            >
                                {turn == 5 ? guess[i] : ""}
                            </div> :
                            <div key={i} className={
                                data[5][i].status == "O" ? "box-correct" :
                                data[5][i].status == "I" ? "box-semi-correct" :
                                data[5][i].status == "X" ? "box-incorrect" : "test"
                                }
                            >
                                {data[5][i].letter}
                            </div>
                        ))
                    }
                </div>
                <div className="grid grid-cols-5 gap-[6px]">
                    {
                        Array.from({ length:maxWords}).map((_, i) => (
                            done.line6 == false ?
                            <div key={i} className={(guess.length > i && turn == 6) ? `test-active animate-pop`: `test`}
                            >
                                {turn == 6 ? guess[i] : ""}
                            </div> :
                            <div key={i} className={
                                data[6][i].status == "O" ? "box-correct" :
                                data[6][i].status == "I" ? "box-semi-correct" :
                                data[6][i].status == "X" ? "box-incorrect" : "test"
                                }
                            >
                                {data[6][i].letter}
                            </div>
                        ))
                    }
                </div>
            </div>

        </main>
    )
}

