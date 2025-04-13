"use client";

import React from "react";

const VisualWrap = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <img
        className="object-cover min-[1024px]:hidden min-h-[570px]"
        src="https://s1.pearlcdn.com/pearlabyss/Upload/thumbnail/20218/26/NL08EF6JXMN6STON20210826164410295.png"
      ></img>
      <video
        muted
        preload="none"
        loop
        data-resize="true"
        autoPlay
        className="object-cover max-[1024px]:hidden opacity-80 min-h-screen"
        onError={() => {
          const videoWrap = document.getElementsByClassName(
            "video_wrap"
          )[0] as HTMLElement;
          if (videoWrap) {
            videoWrap.style.display = "none";
          }
        }}
      >
        <source
          className="webmSrc"
          type="video/webm"
          src="https://s1.pearlcdn.com/global_static/video/kor_landing_loop.webm"
        />
        <source
          className="mp4Src"
          type="video/mp4"
          src="https://s1.pearlcdn.com/global_static/video/kor_landing_loop.mp4"
        />
      </video>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center max-[1024px]:gap-7 gap-10  w-full h-full">
        <div className="title_wrap">
          <img src="/asset/icon/blackdesert_logo_kr.png" alt="Black Desert" />
        </div>
        <div className="btn_wrap">
          <div>
            <button className="group relative overflow-hidden w-[310px] h-[75px] max-[1024px]:w-[238px] max-[1024px]:h-[57px] text-center text-white hover:text-black rounded-[2px] bg-white/35">
              <span className="absolute inset-0 bg-white/50 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
              <span className="relative z-10 text-[18px]">자세히 보기</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualWrap;
