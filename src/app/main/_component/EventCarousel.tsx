"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { EventItemProps } from "@/app/model/event";
import MobileEventThumbnail from "./MobileEventThumbnail";

const EventCarousel = ({ eventList }: { eventList: EventItemProps[] }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel className="w-full items-center mb-[90px]" setApi={setApi}>
      <CarouselContent>
        {eventList.map((event, index) => (
          <CarouselItem key={index}>
            <MobileEventThumbnail
              key={index}
              image={event.image}
              title={event.title}
              description={event.description}
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="flex justify-center mt-10 gap-3">
        {eventList.map((_, index) => (
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

export default EventCarousel;
