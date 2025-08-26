
import { rootState } from "@/store"
import { setInfo, setSetting, setSurrend, toggleTheme } from "@/store/state"
import { CiDark, CiLight } from "react-icons/ci"
import { FaInfo } from "react-icons/fa6"
import { GoGear } from "react-icons/go"
import { IoFlagOutline } from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux"

export default function Navbar() {
    const dispatch = useDispatch();
    const darkMode = useSelector((state: rootState) => state.stateData.darkMode)

    return (
        <nav className="fixed top-0 flex items-center justify-center w-full">
            <div className="flex flex-row items-center justify-between w-full mx-2 h-[75px] rounded-xl lg:w-[500px]">
                <div className="flex items-center justify-start text-lg font-bold">WORDLE.</div>
                <div className="flex items-center justify-end w-[200px] lg:w-[300px]">
                    <IoFlagOutline onClick={() => dispatch(setSurrend())} className={`w-[30px] h-[30px] p-[7px] rounded-md ${darkMode ? "bg-[#0e0e0e] lg:hover:bg-[#1f1f1f]" : "bg-[#dfe2ff] lg:hover:bg-[#d8dbff]"}`}/>
                    <FaInfo onClick={() => dispatch(setInfo())} className={`w-[30px] h-[30px] p-[9px] ml-3 rounded-md ${darkMode ? "bg-[#0e0e0e] lg:hover:bg-[#1f1f1f]" : "bg-[#dfe2ff] lg:hover:bg-[#d8dbff]"}`}/>
                    <GoGear onClick={() => dispatch(setSetting())} className={`w-[30px] h-[30px] p-[6px] ml-3 rounded-md ${darkMode ? "bg-[#0e0e0e] lg:hover:bg-[#1f1f1f]" : "bg-[#dfe2ff] lg:hover:bg-[#d8dbff]"}`}/>
                    {
                        darkMode ?
                            <CiLight role="button" tabIndex={0} onClick={() => dispatch(toggleTheme())} className={`w-[30px] h-[30px] ml-3 p-[5px] rounded-md duration-200 ${darkMode ? "bg-[#0e0e0e] lg:hover:bg-[#1f1f1f]" : "bg-[#dfe2ff] lg:hover:bg-[#d8dbff]"}`}/>
                        :
                            <CiDark role="button" tabIndex={0} onClick={() => dispatch(toggleTheme())} className={`w-[30px] h-[30px] ml-3 p-[4px] rounded-md duration-200 ${darkMode ? "bg-[#0e0e0e] lg:hover:bg-[#1f1f1f]" : "bg-[#dfe2ff] lg:hover:bg-[#d8dbff]"}`}/>
                    }
                </div>
            </div>
        </nav>
    )
}