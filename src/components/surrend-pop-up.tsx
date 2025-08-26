
import { rootState } from "@/store";
import { RxCross1 } from "react-icons/rx";
import { useSelector } from "react-redux";

type SurrendPopUpProps = {
  title: string;
  message: string;
  show: boolean;
  onClose: () => void;
  playAgain: () => void;
};

export default function SurrendPopUp({ title, message, show, onClose, playAgain }: SurrendPopUpProps) {
  const darkMode = useSelector((state: rootState) => state.stateData.darkMode)

  if (!show) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center z-10">
      {/* Dark overlay */}
      <div className="fixed inset-0 w-full h-full bg-black opacity-60" />

      {/* Popup content */}
      <div className={`relative flex flex-col items-center justify-center w-[300px] h-[450px] rounded-md z-20 p-4 lg:w-[400px] ${darkMode ? "bg-[#2c2c2c]" : "bg-white"}`}>
        <h2 className="text-xl font-bold mb-6">{title}</h2>
        <p className="mb-2 text-center text-md">{message}</p>
        <button onClick={playAgain} className="flex items-center justify-center w-[150px] h-[40px] text-black bg-[#c7c9ff] border border-[#2c2c2c] mt-10 text-md rounded-lg duration-200 lg:hover:bg-[#d8dbff]">Menyerah</button>

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