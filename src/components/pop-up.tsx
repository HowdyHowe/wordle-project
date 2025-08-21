
import { RxCross1 } from "react-icons/rx";

type PopUpProps = {
  title: string;
  message: string;
  show: boolean;
  onClose: () => void;
};

export default function PopUp({ title, message, show, onClose }: PopUpProps) {
  if (!show) return null;

  return (
    <div className="absolute flex items-center justify-center w-full h-full z-10">
      {/* Dark overlay */}
      <div className="fixed inset-0 w-full h-full bg-black opacity-60" />

      {/* Popup content */}
      <div className="relative flex flex-col items-center justify-center w-[250px] h-[300px] bg-white rounded-md z-20 p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="mb-2 text-center">{message}</p>

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