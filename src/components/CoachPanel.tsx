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
      className="mt-6 overflow-hidden rounded-3xl border border-[color:var(--accent-border)] bg-[color:var(--surface)] shadow-xl"
      style={{ animation: "cardIn 0.5s ease-out 0.35s both" }}
    >
      <div className="flex items-center justify-between border-b border-[color:var(--border-soft)] px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="accent-gradient flex h-10 w-10 items-center justify-center rounded-xl text-[color:var(--accent-ink)] shadow-accent-sm">
            <Bot className="h-6 w-6" strokeWidth={2.5} />
          </div>
          <div>
            <p className="text-sm font-bold text-[color:var(--text)]">{t("coach.title")}</p>
            <p className="text-xs text-[color:var(--text-faint)]">
              {t("coach.subtitle", { model: modelName })}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-[color:var(--accent-soft)] px-3 py-1.5 text-xs font-medium text-[color:var(--accent)] ring-1 ring-[color:var(--accent-border)]">
          <Clock className="h-3.5 w-3.5" />
          {t("coach.minutes", { n: durationMinutes })}
        </div>
      </div>

      <div className="px-5 py-4">
        <p className="whitespace-pre-line text-sm leading-relaxed text-[color:var(--text-soft)]">
          {prompt}
        </p>
      </div>

      <div className="flex justify-end border-t border-[color:var(--border-soft)] px-5 py-3">
        <button
          onClick={copy}
          className="flex items-center gap-2 rounded-xl bg-[color:var(--surface-3)] px-4 py-2 text-xs font-medium text-[color:var(--text-muted)] ring-1 ring-[color:var(--border)] transition-all hover:bg-[color:var(--surface-hover)] hover:text-[color:var(--text)] active:scale-95"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-[color:var(--accent)]" />
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
