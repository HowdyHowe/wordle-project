import { FaFlag, FaGear, FaInfo } from "react-icons/fa6"
import { RxSymbol } from "react-icons/rx"

export default function Navbar() {
    return (
        <nav className="fixed top-0 flex items-center justify-center w-full">
            <div className="grid grid-cols-2 w-[300px] h-[75px] rounded-xl lg:w-[500px]">
                <div className="flex items-center justify-start">Logo</div>
                <div className="flex items-center justify-evenly">
                    <FaFlag className="w-[40px] h-[40px] p-3 bg-[#d1d1d1] rounded-md"/>
                    <RxSymbol className="w-[40px] h-[40px] p-3 bg-[#d1d1d1] rounded-md"/>
                    <FaInfo className="w-[40px] h-[40px] p-3 bg-[#d1d1d1] rounded-md"/>
                    <FaGear className="w-[40px] h-[40px] p-3 bg-[#d1d1d1] rounded-md"/>
                </div>
            </div>
        </nav>
    )
}