import { FaFlag, FaGear, FaInfo } from "react-icons/fa6"
import { RxSymbol } from "react-icons/rx"

export default function Navbar() {
    return (
        <nav className="fixed top-0 flex items-center justify-center w-full">
            <div className="grid grid-cols-2 w-[50%] h-[75px] rounded-xl">
                <div className="flex items-center justify-start">Logo</div>
                <div className="flex items-center justify-evenly">
                    <p>IDN</p>
                    <FaFlag className="w-[50px] h-[50px] p-4 bg-[#d1d1d1] rounded-xl"/>
                    <RxSymbol className="w-[50px] h-[50px] p-4 bg-[#d1d1d1] rounded-xl"/>
                    <FaInfo className="w-[50px] h-[50px] p-4 bg-[#d1d1d1] rounded-xl"/>
                    <FaGear className="w-[50px] h-[50px] p-4 bg-[#d1d1d1] rounded-xl"/>
                </div>
            </div>
        </nav>
    )
}