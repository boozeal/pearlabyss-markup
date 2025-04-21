"use client";

import EventCarousel from "./EventCarousel";
import EventThumbnail from "./EventThumbnail";
import { EventThumbnailProps } from "@/app/model/thumbnail";

const EventThumbnailData: EventThumbnailProps[] = [
  {
    image:
      "https://s1.pearlcdn.com/pearlabyss/Upload/thumbnail/20254/9/SRBKMUPMQ14VDKC720250409140948115.400x225.jpg",
    title: "펄어비스 소식",
    description:
      "펄어비스 게임 제작 공모전 '만들어봐, 나만의 모험!'에 도전해 보세요! ",
  },
  {
    image:
      "https://s1.pearlcdn.com/pearlabyss/Upload/thumbnail/20251/15/4EGKCLWANR1HOC8X20250115182505920.400x225.jpg",
    title: "펄어비스 소식",
    description: "펄어비스 구성원들의 일상 속 특별한 시간을 위한, 특식 DAY!",
  },
  {
    image:
      "https://s1.pearlcdn.com/pearlabyss/Upload/thumbnail/20251/15/OORY3FKPW2AE1RQH20250115184637529.400x225.jpg",
    title: "펄어비스 소식",
    description: "작지만 큰 행복! 펄어비스 구성원들을 위한 '소프라이즈' 이벤트",
  },
  {
    image:
      "https://s1.pearlcdn.com/pearlabyss/Upload/thumbnail/202411/8/W2KCZCXVNWOTBRGY20241108154534727.400x225.jpg",
    title: "펄어비스 소식",
    description: "팀워크 UP! - 펄어비스 팀 액티비티 활동 ",
  },
];

const EventContainer = () => {
  return (
    <div className="w-full">
      <section className="flex mt-[22px] min-[767px]:hidden justify-center">
        <EventCarousel eventList={EventThumbnailData} />
      </section>
      <section className="max-w-[1440px] mx-auto mt-[100px] mb-[200px] flex justify-between max-[767px]:hidden gap-5 px-5">
        {EventThumbnailData.map((item, index) => (
          <EventThumbnail
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            index={index}
          />
        ))}
      </section>
    </div>
  );
};

export default EventContainer;
