import React from "react";
import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean; // 모달이 열려 있는지 여부
  onClose: () => void; // 닫기 버튼을 눌렀을 때 실행할 함수
  title: string; // 모달의 제목
  children: React.ReactNode; // 모달 내부의 내용
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // ✅ 모달이 닫히면 원상복구
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center w-screen h-screen p-8 bg-black bg-opacity-50 transition-opacity ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } pointer-events-auto z-50`}
      onClick={onClose}
    >
      <div
        className="bg-white w-full p-8 rounded-lg shadow-lg relative pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 */}
        <div className="flex justify-between items-center mb-4">
          {/* 모달 제목 */}
          <h2 className="text-[32px] font-bold">{title}</h2>
          <button onClick={onClose} className="text-[24px]">
            ✖
          </button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto">
          {/* 모달 내용 (children을 통해 원하는 내용이 동적으로 들어옴) */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
