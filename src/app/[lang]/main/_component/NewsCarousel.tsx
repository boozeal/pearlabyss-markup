"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import MobileNewsItem from "./MobileNewsItem";
import { type CarouselApi } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { NewsItemProps } from "@/app/model/news";

const NewsCarousel = ({ newsList }: { newsList: NewsItemProps[] }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel className="w-full items-center" setApi={setApi}>
      <CarouselContent>
        {newsList.map((news, index) => (
          <CarouselItem key={index}>
            <MobileNewsItem
              key={index}
              title={news.title}
              date={news.date}
              content={news.content}
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="flex justify-center mt-10 gap-3">
        {newsList.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all  ${
              current === index ? "bg-[#101115]" : "bg-[#101115]/50"
            }`}
          />
        ))}
      </div>
    </Carousel>
  );
};

export default NewsCarousel;
