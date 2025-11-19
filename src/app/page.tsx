"use client";

// O = Correct, I = Semi Correct, X = Wrong
import Keyboard from "@/components/keyboard";
import Navbar from "@/components/navbar";
import PopUp from "@/components/pop-up";
import { useEffect, useRef, useState } from "react";
import randomWord from "@/components/data/word-idn.json"
import { useDispatch, useSelector } from "react-redux";
import SurrendPopUp from "@/components/surrend-pop-up";
import { rootState } from "@/store";
import { setBoxCount, setInfo, setSetting, setSurrend } from "@/store/state";
import InfoPopUp from "@/components/info-pop-up";
import SettingPopUp from "@/components/setting-pop-up";

type LetterData = {
  letter: string;
  status: "O" | "I" | "X";
};

// const maxWords: number = 6;
const wordList: string[] = randomWord.kata;
const wordSet = new Set(wordList);
let data: Record<number, LetterData[]> = {};
let keyboardList: LetterData[] = []

// const filteredWords = wordList.filter(w => w.length === maxWords);
// const word = filteredWords[Math.floor(Math.random() * filteredWords.length)].toUpperCase();
// const word = "PINTU";


const isValidWord = (guess: string) =>  {
    return wordSet.has(guess.toLowerCase());
}

export default function MainPage() {
    const darkMode = useSelector((state: rootState) => state.stateData.darkMode);
    const maxWords = useSelector((state: rootState) => state.stateData.boxCount);
    const info = useSelector((state: rootState) => state.stateData.info);
    const surrend = useSelector((state: rootState) => state.stateData.surrend);
    const setting = useSelector((state: rootState) => state.stateData.setting);
    const dispatch = useDispatch();

    const [ guess, setGuess ] = useState<string[]>([]);
    const [ turn, setTurn ] = useState(1);
    const [ win, setWin ] = useState("");
    const [ show, setShow ] = useState(false);
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

    // function to handle keyboard list status
    const updateKeyboardList = (letter: string, status: "O" | "I" | "X") => {
        const idx = keyboardList.findIndex(k => k.letter === letter);

        if (idx !== -1) {
            // Upgrade only if new status is stronger
            const order = { "X": 0, "I": 1, "O": 2 };
            if (order[status] > order[keyboardList[idx].status]) {
                keyboardList[idx].status = status;
            }
        } else {
            keyboardList.push({ letter, status });
        }
    };

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
        keyboardList = []
        setGuess([]);
        setTurn(1);
        setShow(false);
        setWin("");
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
            // keyboardList.push({letter: g[i], status: "X"})
            updateKeyboardList(g[i], "X");
        }

        if (g.length == (maxWords)) {
            // word that at correct position
            for (let i = 0; i < g.length; i++) {
                if (g[i] === isWord[i]) {
                    data[turn][i].status = "O";
                    // keyboardList[i].status = "O";
                    updateKeyboardList(g[i], "O");
                    setWord[i] = "";
                }
            }

            // word that at wrong position
            for (let i = 0; i < g.length; i++) {
                if (data[turn][i].status === "X") {
                    if (setWord.includes(g[i])) {
                        data[turn][i].status = "I";
                        // keyboardList[i].status = "I";
                        updateKeyboardList(g[i], "I")
                        const index = setWord.indexOf(g[i]);
                        setWord.splice(index, 1);
                    }
                }
            }

            setDone(prev => ({...prev, [`line${turn}`]: true}))
            setTurn(turn + 1);
            const nextTurn = turn + 1
            // setTimeout(() => setGuess([]), 0);
            setGuess([]);

            // checking if all word is right
            if (data[turn].every(item => item.status === "O")) {
                setTurn(0)
                setTimeout(() => {
                    setWin("win")
                }, 700);
                setShow(true)
                return;
            }

            // checking if player having none chances
            if (nextTurn > 6) {
                setTurn(0)
                setTimeout(() => {
                    setWin("lose")
                }, 700);
                setShow(true)
                return;
            }
        }
    };
    useEffect(() => {
        if (maxWords) {
            resetGame();
        }
    }, [maxWords]);

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
        <main className={`main ${darkMode ? "bg-black text-white": "bg-white text-black"}`}>

            <SettingPopUp
                changeBox={(num) => {
                    dispatch(setBoxCount(num));
                    resetGame();
                }}
                show={setting}
                onClose={() => dispatch(setSetting())}
            />

            <InfoPopUp
                show={info}
                onClose={() => dispatch(setInfo())}
            />

            <SurrendPopUp
                show={surrend}
                onClose={() => dispatch(setSurrend())}
                title="Apakah Anda Yakin?"
                message="Jika menyerah, anda tidak akan tahu apa kata rahasianya."
                playAgain={() => {
                    dispatch(setSurrend())
                    resetGame()
                }}
            />

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
                    playAgain={() => resetGame()}
                    title={"YOU WIN!!"}
                    message={"You correctly guess the word."}
                    answer={isWord}/>:

                win == "lose" ?
                <PopUp show={show}
                onClose={
                    () => {
                        setShow(false);
                        setWin("");
                    }
                }
                playAgain={() => resetGame()}
                title={"YOU LOSE!!"}
                message={"You cannot guess the word with given chance."}
                answer={isWord}/> : ""
            }

            <Navbar/>

            <div className="grid grid-rows-4 gap-[3px] mt-[85px] mb-9 font-bold lg:mt-[0px] lg:gap-[6px]">
                <div className={`grid ${
                        maxWords === 4
                        ? "grid-cols-4"
                        : maxWords === 5
                        ? "grid-cols-5"
                        : maxWords === 6
                        ? "grid-cols-6"
                        : "grid-cols-7"
                    } gap-[3px] lg:gap-[6px]`}>
                    {
                        Array.from({ length:maxWords }).map((_, i) => (
                            <div key={i} className={
                                done.line1 == false ?
                                darkMode ?
                                (guess.length > i && turn == 1) ? "box-dark-active" : "box-dark" :
                                (guess.length > i && turn == 1) ? "box-light-active" : "box-light" :
                                data[1][i].status === "O" ? "box-correct" :
                                data[1][i].status === "I" ? "box-semi-correct" :
                                data[1][i].status === "X" ? "box-incorrect" : "box-light"
                            }
                            >
                                {done.line1 == false ? turn == 1 ? guess[i] : "" : data[1][i].letter}
                            </div>
                        ))
                    }
                </div>
                <div className={`grid ${
                        maxWords === 4
                        ? "grid-cols-4"
                        : maxWords === 5
                        ? "grid-cols-5"
                        : maxWords === 6
                        ? "grid-cols-6"
                        : "grid-cols-7"
                    } gap-[3px] lg:gap-[6px]`}>
                    {
                        Array.from({ length:maxWords }).map((_, i) => (
                            <div key={i} className={
                                done.line2 == false ?
                                darkMode ?
                                (guess.length > i && turn == 2) ? "box-dark-active" : "box-dark" :
                                (guess.length > i && turn == 2) ? "box-light-active" : "box-light" :
                                data[2][i].status === "O" ? "box-correct" :
                                data[2][i].status === "I" ? "box-semi-correct" :
                                data[2][i].status === "X" ? "box-incorrect" : "test"

                            }
                            >
                                {done.line2 == false ? turn == 2 ? guess[i] : "" : data[2][i].letter}
                            </div>
                        ))
                    }
                </div>
                <div className={`grid ${
                        maxWords === 4
                        ? "grid-cols-4"
                        : maxWords === 5
                        ? "grid-cols-5"
                        : maxWords === 6
                        ? "grid-cols-6"
                        : "grid-cols-7"
                    } gap-[3px] lg:gap-[6px]`}>
                    {
                        Array.from({ length:maxWords }).map((_, i) => (
                            <div key={i} className={
                                done.line3 == false ?
                                darkMode ?
                                (guess.length > i && turn == 3) ? "box-dark-active" : "box-dark" :
                                (guess.length > i && turn == 3) ? "box-light-active" : "box-light" :
                                data[3][i].status === "O" ? "box-correct" :
                                data[3][i].status === "I" ? "box-semi-correct" :
                                data[3][i].status === "X" ? "box-incorrect" : "test"
                            }
                            >
                                {done.line3 == false ? turn == 3 ? guess[i] : "" : data[3][i].letter}
                            </div>
                        ))
                    }
                </div>
                <div className={`grid ${
                        maxWords === 4
                        ? "grid-cols-4"
                        : maxWords === 5
                        ? "grid-cols-5"
                        : maxWords === 6
                        ? "grid-cols-6"
                        : "grid-cols-7"
                    } gap-[3px] lg:gap-[6px]`}>
                    {
                        Array.from({ length:maxWords }).map((_, i) => (
                            <div key={i} className={
                                done.line4 == false ?
                                darkMode ?
                                (guess.length > i && turn == 4) ? "box-dark-active" : "box-dark" :
                                (guess.length > i && turn == 4) ? "box-light-active" : "box-light" :
                                data[4][i].status === "O" ? "box-correct" :
                                data[4][i].status === "I" ? "box-semi-correct" :
                                data[4][i].status === "X" ? "box-incorrect" : "test"
                            }
                            >
                                {done.line4 == false ? turn == 4 ? guess[i] : "" : data[4][i].letter}
                            </div>
                        ))
                    }
                </div>
                <div className={`grid ${
                        maxWords === 4
                        ? "grid-cols-4"
                        : maxWords === 5
                        ? "grid-cols-5"
                        : maxWords === 6
                        ? "grid-cols-6"
                        : "grid-cols-7"
                    } gap-[3px] lg:gap-[6px]`}>
                    {
                        Array.from({ length:maxWords }).map((_, i) => (
                            <div key={i} className={
                                done.line5 == false ?
                                darkMode ?
                                (guess.length > i && turn == 5) ? "box-dark-active" : "box-dark" :
                                (guess.length > i && turn == 5) ? "box-light-active" : "box-light" :
                                data[5][i].status === "O" ? "box-correct" :
                                data[5][i].status === "I" ? "box-semi-correct" :
                                data[5][i].status === "X" ? "box-incorrect" : "test"
                            }
                            >
                                {done.line5 == false ? turn == 5 ? guess[i] : "" : data[5][i].letter}
                            </div>
                        ))
                    }
                </div>
                <div className={`grid ${
                        maxWords === 4
                        ? "grid-cols-4"
                        : maxWords === 5
                        ? "grid-cols-5"
                        : maxWords === 6
                        ? "grid-cols-6"
                        : "grid-cols-7"
                    } gap-[3px] lg:gap-[6px]`}>
                    {
                        Array.from({ length:maxWords }).map((_, i) => (
                            <div key={i} className={
                                done.line6 == false ?
                                darkMode ?
                                (guess.length > i && turn == 6) ? "box-dark-active" : "box-dark" :
                                (guess.length > i && turn == 6) ? "box-light-active" : "box-light" :
                                data[6][i].status === "O" ? "box-correct" :
                                data[6][i].status === "I" ? "box-semi-correct" :
                                data[6][i].status === "X" ? "box-incorrect" : "test"
                            }
                            >
                                {done.line6 == false ? turn == 6 ? guess[i] : "" : data[6][i].letter}
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* <div className="absolute flex items-center justify-center text-white text-xl bottom-0 w-full h-[125px] bg-[#872341] ">
                <img src={"/hug-anime.gif"} className="w-[100px] "/>
                <p className="px-2"></p>
                <img src={"/tenor.gif"} className="w-[75px] "/>
            </div> */}

            <Keyboard
                letterStatus={keyboardList}
                onKeyPress={(key) => handleLetterInput(key, "custom")}
                onBackspace={() => handleBackspace("custom")}
                onEnter={() => handleEnter("custom")}
            />

        </main>
    )
}

