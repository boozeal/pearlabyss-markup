"use client";

import CardThumbnail from "./CardThumbnail";
import { CardThumbnailProps } from "@/app/model/thumbnail";

const CardThumbnailData: CardThumbnailProps[] = [
  {
    image:
      "https://s1.pearlcdn.com/pearlabyss/contents/img/portal/main/main_category_company.jpg",
    title: "펄어비스",
    description: "우리의 비전과 가치",
  },
  {
    image:
      "https://s1.pearlcdn.com/pearlabyss/contents/img/portal/main/main_category_lab.jpg",
    title: "연구소",
    description: "한계를 뛰어넘는 곳",
  },
  {
    image:
      "https://s1.pearlcdn.com/pearlabyss/contents/img/portal/main/main_category_culture.jpg",
    title: "게임",
    description: "잊지 못할 모험",
  },
  {
    image:
      "https://s1.pearlcdn.com/pearlabyss/contents/img/portal/main/main_category_in.jpg",
    title: "문화",
    description: "파괴적인 창조자",
  },
  {
    image:
      "https://s1.pearlcdn.com/pearlabyss/contents/img/portal/main/main_category_news.jpg",
    title: "소식",
    description: "생생한 펄어비스 이야기",
  },
];

const CardContainer = () => {
  return (
    <section className="max-w-[1440px] mx-auto mt-[100px] flex wrap justify-between">
      {CardThumbnailData.map((item, index) => (
        <CardThumbnail
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
          index={index}
        />
      ))}
    </section>
  );
};

export default CardContainer;
