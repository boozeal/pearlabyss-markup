import React from "react";

interface FooterTextProps {
  title: string;
  items: string[];
  link: string;
}

export default function FooterText({ title, items, link }: FooterTextProps) {
  return (
    <div className="w-[196px] h-[300px] flex flex-col justify-between">
      <div className="text-[14px] text-[#969696] flex flex-col gap-3">
        <h1 className="text-[16px] text-black mb-1 font-bold cursor-pointer">
          {title}
        </h1>
        {items.map((item, index) => (
          <p key={index} className="hover:text-black cursor-pointer">
            {item}
          </p>
        ))}
      </div>
      <div className="flex">
        <p className="text-[16px] text-black mb-1 font-bold cursor-pointer">
          {link}
        </p>
      </div>
    </div>
  );
}
