import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import ko from "../locales/ko.json";

const resources = {
  en: {
    translation: en,
  },
  ko: {
    translation: ko,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // 기본 언어 설정
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React는 기본적으로 XSS를 방지합니다.
  },
});

export default i18n;
