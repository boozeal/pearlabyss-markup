import FooterText from "./FooterText";

export default function Footer() {
  const FooterTextData = [
    {
      title: "소개",
      items: ["펄어비스 소개", "연구소", "사회공헌", "CCP"],
      link: "광고/제휴 문의",
    },
    {
      title: "게임",
      items: ["검은사막", "검은사막 모바일", "도꺠비", "플랜8"],
      link: "기업윤리 신고센터",
    },
    {
      title: "미디어",
      items: ["보도자료", "미디어 행사"],
      link: "개인정보 처리방침",
    },
    {
      title: "문화",
      items: ["기업문화", "복지", "펄어비스 소식"],
      link: "펄어비스 기어",
    },
    { title: "채용", items: ["채용 소개", "채용 공고"], link: "채용 고객센터" },
    {
      title: "투자정보",
      items: [
        "기업지배구조",
        "주가정보",
        "재무정보",
        "공시.공고",
        "IR자료",
        "지속가능경영",
      ],
      link: "",
    },
  ];

  return (
    <footer>
      <div className="w-full flex flex-col min-[1024px]:hidden items-center">
        <div className="w-full flex">
          <div className="w-full border-b border-[#E5E5E5] pb-[70px] hidden">
            <div className="w-full flex justify-between max-w-[1220px] mx-auto px-5">
              {FooterTextData.map((section, index) => (
                <FooterText
                  key={index}
                  title={section.title}
                  items={section.items}
                  link={section.link}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 w-full h-[75px] pt-[14px] pb-[18px] border border-[#E0E0E0]">
          <img
            className="w-[40px]"
            src="/asset/icon/icn_footer_facebook_round.svg"
            alt="Pearl Abyss"
          />
          <img
            className="w-[40px]"
            src="/asset/icon/icn_footer_linkedin_round.svg"
            alt="Pearl Abyss"
          />
          <img
            className="w-10"
            src="/asset/icon/icn_footer_youtube_round.svg"
            alt="Pearl Abyss"
          />
        </div>
        <img
          className="w-[120px] mx-auto mt-[17px] mb-[10px]"
          src="/asset/icon/cm_bi_black.svg"
          alt="Pearl Abyss"
        />
        <p className="text-[#6A6A6A]/50 mb-[13px]">
          © Pearl Abyss Corp. All Rights Reserved.
        </p>
      </div>
      <div className="w-full text-black pt-15 flex flex-col border-t border-b border-[#E5E5E5] max-[1024px]:hidden">
        <div className="w-full flex flex-col">
          <div className="w-full border-b border-[#E5E5E5] pb-[70px]">
            <div className="w-full flex justify-between max-w-[1220px] mx-auto px-5">
              {FooterTextData.map((section, index) => (
                <FooterText
                  key={index}
                  title={section.title}
                  items={section.items}
                  link={section.link}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-[1220px] px-5 h-[78px] mx-auto justify-between">
          <div className="flex items-center gap-9">
            <img
              className="w-[126px] mx-auto"
              src="/asset/icon/cm_bi_black.svg"
              alt="Pearl Abyss"
            />
            <p className="text-[#6A6A6A]/50">
              © Pearl Abyss Corp. All Rights Reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <img
              className="w-[40px] mx-auto"
              src="/asset/icon/icn_footer_facebook_round.svg"
              alt="Pearl Abyss"
            />
            <img
              className="w-[40px] mx-auto"
              src="/asset/icon/icn_footer_linkedin_round.svg"
              alt="Pearl Abyss"
            />
            <img
              className="w-10 mx-auto"
              src="/asset/icon/icn_footer_youtube_round.svg"
              alt="Pearl Abyss"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
