// export default function Keyboard() {
//     return (
//         <div className="grid grid-rows-3 w-[60%] max-w-[800px] min-w-[350px] gap-2 font-mono font-bold">
//             <div className="grid grid-cols-10 gap-2">
//                 <div className="keyboard-key">Q</div>
//                 <div className="keyboard-key">W</div>
//                 <div className="keyboard-key">E</div>
//                 <div className="keyboard-key">R</div>
//                 <div className="keyboard-key">T</div>
//                 <div className="keyboard-key">Y</div>
//                 <div className="keyboard-key">U</div>
//                 <div className="keyboard-key">I</div>
//                 <div className="keyboard-key">O</div>
//                 <div className="keyboard-key">P</div>
//             </div>
//             <div className="grid grid-cols-9 gap-2">
//                 <div className="keyboard-key">A</div>
//                 <div className="keyboard-key">S</div>
//                 <div className="keyboard-key">D</div>
//                 <div className="keyboard-key">F</div>
//                 <div className="keyboard-key">G</div>
//                 <div className="keyboard-key">H</div>
//                 <div className="keyboard-key">J</div>
//                 <div className="keyboard-key">K</div>
//                 <div className="keyboard-key">L</div>
//             </div>
//             <div className="grid grid-cols-11 gap-2">
//                 <div className="keyboard-key col-span-2">Delete</div>
//                 <div className="keyboard-key">Z</div>
//                 <div className="keyboard-key">X</div>
//                 <div className="keyboard-key">C</div>
//                 <div className="keyboard-key">V</div>
//                 <div className="keyboard-key">B</div>
//                 <div className="keyboard-key">N</div>
//                 <div className="keyboard-key">M</div>
//                 <div className="keyboard-key col-span-2">Enter</div>
//             </div>
//         </div>
//     )
// }

type KeyboardProps = {
    onKeyPress: (key: string) => void;
    onBackspace: () => void;
    onEnter: () => void;
};

export default function Keyboard({ onKeyPress, onBackspace, onEnter }: KeyboardProps) {
    return (
        <div className="grid grid-rows-3 w-[60%] max-w-[800px] min-w-[350px] gap-2 font-mono font-bold">
            {/* Row 1 */}
            <div className="grid grid-cols-10 gap-2">
                {"QWERTYUIOP".split("").map((letter) => (
                    <div
                        key={letter}
                        className="keyboard-key"
                        onClick={() => onKeyPress(letter)}
                    >
                        {letter}
                    </div>
                ))}
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-9 gap-2">
                {"ASDFGHJKL".split("").map((letter) => (
                    <div
                        key={letter}
                        className="keyboard-key"
                        onClick={() => onKeyPress(letter)}
                    >
                        {letter}
                    </div>
                ))}
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-11 gap-2">
                <div
                    className="keyboard-key col-span-2"
                    onClick={onBackspace}
                >
                    Delete
                </div>

                {"ZXCVBNM".split("").map((letter) => (
                    <div
                        key={letter}
                        className="keyboard-key"
                        onClick={() => onKeyPress(letter)}
                    >
                        {letter}
                    </div>
                ))}

                <div
                    className="keyboard-key col-span-2"
                    onClick={onEnter}
                >
                    Enter
                </div>
            </div>
        </div>
    );
}