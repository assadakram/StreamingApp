import React from "react";
import ReactDOM from "react-dom";
import { RxCross2 } from "react-icons/rx";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-65 flex items-center justify-center z-50">
      <div className="bg-black p-4 rounded-lg shadow-lg w-full h-full lg:w-1/2  relative">
        <div className="absolute top-4 right-4 bg-gray-800 rounded-full p-2 cursor-pointer">
          <RxCross2 className="text-white" size={24} onClick={onClose} />
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
