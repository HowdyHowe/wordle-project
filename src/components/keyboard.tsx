
import { rootState } from "@/store";
import { useSelector } from "react-redux";

type LetterData = {
  letter: string;
  status: "O" | "I" | "X";
};

type KeyboardProps = {
    letterStatus: LetterData[],
    onKeyPress: (key: string) => void;
    onBackspace: () => void;
    onEnter: () => void;
};


export default function Keyboard({ letterStatus, onKeyPress, onBackspace, onEnter }: KeyboardProps) {
    const darkMode = useSelector((state: rootState) => state.stateData.darkMode)

    return (
        <div className="grid grid-rows-3 gap-1 w-full font-bold lg:gap-2 lg:w-[60%] lg:max-w-[800px] lg:min-w-[350px]">
            {/* Row 1 */}
            <div className="grid grid-cols-10 gap-1 w-full lg:gap-2 lg:min-w-full">
                {"QWERTYUIOP".split("").map((letter) => {
                    const found = letterStatus.find(l => l.letter === letter);
                    const status = found?.status || "";

                    return (
                        <button
                            key={letter}
                            className={`keyboard-key ${
                                status === "O" ? `bg-[#2eb812] text-white` :
                                status === "I" ? "bg-[#dddd00] text-white" :
                                status === "X" ? "bg-[#b6b6b6] text-white" :
                                darkMode ? "bg-[#0e0e0e] active:bg-[#2c2c2c] lg:hover:bg-[#1f1f1f]"
                                        : "bg-[#dfe2ff] active:bg-[#c7c9ff] lg:hover:bg-[#d8dbff]"
                            }`}
                            onClick={() => onKeyPress(letter)}
                        >
                            {letter}
                        </button>
                    )
                })}
                </div>

            {/* Row 2 */}
            <div className="grid grid-cols-9 w-[95%] mx-auto gap-1 lg:gap-2 lg:min-w-[750px]">
                {"ASDFGHJKL".split("").map((letter) => {
                    const found = letterStatus.find(l => l.letter === letter);
                    const status = found?.status || "";

                    return (
                        <button
                            key={letter}
                            className={`keyboard-key ${
                                status === "O" ? "bg-[#2eb812] text-white" :
                                status === "I" ? "bg-[#dddd00] text-white" :
                                status === "X" ? "bg-[#b6b6b6] text-white" :
                                darkMode ? "bg-[#0e0e0e] active:bg-[#2c2c2c] lg:hover:bg-[#1f1f1f]"
                                        : "bg-[#dfe2ff] active:bg-[#c7c9ff] lg:hover:bg-[#d8dbff]"
                            }`}
                            onClick={() => onKeyPress(letter)}
                        >
                            {letter}
                        </button>
                    )
                })}
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-11 gap-1 w-full lg:gap-2 lg:min-w-full">
                <button
                    className={`keyboard-key col-span-2 ${
                            darkMode ? "bg-[#0e0e0e] active:bg-[#2c2c2c] lg:hover:bg-[#1f1f1f]" : "bg-[#dfe2ff] active:bg-[#c7c9ff] lg:hover:bg-[#d8dbff]"
                        }`}
                    onClick={onBackspace}
                >
                    Delete
                </button>

                {"ZXCVBNM".split("").map((letter) => {
                    const found = letterStatus.find(l => l.letter === letter);
                    const status = found?.status || "";

                    return (
                        <button
                            key={letter}
                            className={`keyboard-key ${
                                status === "O" ? "bg-[#2eb812] text-white" :
                                status === "I" ? "bg-[#dddd00] text-white" :
                                status === "X" ? "bg-[#b6b6b6] text-white" :
                                darkMode ? "bg-[#0e0e0e] active:bg-[#2c2c2c] lg:hover:bg-[#1f1f1f]"
                                        : "bg-[#dfe2ff] active:bg-[#c7c9ff] lg:hover:bg-[#d8dbff]"
                            }`}
                            onClick={() => onKeyPress(letter)}
                        >
                            {letter}
                        </button>
                    )
                })}

                <button
                    className={`keyboard-key col-span-2 ${
                            darkMode ? "bg-[#0e0e0e] active:bg-[#2c2c2c] lg:hover:bg-[#1f1f1f]" : "bg-[#dfe2ff] active:bg-[#c7c9ff] lg:hover:bg-[#d8dbff]"
                        }`}
                    onClick={onEnter}
                >
                    Enter
                </button>
            </div>
        </div>
    );
}