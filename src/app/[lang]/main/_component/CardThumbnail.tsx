"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type CardThumbnailProps = {
  image: string;
  title: string;
  description: string;
  index: number;
};

const CardThumbnail = ({
  image,
  title,
  description,
  index,
}: CardThumbnailProps) => {
  useEffect(() => {
    AOS.init({
      duration: 300,
    });
  }, []);

  return (
    <div
      className="group max-w-[288px] max-h-[576px] relative flex flex-col justify-between overflow-hidden"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <img
        className="hover:scale-120 transition-all duration-300"
        src={image}
      ></img>
      <div className="absolute bottom-[80px] left-1/2 translate-x-[-50%] translate-y-[-50%] z-10 text-center text-white">
        <p className="text-[24px] font-bold transform group-hover:-translate-y-8 transition-transform duration-600">
          {title}
        </p>
      </div>
      <div className="w-full absolute bottom-[50px] left-1/2 translate-x-[-50%] translate-y-[-50%] z-10 text-center text-white group-hover:block hidden">
        <hr className="w-[20px] h-2 mx-auto my-2"></hr>
        <p className="text-[16px] font-semibold">{description}</p>
      </div>
    </div>
  );
};

export default CardThumbnail;
