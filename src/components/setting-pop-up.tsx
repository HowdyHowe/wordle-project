
import { rootState } from "@/store";
import { RxCross1 } from "react-icons/rx";
import { useSelector } from "react-redux";

type SettingPopUpProps = {
  show: boolean;
  changeBox: (num: number) => void;
  onClose: () => void;
};

export default function SettingPopUp({ show, onClose, changeBox }: SettingPopUpProps) {
  const darkMode = useSelector((state: rootState) => state.stateData.darkMode);
  const box = useSelector((state: rootState) => state.stateData.boxCount);

  if (!show) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center z-10">
      {/* Dark overlay */}
      <div className="fixed inset-0 w-full h-full bg-black opacity-60" />

      {/* Popup content */}
      <div className={`relative flex flex-col items-center justify-center w-[300px] h-[450px] rounded-md z-20 px-4 lg:w-[400px] ${darkMode ? "bg-[#2c2c2c]" : "bg-white"}`}>
        <div className="flex flex-col items-center justify-start text-center w-full h-full mt-10 mb-3 overflow-y-auto">
            <h2 className="text-xl font-bold mb-4 bg-[#dfe2ff] text-black w-full rounded-md">Pengaturan</h2>

            <p className="font-bold mb-4 text-lg">Panjang dari kata</p>
            <div className={`flex flex-row items-center justify-evenly w-full pb-3 ${darkMode ? "border-b border-[#d1d1d1]" : "border-b border-black"}`}>
              <div onClick={() => changeBox(4)} className={`flex items-center justify-center w-[30px] h-[30px] ${darkMode ? "border border-white" : "border border-black"} rounded-md ${box === 4 ? "bg-[#dfe2ff] text-black" : ""}`}>4</div>
              <div onClick={() => changeBox(5)} className={`flex items-center justify-center w-[30px] h-[30px] ${darkMode ? "border border-white" : "border border-black"} rounded-md ${box === 5 ? "bg-[#dfe2ff] text-black" : ""}`}>5</div>
              <div onClick={() => changeBox(6)} className={`flex items-center justify-center w-[30px] h-[30px] ${darkMode ? "border border-white" : "border border-black"} rounded-md ${box === 6 ? "bg-[#dfe2ff] text-black" : ""}`}>6</div>
              <div onClick={() => changeBox(7)} className={`flex items-center justify-center w-[30px] h-[30px] ${darkMode ? "border border-white" : "border border-black"} rounded-md ${box === 7 ? "bg-[#dfe2ff] text-black" : ""}`}>7</div>
            </div>

        </div>

        {/* Close button */}
        <div
          className="absolute top-2 right-2 flex items-center justify-center w-[30px] h-[30px] cursor-pointer"
          onClick={onClose}
        >
          <RxCross1 size={25} />
        </div>
      </div>
    </div>
  );
}