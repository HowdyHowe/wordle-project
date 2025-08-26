
import { rootState } from "@/store";
import { RxCross1 } from "react-icons/rx";
import { useSelector } from "react-redux";

type SettingPopUpProps = {
  show: boolean;
  onClose: () => void;
};

export default function SettingPopUp({  show, onClose}: SettingPopUpProps) {
  const darkMode = useSelector((state: rootState) => state.stateData.darkMode)

  if (!show) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center z-10">
      {/* Dark overlay */}
      <div className="fixed inset-0 w-full h-full bg-black opacity-60" />

      {/* Popup content */}
      <div className={`relative flex flex-col items-center justify-center w-[300px] h-[450px] rounded-md z-20 px-4 ${darkMode ? "bg-[#2c2c2c]" : "bg-white"}`}>
        <div className="flex flex-col items-center justify-start text-center w-full h-full mt-10 mb-3 overflow-y-auto">
            <h2 className="text-xl font-bold mb-4 bg-[#dfe2ff] w-full rounded-md">Pengaturan</h2>

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