import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen w-full relative bg-[#f0f0f0]">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center font-medium">
        <p className="text-[28px]">
          죄송합니다. 페이지를 불러 올 수 없습니다.
          <br />
          잠시 후 다시 시도해 주세요.
        </p>
        <p className="text-[15px] text-gray-600 mt-[30px]">
          마크업 페이지의 메인 화면으로 이동하시겠습니까?
        </p>
        <Link
          href="/main"
          className="text-white bg-black text-center flex items-center justify-center w-[260px] h-[70px] mt-[50px] text-[22px] font-semibold"
        >
          <div className="btn_wrap">
            <div>
              <button className="group relative overflow-hidden w-[260px] h-[70px] text-center text-white mx-10">
                <span className="absolute inset-0 bg-white/50 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
                <span className="relative z-10 text-[18px]">메인으로 이동</span>
              </button>
            </div>
          </div>
        </Link>
      </div>
      <footer className="absolute bottom-0 left-0 w-full h-[100px] flex items-center justify-center">
        <div className="flex items-end justify-center gap-6">
          <Link href="/main">
            <Image
              src="/asset/icon/cm_bi_black.svg"
              alt="logo"
              width={136}
              height={16}
            />
          </Link>
          <p className="text-[14px] text-[#7f7e7e] leading-[100%]">
            © Pearl Abyss Corp. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
