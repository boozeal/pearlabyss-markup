export const fallbackLng = "ko";
export const languages = [fallbackLng, "en"];
export const defaultNS = "main";
export const cookieName = "i18next";

export function getOptions(
  lng = fallbackLng,
  ns: string | string[] = defaultNS
) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
