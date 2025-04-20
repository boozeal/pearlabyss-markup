"use client";

import Image from "next/image";
import HeaderAccordion from "./HeaderAccordion";
interface MenuOverlayProps {
  onClose: () => void;
}

const MenuOverlay = ({ onClose }: MenuOverlayProps) => {
  return (
    <div className="w-full max-w-[375px] fixed inset-0 z-50 transition-all duration-300 ease-in-out px-5 bg-white overflow-y-auto">
      <div className="w-full flex flex-col gap-6">
        <div className="w-full relative h-[50px] flex items-center justify-center">
          <button
            onClick={onClose}
            className="absolute left-0 top-[17px] w-4 h-4" // 버튼 크기 조정
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16" // SVG 너비 조정
              height="16" // SVG 높이 조정
              viewBox="0 0 22 22"
              fill="none"
            >
              <rect
                x="1.80762"
                y="0.393448"
                width="27.9998"
                height="2"
                transform="rotate(45 1.80762 0.393448)"
                fill="black"
              />
              <rect
                x="0.393555"
                y="20.1923"
                width="27.9998"
                height="2"
                transform="rotate(-45 0.393555 20.1923)"
                fill="black"
              />
            </svg>
          </button>
          <div className="">
            <div className="w-[130px] h-[15px] relative">
              <Image src="/asset/icon/cm_bi_black.svg" alt="Pearl Abyss" fill />
            </div>
          </div>
        </div>
        <div>
          <HeaderAccordion />
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
