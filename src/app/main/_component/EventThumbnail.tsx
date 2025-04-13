"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type EventThumbnailProps = {
  image: string;
  title: string;
  description: string;
  index: number;
};

const EventThumbnail = ({
  image,
  title,
  description,
  index,
}: EventThumbnailProps) => {
  useEffect(() => {
    AOS.init({
      duration: 300,
    });
  }, []);

  return (
    <div
      className="group w-[345px] min-w-[200px] h-[300px] relative flex flex-col gap-5"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="w-full overflow-hidden">
        <img
          className="hover:scale-110 transition-all duration-300"
          src={image}
        ></img>
      </div>
      <div className="text-black flex flex-col gap-3">
        <p className="text-[14px] text-[#6a6a6a] ">{title}</p>
        <p className="text-[18px] font-bold">{description}</p>
      </div>
    </div>
  );
};

export default EventThumbnail;
