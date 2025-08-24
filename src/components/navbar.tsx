
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
            <div className="flex flex-row items-center justify-between w-full mx-2 h-[75px] rounded-xl lg:w-[500px]">
                <div className="flex items-center justify-start text-lg font-bold">WORDLE.</div>
                <div className="flex items-center justify-evenly w-[200px] lg:w-[300px]">
                    <IoFlagOutline className={`w-[30px] h-[30px] p-[7px] rounded-md ${darkMode ? "bg-[#0e0e0e] lg:hover:bg-[#1f1f1f]" : "bg-[#dfe2ff] lg:hover:bg-[#d8dbff]"}`}/>
                    <RxSymbol className={`w-[30px] h-[30px] p-[7px] rounded-md ${darkMode ? "bg-[#0e0e0e] lg:hover:bg-[#1f1f1f]" : "bg-[#dfe2ff] lg:hover:bg-[#d8dbff]"}`}/>
                    <FaInfo className={`w-[30px] h-[30px] p-[9px] rounded-md ${darkMode ? "bg-[#0e0e0e] lg:hover:bg-[#1f1f1f]" : "bg-[#dfe2ff] lg:hover:bg-[#d8dbff]"}`}/>
                    <GoGear className={`w-[30px] h-[30px] p-[6px] rounded-md ${darkMode ? "bg-[#0e0e0e] lg:hover:bg-[#1f1f1f]" : "bg-[#dfe2ff] lg:hover:bg-[#d8dbff]"}`}/>

                    {
                        darkMode ?
                        <button onClick={() => dispatch(toggleTheme())}>
                            <CiLight className={`w-[30px] h-[30px] p-[5px] rounded-md duration-200 ${darkMode ? "bg-[#0e0e0e] lg:hover:bg-[#1f1f1f]" : "bg-[#dfe2ff] lg:hover:bg-[#d8dbff]"}`}/>
                        </button>:
                        <button onClick={() => dispatch(toggleTheme())}>
                            <CiDark className={`w-[30px] h-[30px] p-[4px] rounded-md duration-200 ${darkMode ? "bg-[#0e0e0e] lg:hover:bg-[#1f1f1f]" : "bg-[#dfe2ff] lg:hover:bg-[#d8dbff]"}`}/>
                        </button>
                    }
                </div>
            </div>
        </nav>
    )
}