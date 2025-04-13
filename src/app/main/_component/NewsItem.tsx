import React from "react";

interface NewsItemProps {
  title: string;
  date: string;
  content: string;
  isFirst?: boolean;
}

const NewsItem: React.FC<NewsItemProps> = ({
  title,
  date,
  content,
  isFirst,
}) => {
  return (
    <article
      className={`${
        isFirst ? "pr-[30px]" : "px-[30px]"
      } min-w-[240px] border-r border-[#E5E5E5]`}
    >
      <h2 className="text-[17px] font-semibold">{title}</h2>
      <p className="text-[11px] text-[#939393] mt-[14px]">{date}</p>
      <p className="text-[15px] text-[#939393] mt-6 truncate">{content}</p>
    </article>
  );
};

export default NewsItem;
