import translationEn from "./../../assets/locales/en/translation.json";
import translationRu from "./../../assets/locales/ru/translation.json";
import translationUz from "./../../assets/locales/uz/translation.json";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    keySeparator: "|",
    resources: {
      uz: {
        translation: translationUz,
      },
      en: {
        translation: translationEn,
      },
      ru: {
        translation: translationRu,
      },
    },
    returnEmptyString: false,
    fallbackLng: ["uz"],
    detection: {
      order: ["localStorage"],
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
