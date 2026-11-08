import { Globe } from "lucide-react";
import { LANGUAGES } from "@/i18n/translations";
import { useI18n } from "@/i18n/context";

export function LanguageSwitcher() {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      className="mt-4 flex items-center gap-1 rounded-2xl border border-white/10 bg-slate-900/60 p-1 backdrop-blur"
      role="group"
      aria-label={t("app.languageAria")}
    >
      <Globe className="ml-1.5 h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
      {LANGUAGES.map((language) => (
        <button
          key={language.code}
          type="button"
          onClick={() => setLang(language.code)}
          title={language.label}
          aria-label={language.label}
          aria-pressed={lang === language.code}
          className={`rounded-xl px-2.5 py-1.5 text-xs font-bold uppercase tracking-wide transition-all active:scale-95 ${
            lang === language.code
              ? "bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/30"
              : "text-slate-500 hover:text-slate-200"
          }`}
        >
          {language.short}
        </button>
      ))}
    </div>
  );
}
