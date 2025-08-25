
import { rootState } from "@/store";
import { RxCross1 } from "react-icons/rx";
import { useSelector } from "react-redux";

type InfoPopUpProps = {
  show: boolean;
  onClose: () => void;
};

export default function InfoPopUp({  show, onClose}: InfoPopUpProps) {
  const darkMode = useSelector((state: rootState) => state.stateData.darkMode)

  if (!show) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center z-10">
      {/* Dark overlay */}
      <div className="fixed inset-0 w-full h-full bg-black opacity-60" />

      {/* Popup content */}
      <div className={`relative flex flex-col items-center justify-center w-[300px] h-[450px] rounded-md z-20 px-2 ${darkMode ? "bg-[#2c2c2c]" : "bg-white"}`}>
        <div className="flex flex-col items-center justify-start w-full h-full mt-10 mb-3 overflow-y-scroll">
            <h2 className="text-xl font-bold mb-2">📖 Cara Bermain Wordle</h2>
            <p className="text-center text-lg">Tebak Kata</p>
            <p className="mb-2 text-center text-xs">Kamu harus menebak kata dalam 6 percobaan.</p>
            <p className="text-center text-lg">Masukkan Jawaban</p>
            <p className="mb-2 text-center text-xs">Ketik kata lalu tekan Enter.</p>
            <p className="text-center text-lg">Warna Petunjuk</p>
            <p className="mb-2 text-center text-xs">Setelah menebak, kotak huruf akan berubah warna untuk memberi petunjuk:</p>
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