import { FaInfo } from "react-icons/fa6"
import { IoFlagOutline } from "react-icons/io5"
import { RxGear, RxSymbol } from "react-icons/rx"

export default function Navbar() {
    return (
        <nav className="fixed top-0 flex items-center justify-center w-full">
            <div className="grid grid-cols-2 w-[300px] h-[75px] rounded-xl lg:w-[600px]">
                <div className="flex items-center justify-start text-2xl font-bold">WORDLE.</div>
                <div className="flex items-center justify-evenly">
                    <IoFlagOutline className="w-[40px] h-[40px] p-3 bg-[#dfe2ff] rounded-md"/>
                    <RxSymbol className="w-[40px] h-[40px] p-3 bg-[#dfe2ff] rounded-md"/>
                    <FaInfo className="w-[40px] h-[40px] p-[13px] bg-[#dfe2ff] rounded-md"/>
                    <RxGear className="w-[40px] h-[40px] p-[11px] bg-[#dfe2ff] rounded-md"/>
                </div>
            </div>
        </nav>
    )
}