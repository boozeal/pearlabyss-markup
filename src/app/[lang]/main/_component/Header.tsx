"use client";

import { useEffect, useLayoutEffect, useState, useRef } from "react";
import MenuOverlay from "./MenuOverlay";
import HeaderMiddleContent from "./HeaderMiddleContent";
import Link from "next/link";

const Header = () => {
  const [isTop, setIsTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useLayoutEffect(() => {
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* pc 헤더 */}
      <header
        className={`fixed group top-0 overflow-hidden w-full min-w-[240px] transition-all duration-300 z-50 px-6
        ${
          isTop ? "text-white" : "bg-white"
        } hidden min-[1024px]:block hover:text-black`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="absolute inset-0 bg-white -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-[-1] h-[342px]" />
        <nav className="h-17">
          {/* Section 1 */}
          <div className="h-full flex justify-between items-center text-[15px] font-medium">
            <div className="flex-1">
              <Link href="/main">
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
              </Link>
            </div>
            {/* Section 2 */}
            <div className="flex mx-auto">
              <HeaderMiddleContent isHovered={isHovered} />
            </div>
            {/* Section 3 */}
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
        {isHovered && <div className="h-[246px]"></div>}
      </header>
      {/* 모바일 헤더 */}
      <header
        className={`fixed top-0 w-full min-w-[240px] transition-all duration-300 z-50 px-6
        ${
          isTop ? "text-white" : "bg-white"
        } hidden max-[1024px]:block h-17 max-[768px]:h-13`}
      >
        <nav>
          <div className="h-full min-h-17 max-[768px]:min-h-13 flex items-center justify-between text-[15px] font-medium">
            {/* Section 1 */}
            <div className="flex-1">
              <button
                className="min-[1024px]:hidden w-full max-w-7 max-[1024px]:max-w-6 h-4 flex flex-col justify-between items-center"
                onClick={toggleMenu}
              >
                {isTop ? (
                  <>
                    <span className="block w-full h-[2px] bg-white"></span>
                    <span className="block w-full h-[2px] bg-white"></span>
                    <span className="block w-full h-[2px] bg-white"></span>
                  </>
                ) : (
                  <>
                    <span className="block w-full h-[2px] bg-[url('/asset/icon/common_pattern_bg.jpg')] bg-no-repeat bg-cover"></span>
                    <span className="block w-full h-[2px] bg-[url('/asset/icon/common_pattern_bg.jpg')] bg-no-repeat bg-cover"></span>
                    <span className="block w-full h-[2px] bg-[url('/asset/icon/common_pattern_bg.jpg')] bg-no-repeat bg-cover"></span>
                  </>
                )}
              </button>
            </div>
            {/* Section 2 */}
            <div className="flex min-[1024px]:hidden">
              {!isTop ? (
                <img
                  className="w-[130px]"
                  src="/asset/icon/cm_bi_black.svg"
                  alt="Pearl Abyss"
                />
              ) : (
                <img
                  className="w-[130px]"
                  src="/asset/icon/cm_bi_white.svg"
                  alt="Pearl Abyss"
                />
              )}
            </div>
            {/* Section 3 */}
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
      </header>
      {isMenuOpen && <MenuOverlay onClose={() => setIsMenuOpen(false)} />}
    </>
  );
};

export default Header;
