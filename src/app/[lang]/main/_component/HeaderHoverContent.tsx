"use client";

import HeaderMenuData from "@/app/mock/HeaderMenuData";

const HeaderHoverContent = () => {
  return (
    <ul className="h-full flex items-center justify-center text-[16px] font-bold">
      {HeaderMenuData.map((item, index) => (
        <li className="h-full" key={index}>
          {item.submenu.map((subItem, subIndex) => (
            <p key={subIndex}>{subItem}</p>
          ))}
        </li>
      ))}
    </ul>
  );
};

export default HeaderHoverContent;
