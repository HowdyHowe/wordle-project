"use client";

// O = Correct, I = Semi Correct, X = Wrong
import Keyboard from "@/components/keyboard";
import Navbar from "@/components/navbar";
import PopUp from "@/components/pop-up";
import { useEffect, useRef, useState } from "react";
import randomWord from "@/components/data/word-idn.json"

type LetterData = {
  letter: string;
  status: "O" | "I" | "X";
};

const maxWords = 5;
const wordList: string[] = randomWord.kata;
const wordSet = new Set(wordList);
let data: Record<number, LetterData[]> = {};
// const filteredWords = wordList.filter(w => w.length === maxWords);
// const word = filteredWords[Math.floor(Math.random() * filteredWords.length)].toUpperCase();
// const word = "PINTU";


const isValidWord = (guess: string) =>  {
  return wordSet.has(guess.toLowerCase());
}

export default function MainPage() {
    const [ guess, setGuess ] = useState<string[]>([]);
    const [ turn, setTurn ] = useState(1);
    const [ win, setWin ] = useState("")
    const [ show, setShow ] = useState(false)
    const [ isWord, setIsWord ] = useState(() => {
        const filteredWords = wordList.filter(w => w.length === maxWords);
        return filteredWords[Math.floor(Math.random() * filteredWords.length)].toUpperCase();
    });
    const [ done, setDone ] = useState({
        line1: false,
        line2: false,
        line3: false,
        line4: false,
        line5: false,
        line6: false
    });
    const isProcessing = useRef(false);

    // useEffect(() => {
    //     const handleKeyDown = (e: KeyboardEvent) => {
    //         setGuess(prev => {

    //             // enter getting pressed
    //             if (e.key === "Enter") {
    //                 const g = guess.map(e => e.toUpperCase());
    //                 const test = guess.map(e => e.toUpperCase()).join("");
    //                 console.log(test);
    //                 const setWord = isWord.split("");
    //                 data[turn] = [];

    //                 // cheking if word is valid
    //                 if (!isValidWord(test)) {
    //                     return prev;
    //                 }

    //                 // making default value of status from every word "X"
    //                 for (let i = 0; i < g.length; i++) {
    //                     data[turn].push({letter: g[i], status: "X"});
    //                 }

    //                 if (g.length == (maxWords)) {
    //                     // word that at correct position
    //                     for (let i = 0; i < g.length; i++) {
    //                         if (g[i] === isWord[i]) {
    //                             data[turn][i].status = "O";
    //                             setWord[i] = "";
    //                         }
    //                     }

    //                     // word that at wrong position
    //                     for (let i = 0; i < g.length; i++) {
    //                         if (data[turn][i].status === "X") {
    //                             if (setWord.includes(g[i])) {
    //                                 data[turn][i].status = "I";
    //                                 const index = setWord.indexOf(g[i]);
    //                                 setWord.splice(index, 1);
    //                             }
    //                         }
    //                     }

    //                     setDone(prev => ({...prev, [`line${turn}`]: true}))
    //                     setTurn(turn + 1);
    //                     const nextTurn = turn + 1
    //                     setTimeout(() => setGuess([]), 0);

    //                     // checking if all word is right
    //                     if (data[turn].every(item => item.status === "O")) {
    //                         setTurn(0)
    //                         setWin("win")
    //                         setShow(true)
    //                         return prev;
    //                     }

    //                     // checking if player having none chances
    //                     if (nextTurn > 6) {
    //                         setTurn(0)
    //                         setWin("lose")
    //                         setShow(true)
    //                         return prev;
    //                     }

    //                 } else {
    //                     return prev;
    //                 }

    //                 return prev;
    //             }

    //             if (e.key === "Backspace" && turn != 0) {
    //                 return prev.slice(0, -1);
    //             }

    //             if (prev.length < maxWords && turn != 0) {
    //                 // only accept alphabet letters
    //                 if (/^[a-zA-Z]$/.test(e.key)) {
    //                     return [...prev, e.key.toUpperCase()];
    //                 } else {
    //                     return prev;
    //                 }
    //             }

    //             if (prev.length <= maxWords - 1 && turn != 0) {
    //                 if (e.key.length === 1) {
    //                     return [...prev, e.key];
    //                 }
    //             }

    //             if (turn === 0){
    //                 data = {};
    //                 setGuess([]);
    //                 setTurn(1);
    //                 setDone({
    //                     line1: false,
    //                     line2: false,
    //                     line3: false,
    //                     line4: false,
    //                     line5: false,
    //                     line6: false
    //                 });

    //                 const filteredWords = wordList.filter(w => w.length === maxWords);
    //                 setIsWord(filteredWords[Math.floor(Math.random() * filteredWords.length)].toUpperCase());
    //                 return prev;
    //             }

    //             return prev;
    //         })
    //     };

    //     window.addEventListener("keydown", handleKeyDown);

    //     return () => {
    //         window.removeEventListener("keydown", handleKeyDown);
    //     };
    // }, [guess, guess.length, isWord, turn]);


    // Funtion to handle letter input
    const handleLetterInput = (key: string, source: "real" | "custom") => {

        setGuess(prev => {
            if (prev.length < maxWords && turn !== 0) {
                if (/^[a-zA-Z]$/.test(key)) {
                    return [...prev, key.toUpperCase()];
                }
            }
            return prev;
        });

    };

    // function to handle backspace input
    const handleBackspace = (source: "real" | "custom") => {

        setGuess(prev => prev.slice(0, -1));

    };

    // function to handle enter input
    const handleEnter = (source: "real" | "custom") => {
        if (isProcessing.current) return;
        isProcessing.current = true;

        if (turn === 0) {
            resetGame();
            return;
        }

        if (turn !== 0) {
            processGuess();
        }

        requestAnimationFrame(() => {
            isProcessing.current = false;
        });
    };

    // reset game logic
    const resetGame = () => {
        data = {};
        setGuess([]);
        setTurn(1);
        isProcessing.current = false;
        setDone({
            line1: false,
            line2: false,
            line3: false,
            line4: false,
            line5: false,
            line6: false
        });
        const filteredWords = wordList.filter(w => w.length === maxWords);
        setIsWord(filteredWords[Math.floor(Math.random() * filteredWords.length)].toUpperCase());
    };

    // game logic
    const processGuess = () => {
        const g = guess.map(e => e.toUpperCase());
        const test = g.join("");

        if (!isValidWord(test) || g.length !== maxWords) {
            return;
        }

        const setWord = isWord.split("");
        data[turn] = [];
        for (let i = 0; i < g.length; i++) {
            data[turn].push({letter: g[i], status: "X"});
        }

        if (g.length == (maxWords)) {
            // word that at correct position
            for (let i = 0; i < g.length; i++) {
                if (g[i] === isWord[i]) {
                    data[turn][i].status = "O";
                    setWord[i] = "";
                }
            }

            // word that at wrong position
            for (let i = 0; i < g.length; i++) {
                if (data[turn][i].status === "X") {
                    if (setWord.includes(g[i])) {
                        data[turn][i].status = "I";
                        const index = setWord.indexOf(g[i]);
                        setWord.splice(index, 1);
                    }
                }
            }

            setDone(prev => ({...prev, [`line${turn}`]: true}))
            setTurn(turn + 1);
            const nextTurn = turn + 1
            setTimeout(() => setGuess([]), 0);

            // checking if all word is right
            if (data[turn].every(item => item.status === "O")) {
                setTurn(0)
                setWin("win")
                setShow(true)
                return;
            }

            // checking if player having none chances
            if (nextTurn > 6) {
                setTurn(0)
                setWin("lose")
                setShow(true)
                return;
            }
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {

            if (e.key === "Enter") {
                handleEnter("real");
            } else if (e.key === "Backspace") {
                handleBackspace("real");
            } else if (/^[a-zA-Z]$/.test(e.key)) {
                handleLetterInput(e.key, "real");
            }

        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [guess, turn, isWord]);

    return (
        <main className="relative flex flex-col items-center justify-center mt-[100px] w-full h-screen font-mono">
            {
                win == "win" ?
                <PopUp
                    show={show}
                    onClose={
                        () => {
                            setShow(false);
                            setWin("");
                        }
                    }
                    title={"YOU WIN!!"}
                    message={"You correctly guess the word."}/>:

                win == "lose" ?
                <PopUp show={show}
                onClose={
                    () => {
                        setShow(false);
                        setWin("");
                    }
                }
                title={"YOU LOSE!!"}
                message={"You cannot guess the word with given chance."}/>: ""
            }
            <Navbar/>
            {/* <h1>{JSON.stringify(data)}</h1>
            <h1>{guess}</h1>
            <h1>{turn}</h1> */}
            <div className="grid grid-rows-4 gap-[6px] mb-10 font-bold">
                <div className="grid grid-cols-5 gap-[6px]">
                    {
                        Array.from({ length:maxWords }).map((_, i) => (
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
                        Array.from({ length:maxWords }).map((_, i) => (
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
                        Array.from({ length:maxWords }).map((_, i) => (
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
                        Array.from({ length:maxWords }).map((_, i) => (
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
                        Array.from({ length:maxWords }).map((_, i) => (
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
                        Array.from({ length:maxWords }).map((_, i) => (
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

            <Keyboard
                onKeyPress={(key) => handleLetterInput(key, "custom")}
                onBackspace={() => handleBackspace("custom")}
                onEnter={() => handleEnter("custom")}
            />

            {/* <Keyboard
            onKeyPress={(key) => {
                setGuess(prev => {
                    if (prev.length < maxWords && turn !== 0) {
                        if (/^[a-zA-Z]$/.test(key)) {
                            return [...prev, key.toUpperCase()];
                        }
                    }
                    return prev;
                });
            }}
            onBackspace={() => setGuess(prev => prev.slice(0, -1))}
            onEnter={() => {
                if (turn !== 0) {
                    const g = guess.map(e => e.toUpperCase());
                    const test = guess.map(e => e.toUpperCase()).join("");
                    const setWord = isWord.split("");
                    data[turn] = [];

                    if (!isValidWord(test)) {
                        return;
                    }

                    for (let i = 0; i < g.length; i++) {
                        data[turn].push({letter: g[i], status: "X"});
                    }

                    if (g.length === maxWords) {
                        // 2. Exact matches
                        for (let i = 0; i < g.length; i++) {
                            if (g[i] === isWord[i]) {
                                data[turn][i].status = "O";
                                setWord[i] = "";
                            }
                        }

                        // 3. Semi matches
                        for (let i = 0; i < g.length; i++) {
                            if (data[turn][i].status === "X") {
                                if (setWord.includes(g[i])) {
                                    data[turn][i].status = "I";
                                    const index = setWord.indexOf(g[i]);

                                    if (index !== -1) {
                                        setWord.splice(index, 1);
                                    }

                                    console.log(setWord);
                                }
                            }
                        }

                        setDone(prev => ({...prev, [`line${turn}`]: true}));
                        setTurn(turn + 1);
                        const nextTurn = turn + 1;

                        setTimeout(() => setGuess([]), 0);
                        if (data[turn].every(item => item.status === "O")) {
                            setTurn(0);
                            setShow(true);
                            return;
                        }

                        if (nextTurn > 6) {
                            setTurn(0);
                            setShow(true);
                            console.log("kalah ");
                            return;
                        }
                    }
                }

                if (turn === 0){
                    data = {};
                    setGuess([]);
                    setTurn(1);
                    setDone({
                        line1: false,
                        line2: false,
                        line3: false,
                        line4: false,
                        line5: false,
                        line6: false
                    });
                    const filteredWords = wordList.filter(w => w.length === maxWords);
                    setIsWord(filteredWords[Math.floor(Math.random() * filteredWords.length)].toUpperCase());
                    return;
                }
            }}
        /> */}
        </main>
    )
}

