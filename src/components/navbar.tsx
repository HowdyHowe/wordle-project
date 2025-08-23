
import { rootState } from "@/store"
import { toggleTheme } from "@/store/theme"
import { CiDark, CiLight } from "react-icons/ci"
import { FaInfo } from "react-icons/fa6"
import { GoGear } from "react-icons/go"
import { IoFlagOutline } from "react-icons/io5"
import { RxSymbol } from "react-icons/rx"
import { useDispatch, useSelector } from "react-redux"

export default function Navbar() {
    const dispatch = useDispatch();
    const darkMode = useSelector((state: rootState) => state.theme.darkMode)

    return (
        <nav className="fixed top-0 flex items-center justify-center w-full">
            <div className="flex flex-row items-center justify-between w-full mx-2 h-[75px] rounded-xl lg:w-[600px]">
                <div className="flex items-center justify-start text-lg font-bold lg:text-2xl">WORDLE.</div>
                <div className="flex items-center justify-evenly w-[200px] lg:w-[300px]">
                    <IoFlagOutline className={`w-[30px] h-[30px] p-[7px] rounded-lg lg:p-[9px] lg:w-[40px] lg:h-[40px] ${darkMode ? "bg-[#0e0e0e] lg:hover:bg-[#1f1f1f]" : "bg-[#dfe2ff] lg:hover:bg-[#d8dbff]"}`}/>
                    <RxSymbol className={`w-[30px] h-[30px] p-[7px] rounded-lg lg:p-[9px] lg:w-[40px] lg:h-[40px] ${darkMode ? "bg-[#0e0e0e] lg:hover:bg-[#1f1f1f]" : "bg-[#dfe2ff] lg:hover:bg-[#d8dbff]"}`}/>
                    <FaInfo className={`w-[30px] h-[30px] p-[9px] rounded-lg lg:p-[11px] lg:w-[40px] lg:h-[40px] ${darkMode ? "bg-[#0e0e0e] lg:hover:bg-[#1f1f1f]" : "bg-[#dfe2ff] lg:hover:bg-[#d8dbff]"}`}/>
                    <GoGear className={`w-[30px] h-[30px] p-[6px] rounded-lg lg:p-[8px] lg:w-[40px] lg:h-[40px] ${darkMode ? "bg-[#0e0e0e] lg:hover:bg-[#1f1f1f]" : "bg-[#dfe2ff] lg:hover:bg-[#d8dbff]"}`}/>

                    {
                        darkMode ?
                        <button onClick={() => dispatch(toggleTheme())}>
                            <CiDark className={`w-[30px] h-[30px] p-[4px] rounded-lg duration-200 lg:p-[6px] lg:w-[40px] lg:h-[40px] ${darkMode ? "bg-[#0e0e0e] lg:hover:bg-[#1f1f1f]" : "bg-[#dfe2ff] lg:hover:bg-[#d8dbff]"}`}/>
                        </button>:
                        <button onClick={() => dispatch(toggleTheme())}>
                            <CiLight className={`w-[30px] h-[30px] p-[5px] rounded-lg duration-200 lg:p-[7px] lg:w-[40px] lg:h-[40px] ${darkMode ? "bg-[#0e0e0e] lg:hover:bg-[#1f1f1f]" : "bg-[#dfe2ff] lg:hover:bg-[#d8dbff]"}`}/>
                        </button>
                    }
                </div>
            </div>
        </nav>
    )
}