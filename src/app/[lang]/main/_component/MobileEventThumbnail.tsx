"use client";

type EventThumbnailProps = {
  image: string;
  title: string;
  description: string;
};

const EventThumbnail = ({ image, title, description }: EventThumbnailProps) => {
  return (
    <div className="w-full px-6 min-w-[200px] relative flex flex-col gap-5">
      <img src={image} className="w-full"></img>
      <div className="text-black flex flex-col gap-3">
        <p className="text-[14px] text-[#6a6a6a] ">{title}</p>
        <p className="text-[18px] font-bold">{description}</p>
      </div>
    </div>
  );
};

export default EventThumbnail;
