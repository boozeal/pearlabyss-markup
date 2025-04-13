"use client";

import { useEffect, useState, useRef } from "react";
import MenuOverlay from "./MenuOverlay";
import HeaderMiddleContent from "./HeaderMiddleContent";

const categories = [
  {
    value: "KOREAN",
    label: "KR",
  },
  {
    value: "ENGLISH",
    label: "EN",
  },
];

const Header = () => {
  const [isTop, setIsTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full transition-all duration-100 z-50 px-6
        ${
          isTop ? "text-white" : "bg-white"
        } hover:bg-white hover:text-black hover:h-[342px] h-17`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <nav>
          <div className="h-full min-h-17 flex items-center justify-between text-[15px] font-medium">
            <div className="flex-1">
              <div className="max-[1024px]:hidden">
                {isHovered || !isTop ? (
                  <div className="w-[170px]">
                    <img
                      className="w-[154px] mx-auto"
                      src="/asset/icon/cm_bi_black.svg"
                      alt="Pearl Abyss"
                    />
                  </div>
                ) : (
                  <div className="w-[170px]">
                    <img
                      className="w-[154px] mx-auto"
                      src="/asset/icon/cm_bi_white.svg"
                      alt="Pearl Abyss"
                    />
                  </div>
                )}
              </div>
              <button className="min-[1024px]:hidden w-7 h-5 flex flex-col justify-between items-center">
                <span className="block w-full h-[2px] bg-[url('/asset/icon/common_pattern_bg.jpg')] bg-no-repeat bg-cover"></span>
                <span className="block w-full h-[2px] bg-[url('/asset/icon/common_pattern_bg.jpg')] bg-no-repeat bg-cover"></span>
                <span className="block w-full h-[2px] bg-[url('/asset/icon/common_pattern_bg.jpg')] bg-no-repeat bg-cover"></span>
              </button>
            </div>
            <div className="max-[1024px]:hidden flex mx-auto">
              <HeaderMiddleContent />
            </div>
            <div className="flex min-[1024px]:hidden">
              {isHovered || !isTop ? (
                <img
                  className="w-[150px]"
                  src="/asset/icon/cm_bi_black.svg"
                  alt="Pearl Abyss"
                />
              ) : (
                <img
                  className="w-[150px]"
                  src="/asset/icon/cm_bi_white.svg"
                  alt="Pearl Abyss"
                />
              )}
            </div>
            <div className="flex flex-1 items-center justify-end">
              <div className="hidden xl:flex items-center space-x-5 text-[14px] font-bold">
                <a className="">KOR</a>
                <a className="text-[#999999] text-[13px]">|</a>
                <a className="text-[#999999] hover:text-black">ENG</a>
                <a className="text-[#999999] text-[13px]">|</a>
                <a className="text-[#999999] hover:text-black mr-3">JPN</a>
              </div>
              <div className="xl:hidden">
                {isHovered || !isTop ? (
                  <img
                    src="/asset/icon/m_icn_lang.svg"
                    alt="Language Icon"
                    className="w-6 h-6"
                  />
                ) : (
                  <img
                    src="/asset/icon/m_icn_lang_white.svg"
                    alt="Language Icon"
                    className="w-6 h-6"
                  />
                )}
              </div>
            </div>
          </div>
        </nav>
        {isHovered && (
          <div className="additional-content bg-gray-100 p-4">
            <p>여기에 추가적인 내용을 입력하세요.</p>
          </div>
        )}
      </header>

      {isMenuOpen && <MenuOverlay onClose={() => setIsMenuOpen(false)} />}
    </>
  );
};

export default Header;
