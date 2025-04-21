"use client";

import HeaderMenuData from "@/app/mock/HeaderMenuData";

const HeaderMiddleContent = () => {
  return (
    <ul className="h-full flex items-start justify-center text-[16px] font-bold ">
      {HeaderMenuData.map((item, index) => (
        <li className="h-full text-center group/text" key={index}>
          <div className="h-full flex flex-col items-center justify-center">
            <p className="h-17 mx-[30px] xl:mx-[40px] min-[1400px]:mx-[50px] border-b-2 border-t-2 border-transparent group-hover/text:border-b-black flex items-center z-1">
              {item.menu}
            </p>
            <div className="flex flex-col items-center justify-center pt-6 gap-3 text-[14px] font-medium">
              {item.submenu.map((subItem, subIndex) => (
                <p className="text-[#969696] hover:text-black" key={subIndex}>
                  {subItem}
                </p>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HeaderMiddleContent;
