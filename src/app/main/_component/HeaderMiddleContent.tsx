import HeaderMenuData from "@/app/mock/HeaderMenuData";

const HeaderMiddleContent = ({ isHovered }: { isHovered: boolean }) => {
  return (
    <ul className="transition-all duration-100 flex items-center justify-center text-[16px] font-bold">
      {HeaderMenuData.map((item, index) => (
        <li className="h-full" key={index}>
          <div className="transition-all duration-100 ease-in-out h-[70px] flex flex-col items-center justify-center px-[30px] xl:px-[40px] min-[1400px]:px-[50px]">
            <a className="h-full border-b-2 border-t-2 border-transparent hover:border-b-black flex items-center">
              {item.menu}
            </a>
            {isHovered && (
              <ul>
                {item.submenu.map((submenu, index) => (
                  <li key={index}>{submenu}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HeaderMiddleContent;
