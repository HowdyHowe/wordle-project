
import { rootState } from "@/store"
import { toggleTheme } from "@/store/theme"
import { BiSun } from "react-icons/bi"
import { BsSun } from "react-icons/bs"
import { CgSun } from "react-icons/cg"
import { CiDark, CiLight, CiSun } from "react-icons/ci"
import { FaInfo, FaSun } from "react-icons/fa6"
import { FiSun } from "react-icons/fi"
import { GoGear } from "react-icons/go"
import { IoFlagOutline } from "react-icons/io5"
import { LiaSun } from "react-icons/lia"
import { MdLight, MdLightMode } from "react-icons/md"
import { RxGear, RxSymbol } from "react-icons/rx"
import { useDispatch, useSelector } from "react-redux"

export default function Navbar() {
    const dispatch = useDispatch();
    const darkMode = useSelector((state: rootState) => state.theme.darkMode)

    return (
        <nav className="fixed top-0 flex items-center justify-center w-full">
            <div className="grid grid-cols-2 w-[300px] h-[75px] rounded-xl lg:w-[600px]">
                <div className="flex items-center justify-start text-2xl font-bold">WORDLE.</div>
                <div className="flex items-center justify-evenly">
                    <IoFlagOutline className={`w-[40px] h-[40px] p-[9px] rounded-lg ${darkMode ? "bg-[#0e0e0e] lg:hover:bg-[#1f1f1f]" : "bg-[#dfe2ff] lg:hover:bg-[#d8dbff]"}`}/>
                    <RxSymbol className={`w-[40px] h-[40px] p-[9px] rounded-lg ${darkMode ? "bg-[#0e0e0e] lg:hover:bg-[#1f1f1f]" : "bg-[#dfe2ff] lg:hover:bg-[#d8dbff]"}`}/>
                    <FaInfo className={`w-[40px] h-[40px] p-[11px] rounded-lg ${darkMode ? "bg-[#0e0e0e] lg:hover:bg-[#1f1f1f]" : "bg-[#dfe2ff] lg:hover:bg-[#d8dbff]"}`}/>
                    <GoGear className={`w-[40px] h-[40px] p-[8px] rounded-lg ${darkMode ? "bg-[#0e0e0e] lg:hover:bg-[#1f1f1f]" : "bg-[#dfe2ff] lg:hover:bg-[#d8dbff]"}`}/>

                    {
                        darkMode ?
                        <button onClick={() => dispatch(toggleTheme())}>
                            <CiDark className={`w-[40px] h-[40px] p-[6px] rounded-lg duration-200 ${darkMode ? "bg-[#0e0e0e] lg:hover:bg-[#1f1f1f]" : "bg-[#dfe2ff] lg:hover:bg-[#d8dbff]"}`}/>
                        </button>:
                        <button onClick={() => dispatch(toggleTheme())}>
                            <CiLight className={`w-[40px] h-[40px] p-[7px] rounded-lg duration-200 ${darkMode ? "bg-[#0e0e0e] lg:hover:bg-[#1f1f1f]" : "bg-[#dfe2ff] lg:hover:bg-[#d8dbff]"}`}/>
                        </button>
                    }
                </div>
            </div>
        </nav>
    )
}