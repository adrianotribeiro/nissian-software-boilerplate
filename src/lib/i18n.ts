import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      translation: {
        count: "Contador",
        increment: "Incrementar",
        reset: "Reiniciar",
      },
    },
    en: {
      translation: { count: "Count", increment: "Increment", reset: "Reset" },
    },
  },
  lng: "pt",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
