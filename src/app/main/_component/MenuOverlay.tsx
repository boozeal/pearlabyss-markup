interface MenuOverlayProps {
  onClose: () => void;
}

const MenuOverlay = ({ onClose }: MenuOverlayProps) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto fixed inset-0  z-50">
      <div className="h-[500px] lg:h-[328px] bg-[#151311]/90">
        <nav
          className={`px-4 sm:px-6 lg:px-8 transition-opacity duration-300 border-b border-[#FFFFFF80]`}
        >
          <div className="flex items-center justify-between h-17 text-[15px] font-medium">
            <div className="flex-1 min-w-[120px]">
              <div className="flex space-x-2">
                <img src="/asset/icon/logo-white.svg" alt="logo" width={36} />
                <div className="flex flex-col gap-1 items-center justify-center">
                  <img
                    src="/asset/icon/logo-text-white.svg"
                    alt="logo"
                    width={90}
                  />
                  <img
                    src="/asset/icon/logo-text-korean-white.svg"
                    alt="logo"
                    width={47}
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-end space-x-10">
              <div className="flex items-center space-x-2 text-[14px] leading-[1.2] font-normal min-w-[120px]">
                <a href="/login" className="text-white">
                  로그인
                </a>
                <a className="text-[13px]">|</a>
                <a href="/signup" className="text-white">
                  회원가입
                </a>
              </div>
              <button className="text-white cursor-pointer" onClick={onClose}>
                <img src="/asset/icon/close.svg" alt="close" width={21} />
              </button>
            </div>
          </div>
        </nav>
        <div className="px-4 sm:px-6 lg:px-10 pt-6 lg:pt-10 pb-8 lg:pb-15">
          <div className="flex flex-col lg:flex-row justify-between w-full gap-6 lg:gap-0"></div>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
