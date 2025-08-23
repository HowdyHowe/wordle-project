
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
                    <IoFlagOutline className="w-[40px] h-[40px] p-[9px] bg-[#dfe2ff] rounded-lg"/>
                    <RxSymbol className="w-[40px] h-[40px] p-[9px] bg-[#dfe2ff] rounded-lg"/>
                    <FaInfo className="w-[40px] h-[40px] p-[11px] bg-[#dfe2ff] rounded-lg"/>
                    <GoGear className="w-[40px] h-[40px] p-[8px] bg-[#dfe2ff] rounded-lg"/>

                    {
                        darkMode ?
                        <button onClick={() => dispatch(toggleTheme())}>
                            <CiDark className="w-[40px] h-[40px] p-[6px] bg-[#dfe2ff] rounded-lg lg:hover:bg-[#d8dbff] duration-200"/>
                        </button>:
                        <button onClick={() => dispatch(toggleTheme())}>
                            <CiLight className="w-[40px] h-[40px] p-[7px] bg-[#dfe2ff] rounded-lg lg:hover:bg-[#d8dbff] duration-200"/>
                        </button>
                    }
                </div>
            </div>
        </nav>
    )
}