import React from "react";
import NewsItem from "./NewsItem";
import NewsCarousel from "./NewsCarousel";
const NewsContainer = () => {
  const newsList = [
    {
      title: "펄어비스 검은사막 '스페셜 접속 보상 이벤트' 시작",
      date: "2025.04.10",
      content:
        "펄어비스가 '검은사막' 봄맞이 특강 종료를 기념해 '스페셜 접속 보상 이벤트'를 진행한다. ",
    },
    {
      title: "펄어비스 검은사막 모바일, 질풍가도 콜라보 음원 수익금 기부",
      date: "2025.04.09",
      content:
        "펄어비스가 검은사막 모바일 '격투가X질풍가도' 음원 수익금을 기부했다고 오늘(8일) 밝혔다.",
    },
    {
      title: "펄어비스 검은사막 모바일, '라밤 기술' 업데이트",
      date: "2025.04.09",
      content: "펄어비스가 검은사막 모바일 신규 콘텐츠 '라밤 기술'을 선보였다.",
    },
  ];

  return (
    <section className="w-full px-[30px] min-px-5 mt-15 mr-0">
      <h1 className="text-[19px] font-bold">NEWS</h1>
      <div className="flex mt-[22px] min-[767px]:hidden justify-center">
        <NewsCarousel newsList={newsList} />
      </div>
      <div className="flex mt-[22px] max-[767px]:hidden">
        {newsList.map((news, index) => (
          <NewsItem
            key={index}
            isFirst={index === 0}
            title={news.title}
            date={news.date}
            content={news.content}
          />
        ))}
      </div>
    </section>
  );
};

export default NewsContainer;
