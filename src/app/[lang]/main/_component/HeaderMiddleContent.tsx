"use client";

import HeaderMenuData from "@/app/mock/HeaderMenuData";

const HeaderMiddleContent = ({ isHovered }: { isHovered: boolean }) => {
  return (
    <ul className="flex items-center justify-center text-[16px] font-bold">
      {HeaderMenuData.map((item, index) => (
        <li className="h-full" key={index}>
          {isHovered ? (
            <>
              <div className="h-[342px] px-[30px] xl:px-[40px] min-[1400px]:px-[50px]">
                <p className="h-17 border-b-2 border-t-2 border-transparent hover:border-b-black flex items-center">
                  {item.menu}
                </p>
                {/* <ul className="h-[244px] flex flex-col items-center justify-center">
                  {item.submenu.map((submenu, index) => (
                    <li key={index}>{submenu}</li>
                  ))}
                </ul> */}
              </div>
            </>
          ) : (
            <>
              <div className="h-full px-[30px] xl:px-[40px] min-[1400px]:px-[50px] overflow-visible">
                <p className="h-17 border-b-2 border-t-2 border-transparent hover:border-b-black flex items-center">
                  {item.menu}
                </p>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default HeaderMiddleContent;
