"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type CardThumbnailProps = {
  image: string;
  title: string;
  description: string;
};

const MobileCardThumbnail = ({
  image,
  title,
  description,
}: CardThumbnailProps) => {
  return (
    <div className="w-full relative flex flex-col justify-between overflow-hidden">
      <img src={image}></img>
      <div className="absolute bottom-[80px] left-1/2 translate-x-[-50%] translate-y-[-50%] z-10 text-center text-white">
        <p className="text-[24px] font-bold transform group-hover:-translate-y-8 transition-transform duration-600">
          {title}
        </p>
      </div>
      <div className="w-full absolute bottom-[50px] left-1/2 translate-x-[-50%] translate-y-[-50%] z-10 text-center text-white group-hover:block hidden">
        <p className="text-[16px] font-semibold">{description}</p>
      </div>
    </div>
  );
};

export default MobileCardThumbnail;
