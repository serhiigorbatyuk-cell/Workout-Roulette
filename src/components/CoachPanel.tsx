import { useState } from "react";
import { Bot, Copy, Check, Clock } from "lucide-react";
import { useI18n } from "@/i18n/context";

interface CoachPanelProps {
  prompt: string;
  durationMinutes: number;
  modelName: string;
}

export function CoachPanel({ prompt, durationMinutes, modelName }: CoachPanelProps) {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }

  return (
    <div
      className="mt-6 overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-slate-900/90 to-slate-950/90 shadow-xl"
      style={{ animation: "cardIn 0.5s ease-out 0.35s both" }}
    >
      <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 text-slate-950 shadow-lg shadow-emerald-500/20">
            <Bot className="h-6 w-6" strokeWidth={2.5} />
          </div>
          <div>
            <p className="text-sm font-bold text-white">{t("coach.title")}</p>
            <p className="text-xs text-slate-500">
              {t("coach.subtitle", { model: modelName })}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/20">
          <Clock className="h-3.5 w-3.5" />
          {t("coach.minutes", { n: durationMinutes })}
        </div>
      </div>

      <div className="px-5 py-4">
        <p className="whitespace-pre-line text-sm leading-relaxed text-slate-200">
          {prompt}
        </p>
      </div>

      <div className="flex justify-end border-t border-white/5 px-5 py-3">
        <button
          onClick={copy}
          className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 ring-1 ring-white/10 transition-all hover:bg-white/10 hover:text-white active:scale-95"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-emerald-400" />
              {t("coach.copied")}
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              {t("coach.copy")}
            </>
          )}
        </button>
      </div>
    </div>
  );
}
