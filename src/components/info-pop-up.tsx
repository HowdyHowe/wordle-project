
import { rootState } from "@/store";
import { BiChevronDown } from "react-icons/bi";
import { RxChevronDown, RxCross1 } from "react-icons/rx";
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
      <div className={`relative flex flex-col items-center justify-center w-[300px] h-[450px] rounded-md z-20 px-4 lg:w-[400px] ${darkMode ? "bg-[#2c2c2c]" : "bg-white"}`}>
        <div className="flex flex-col items-center justify-start text-center w-full h-full mt-10 mb-3 overflow-y-scroll">
            <h2 className="text-xl font-bold mb-4 bg-[#dfe2ff] w-full h-[50px] rounded-md">Cara Bermain Wordle</h2>
            <p className="text-lg">1. Tebak Kata</p>
            <p className="font-fredokalight mb-2 text-xs">Kamu harus menebak kata dalam 6 percobaan, ketik kata lalu tekan Enter.</p>
            <p className="text-lg">2. Warna Petunjuk</p>
            <p className="font-fredokalight mb-2 text-xs">Setelah menebak, kotak huruf akan berubah warna untuk memberi petunjuk, perhatikan warna dari tebakan sebelumnya untuk membantu menebak kata berikutnya.</p>
            <div className="flex flex-row justify-evenly w-full">
                <div className="box-correct">J</div>
                <div className="box-correct">E</div>
                <div className="box-semi-correct">J</div>
                <div className="box-incorrect">A</div>
                <div className="box-incorrect">K</div>
            </div>
            <div className="flex items-center justify-evenly w-full">
                <RxChevronDown size={30} color="#2c2c2c"/>
                <RxChevronDown size={30} color="#2c2c2c" className="mx-8 lg:mx-[50px]"/>
                <RxChevronDown size={30} color="#2c2c2c"/>
            </div>
            <div className="flex items-center justify-evenly w-full">
                <p className="font-fredokalight mb-2 px-2 text-xs">Huruf yang benar, dan posisinya juga benar.</p>
                <p className="font-fredokalight mb-2 px-2 text-xs">Huruf yang ada di kata, tapi posisi tidak benar.</p>
                <p className="font-fredokalight mb-2 px-2 text-xs">Huruf yang tidak ada di kata sama sekali.</p>
            </div>
            <p className="text-lg">3. Menang & Kalah</p>
            <p className="font-fredokalight mb-2 text-xs">🎉 Jika berhasil menebak kata dengan benar dalam 6 percobaan → Menang!</p>
            <p className="font-fredokalight mb-2 text-xs">❌ Jika percobaan habis → Kata jawaban akan ditampilkan.</p>
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