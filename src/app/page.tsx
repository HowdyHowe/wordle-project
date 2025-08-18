"use client";

import Navbar from "@/components/navbar";
import { useState } from "react";

export default function MainPage() {
    const [ guess, setGuess ] = useState("")
    const maxWords = 5;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        const words = input.trim().split(/\s+/);

        if (words.length <= maxWords) {
        setGuess(input);
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const words = guess.trim().split(/\s+/);

        // If already at maxWords and not deleting, block further typing
        if (words.length >= maxWords && e.key !== "Backspace" && e.key !== "Delete") {
        e.preventDefault();
        }
    };

    return (
        <main className="flex flex-col items-center justify-center w-full h-screen">
            <Navbar/>
            <h1>{guess}</h1>
            <div className="grid grid-rows-4 gap-3">
                <div className="grid grid-cols-5 gap-3">
                    <div className="test-active">{guess[0]}</div>
                    <div className="test-active">{guess[1]}</div>
                    <div className="test-active">{guess[2]}</div>
                    <div className="test-active">{guess[3]}</div>
                    <div className="test-active">{guess[4]}</div>
                </div>
                <div className="grid grid-cols-5 gap-3">
                    <div className="test"></div>
                    <div className="test"></div>
                    <div className="test"></div>
                    <div className="test"></div>
                    <div className="test"></div>
                </div>
                <div className="grid grid-cols-5 gap-3">
                    <div className="test"></div>
                    <div className="test"></div>
                    <div className="test"></div>
                    <div className="test"></div>
                    <div className="test"></div>
                </div>
                <div className="grid grid-cols-5 gap-3">
                    <div className="test"></div>
                    <div className="test"></div>
                    <div className="test"></div>
                    <div className="test"></div>
                    <div className="test"></div>
                </div>
                <div className="grid grid-cols-5 gap-3">
                    <div className="test"></div>
                    <div className="test"></div>
                    <div className="test"></div>
                    <div className="test"></div>
                    <div className="test"></div>
                </div>
                <div className="grid grid-cols-5 gap-3">
                    <div className="test"></div>
                    <div className="test"></div>
                    <div className="test"></div>
                    <div className="test"></div>
                    <div className="test"></div>
                </div>
            </div>

            <input type="text" placeholder={`Max ${maxWords} words...`} maxLength={5} value={guess} onKeyDown={handleKeyDown} onChange={handleChange} className="w-[200px] h-[50px] bg-black text-white rounded-lg"/>

        </main>
    )
}

