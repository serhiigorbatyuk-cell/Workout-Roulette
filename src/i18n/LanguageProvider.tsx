import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations, type Lang, type TFunction } from "./translations";
import { I18nContext, type I18nValue } from "./context";

const STORAGE_KEY = "workout-roulette-lang";

function isLang(value: string | null): value is Lang {
  return value !== null && value in translations;
}

function detectLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLang(saved)) return saved;
  } catch {
    // localStorage may be unavailable
  }
  try {
    const code = navigator.language.slice(0, 2).toLowerCase();
    if (isLang(code)) return code;
  } catch {
    // navigator may be unavailable
  }
  return "uk";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage may be unavailable
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useCallback<TFunction>(
    (key, vars) => {
      let text = translations[lang][key] ?? translations.uk[key] ?? key;
      if (vars) {
        for (const [name, value] of Object.entries(vars)) {
          text = text.split(`{${name}}`).join(String(value));
        }
      }
      return text;
    },
    [lang],
  );

  const value = useMemo<I18nValue>(
    () => ({ lang, setLang, t }),
    [lang, setLang, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
