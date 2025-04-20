import React from "react";

interface MobileNewItemProps {
  title: string;
  date: string;
  content: string;
}

const MobileNewsItem: React.FC<MobileNewItemProps> = ({
  title,
  date,
  content,
}) => {
  return (
    <article className="w-full min-w-[240px]">
      <h2 className="text-[16px] font-semibold text-[#191c21]">{title}</h2>
      <p className="text-[14px] text-[#939393] mt-[14px]">{date}</p>
      <p className="text-[15px] text-[#6a6a6a] mt-6 truncate">{content}</p>
    </article>
  );
};

export default MobileNewsItem;
