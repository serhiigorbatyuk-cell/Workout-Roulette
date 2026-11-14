import { useState } from "react";
import {
  Bot,
  X,
  Zap,
  Smile,
  Leaf,
  Dumbbell,
  HeartPulse,
  Sparkles,
  Flame,
  KeyRound,
  Plus,
  Trash2,
  Eye,
  EyeOff,
} from "lucide-react";
import { COACH_MODELS, type CoachSettings } from "@/data/aiCoach";
import type { HistoryEntry } from "@/data/workoutHistory";
import { useI18n } from "@/i18n/context";
import { useTheme } from "@/theme/context";

const LOCALE_BY_LANG: Record<string, string> = {
  uk: "uk-UA",
  en: "en-US",
  es: "es-ES",
  de: "de-DE",
  pl: "pl-PL",
};
import { THEMES } from "@/theme/themes";

interface SettingsDrawerProps {
  open: boolean;
  settings: CoachSettings;
  history: HistoryEntry[];
  onChange: (settings: CoachSettings) => void;
  onClearHistory: () => void;
  onClose: () => void;
}

interface ApiKey {
  id: number;
  provider: string;
  label: string;
  value: string;
}

const TONE_OPTIONS: {
  value: CoachSettings["tone"];
  icon: typeof Smile;
}[] = [
  { value: "encouraging", icon: Smile },
  { value: "strict", icon: Zap },
  { value: "calm", icon: Leaf },
];

const FOCUS_OPTIONS: {
  value: CoachSettings["focus"];
  icon: typeof Dumbbell;
}[] = [
  { value: "technique", icon: Dumbbell },
  { value: "intensity", icon: Flame },
  { value: "recovery", icon: HeartPulse },
];

export function SettingsDrawer({ open, settings, history, onChange, onClearHistory, onClose }: SettingsDrawerProps) {
  const { t, lang } = useI18n();
  const { theme, setTheme } = useTheme();
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
  const [showKeyForm, setShowKeyForm] = useState(false);
  const [provider, setProvider] = useState("OpenAI");
  const [keyLabel, setKeyLabel] = useState("");
  const [keyValue, setKeyValue] = useState("");
  const [visibleKeyId, setVisibleKeyId] = useState<number | null>(null);

  function addApiKey() {
    const trimmedValue = keyValue.trim();
    if (!trimmedValue) return;

    setApiKeys((current) => [
      ...current,
      {
        id: Date.now(),
        provider,
        label: keyLabel.trim() || `${provider} key`,
        value: trimmedValue,
      },
    ]);
    setKeyLabel("");
    setKeyValue("");
    setShowKeyForm(false);
  }

  function removeApiKey(id: number) {
    setApiKeys((current) => current.filter((key) => key.id !== id));
    if (visibleKeyId === id) setVisibleKeyId(null);
  }

  return (
    <>
      {/* overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      {/* drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col border-l border-[color:var(--border)] bg-[color:var(--surface-solid)] shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* header */}
        <div className="flex items-center justify-between border-b border-[color:var(--border-soft)] px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="accent-gradient flex h-10 w-10 items-center justify-center rounded-xl text-[color:var(--accent-ink)] shadow-accent-sm">
              <Bot className="h-6 w-6" strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-sm font-bold text-[color:var(--text)]">{t("settings.title")}</p>
              <p className="text-xs text-[color:var(--text-faint)]">{t("settings.subtitle")}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--surface-3)] text-[color:var(--text-muted)] ring-1 ring-[color:var(--border)] transition-all hover:bg-[color:var(--surface-hover)] hover:text-[color:var(--text)] active:scale-95"
            aria-label={t("settings.close")}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* body */}
        <div className="flex-1 overflow-y-auto px-5 py-5">
          {/* theme */}
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[color:var(--text-faint)]">
            {t("settings.theme")}
          </p>
          <div className="grid grid-cols-2 gap-2.5">
            {THEMES.map((option) => {
              const active = theme === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => setTheme(option.id)}
                  aria-pressed={active}
                  className={`flex items-center gap-2.5 rounded-2xl border px-3 py-2.5 text-left transition-all ${
                    active
                      ? "border-[color:var(--accent-border)] bg-[color:var(--accent-soft)] ring-1 ring-[color:var(--accent-border)]"
                      : "border-[color:var(--border)] bg-[color:var(--surface-3)] hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-hover)]"
                  }`}
                >
                  <span
                    className="h-7 w-7 shrink-0 rounded-full ring-1 ring-black/20"
                    style={{ background: option.swatch }}
                  />
                  <span
                    className={`text-xs font-semibold ${
                      active
                        ? "text-[color:var(--text)]"
                        : "text-[color:var(--text-muted)]"
                    }`}
                  >
                    {t(`theme.${option.id}`)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* history */}
          <div className="mt-6 border-t border-[color:var(--border-soft)] pt-6">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--text-faint)]">
                {t("settings.history")}
              </p>
              {history.length > 0 && (
                <button
                  onClick={onClearHistory}
                  className="text-xs font-medium text-[color:var(--text-faint)] transition-colors hover:text-[color:var(--danger)]"
                >
                  {t("settings.historyClear")}
                </button>
              )}
            </div>
            {history.length === 0 ? (
              <p className="rounded-2xl border border-dashed border-[color:var(--border)] bg-[color:var(--surface-2)] px-4 py-6 text-center text-xs text-[color:var(--text-faint)]">
                {t("settings.historyEmpty")}
              </p>
            ) : (
              <div className="space-y-2.5">
                {history.slice(0, 15).map((entry) => (
                  <div
                    key={entry.id}
                    className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-3)] px-4 py-3"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs font-semibold text-[color:var(--text-soft)]">
                        {t(`difficulty.${entry.difficulty}`)}
                      </p>
                      <p className="text-[11px] text-[color:var(--text-faint)]">
                        {new Date(entry.date).toLocaleDateString(
                          LOCALE_BY_LANG[lang] ?? "en-US",
                          { day: "numeric", month: "short", year: "numeric" },
                        )}
                      </p>
                    </div>
                    <p className="mt-1 text-[11px] leading-relaxed text-[color:var(--text-faint)]">
                      {entry.exercises
                        .map((ex) => t(`exercises.${ex.id}.name`))
                        .join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* enable toggle */}
          <div className="mt-6 flex items-center justify-between rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-2)] px-4 py-3.5">
            <div>
              <p className="text-sm font-semibold text-[color:var(--text)]">{t("coach.title")}</p>
              <p className={`text-xs ${settings.enabled ? "text-[color:var(--accent)]" : "text-[color:var(--text-faint)]"}`}>
                {settings.enabled ? t("settings.enabled") : t("settings.disabled")}
              </p>
            </div>
            <button
              onClick={() => onChange({ ...settings, enabled: !settings.enabled })}
              className={`relative h-7 w-12 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-border)] focus:ring-offset-2 focus:ring-offset-[color:var(--surface-solid)] ${
                settings.enabled ? "bg-[color:var(--accent)]" : "bg-[color:var(--border-strong)]"
              }`}
              role="switch"
              aria-checked={settings.enabled}
            >
              <span
                className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-200 ${
                  settings.enabled ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* AI model */}
          <p className="mt-6 mb-3 text-xs font-semibold uppercase tracking-wide text-[color:var(--text-faint)]">
            {t("settings.model")}
          </p>
          <div className="space-y-2.5">
            {COACH_MODELS.map((model) => {
              const active = settings.model === model.value;
              return (
                <button
                  key={model.value}
                  onClick={() => onChange({ ...settings, model: model.value })}
                  className={`w-full rounded-2xl border px-4 py-3 text-left transition-all ${
                    active
                      ? "border-[color:var(--accent-border)] bg-[color:var(--accent-soft)] ring-1 ring-[color:var(--accent-border)]"
                      : "border-[color:var(--border)] bg-[color:var(--surface-3)] hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-hover)]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Bot className={`h-5 w-5 shrink-0 ${active ? "text-[color:var(--accent)]" : "text-[color:var(--text-muted)]"}`} />
                    <div className="min-w-0 flex-1">
                      <p className={`truncate text-sm font-medium ${active ? "text-[color:var(--text)]" : "text-[color:var(--text-soft)]"}`}>
                        {model.label}
                      </p>
                      <p className="text-xs text-[color:var(--text-faint)]">{model.provider} · free</p>
                    </div>
                    {active && <span className="h-2 w-2 shrink-0 rounded-full bg-[color:var(--accent)] shadow-accent-sm" />}
                  </div>
                  <p className="mt-2 truncate pl-8 font-mono text-[10px] text-[color:var(--text-faintest)]">{model.value}</p>
                </button>
              );
            })}
          </div>

          {/* tone */}
          <p className="mt-6 mb-3 text-xs font-semibold uppercase tracking-wide text-[color:var(--text-faint)]">
            {t("settings.tone")}
          </p>
          <div className="space-y-2.5">
            {TONE_OPTIONS.map((opt) => {
              const Icon = opt.icon;
              const active = settings.tone === opt.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => onChange({ ...settings, tone: opt.value })}
                  className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-all ${
                    active
                      ? "border-[color:var(--accent-border)] bg-[color:var(--accent-soft)] ring-1 ring-[color:var(--accent-border)]"
                      : "border-[color:var(--border)] bg-[color:var(--surface-3)] hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-hover)]"
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 shrink-0 ${active ? "text-[color:var(--accent)]" : "text-[color:var(--text-muted)]"}`}
                  />
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${active ? "text-[color:var(--text)]" : "text-[color:var(--text-soft)]"}`}>
                      {t(`settings.tone.${opt.value}.label`)}
                    </p>
                    <p className="text-xs text-[color:var(--text-faint)]">
                      {t(`settings.tone.${opt.value}.desc`)}
                    </p>
                  </div>
                  {active && (
                    <span className="h-2 w-2 rounded-full bg-[color:var(--accent)] shadow-accent-sm" />
                  )}
                </button>
              );
            })}
          </div>

          {/* focus */}
          <p className="mt-6 mb-3 text-xs font-semibold uppercase tracking-wide text-[color:var(--text-faint)]">
            {t("settings.focus")}
          </p>
          <div className="space-y-2.5">
            {FOCUS_OPTIONS.map((opt) => {
              const Icon = opt.icon;
              const active = settings.focus === opt.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => onChange({ ...settings, focus: opt.value })}
                  className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-all ${
                    active
                      ? "border-[color:var(--accent-border)] bg-[color:var(--accent-soft)] ring-1 ring-[color:var(--accent-border)]"
                      : "border-[color:var(--border)] bg-[color:var(--surface-3)] hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-hover)]"
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 shrink-0 ${active ? "text-[color:var(--accent)]" : "text-[color:var(--text-muted)]"}`}
                  />
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${active ? "text-[color:var(--text)]" : "text-[color:var(--text-soft)]"}`}>
                      {t(`settings.focus.${opt.value}.label`)}
                    </p>
                    <p className="text-xs text-[color:var(--text-faint)]">
                      {t(`settings.focus.${opt.value}.desc`)}
                    </p>
                  </div>
                  {active && (
                    <span className="h-2 w-2 rounded-full bg-[color:var(--accent)] shadow-accent-sm" />
                  )}
                </button>
              );
            })}
          </div>

          {/* toggles */}
          <p className="mt-6 mb-3 text-xs font-semibold uppercase tracking-wide text-[color:var(--text-faint)]">
            {t("settings.sections")}
          </p>
          <div className="space-y-2.5">
            <ToggleRow
              icon={Sparkles}
              label={t("settings.warmup.label")}
              desc={t("settings.warmup.desc")}
              checked={settings.includeWarmup}
              onToggle={() =>
                onChange({ ...settings, includeWarmup: !settings.includeWarmup })
              }
            />
            <ToggleRow
              icon={Flame}
              label={t("settings.motivation.label")}
              desc={t("settings.motivation.desc")}
              checked={settings.includeMotivation}
              onToggle={() =>
                onChange({ ...settings, includeMotivation: !settings.includeMotivation })
              }
            />
          </div>

          {/* API keys */}
          <div className="mt-6 border-t border-[color:var(--border-soft)] pt-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold text-[color:var(--text)]">
                  <KeyRound className="h-4 w-4 text-[color:var(--accent)]" />
                  {t("settings.api.title")}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[color:var(--text-faint)]">
                  {t("settings.api.desc")}
                </p>
              </div>
              <button
                onClick={() => setShowKeyForm((current) => !current)}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[color:var(--accent-soft)] text-[color:var(--accent)] ring-1 ring-[color:var(--accent-border)] transition-all hover:bg-[color:var(--accent-soft-strong)] active:scale-95"
                aria-label={t("settings.api.addAria")}
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            {showKeyForm && (
              <div className="mt-4 space-y-3 rounded-2xl border border-[color:var(--accent-border)] bg-[color:var(--surface-2)] p-3">
                <select
                  value={provider}
                  onChange={(event) => setProvider(event.target.value)}
                  className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-solid)] px-3 py-2.5 text-sm text-[color:var(--text)] outline-none focus:border-[color:var(--accent-border)]"
                >
                  <option>OpenAI</option>
                  <option>Google Gemini</option>
                  <option>Anthropic Claude</option>
                  <option>{t("settings.api.other")}</option>
                </select>
                <input
                  value={keyLabel}
                  onChange={(event) => setKeyLabel(event.target.value)}
                  placeholder={t("settings.api.labelPlaceholder")}
                  className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-solid)] px-3 py-2.5 text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--text-faintest)] focus:border-[color:var(--accent-border)]"
                />
                <input
                  value={keyValue}
                  onChange={(event) => setKeyValue(event.target.value)}
                  type="password"
                  placeholder={t("settings.api.valuePlaceholder")}
                  className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-solid)] px-3 py-2.5 text-sm text-[color:var(--text)] outline-none placeholder:text-[color:var(--text-faintest)] focus:border-[color:var(--accent-border)]"
                />
                <button
                  onClick={addApiKey}
                  disabled={!keyValue.trim()}
                  className="w-full rounded-xl bg-[color:var(--accent)] px-3 py-2.5 text-sm font-bold text-[color:var(--accent-ink)] transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {t("settings.api.add")}
                </button>
                <p className="text-[11px] leading-relaxed text-[color:var(--warning)]">
                  {t("settings.api.warning")}
                </p>
              </div>
            )}

            {apiKeys.length > 0 && (
              <div className="mt-3 space-y-2">
                {apiKeys.map((key) => {
                  const visible = visibleKeyId === key.id;
                  return (
                    <div
                      key={key.id}
                      className="flex items-center gap-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-3)] px-3 py-2.5"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[color:var(--surface-3)] text-[color:var(--text-muted)]">
                        <KeyRound className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-semibold text-[color:var(--text-soft)]">{key.label}</p>
                        <p className="truncate font-mono text-[11px] text-[color:var(--text-faint)]">
                          {visible ? key.value : "••••••••••••••••"}
                        </p>
                      </div>
                      <button
                        onClick={() => setVisibleKeyId(visible ? null : key.id)}
                        className="text-[color:var(--text-faint)] transition-colors hover:text-[color:var(--text)]"
                        aria-label={visible ? t("settings.api.hide") : t("settings.api.show")}
                      >
                        {visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                      <button
                        onClick={() => removeApiKey(key.id)}
                        className="text-[color:var(--text-faint)] transition-colors hover:text-[color:var(--danger)]"
                        aria-label={t("settings.api.remove")}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* footer */}
        <div className="border-t border-[color:var(--border-soft)] px-5 py-4">
          <button
            onClick={onClose}
            className="accent-gradient-x w-full rounded-2xl px-6 py-3 font-bold text-[color:var(--accent-ink)] shadow-accent transition-all hover:shadow-accent-strong hover:brightness-110 active:scale-[0.98]"
          >
            {t("settings.done")}
          </button>
        </div>
      </aside>
    </>
  );
}

function ToggleRow({
  icon: Icon,
  label,
  desc,
  checked,
  onToggle,
}: {
  icon: typeof Sparkles;
  label: string;
  desc: string;
  checked: boolean;
  onToggle: () => void;
}) {
  const { t } = useI18n();

  return (
    <div className="flex items-center justify-between rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-3)] px-4 py-3">
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5 shrink-0 text-[color:var(--text-muted)]" />
        <div>
          <p className="text-sm font-medium text-[color:var(--text-soft)]">{label}</p>
          <p className={`text-xs ${checked ? "text-[color:var(--accent)]" : "text-[color:var(--text-faint)]"}`}>
            {checked
              ? `${desc} · ${t("settings.stateOn")}`
              : `${desc} · ${t("settings.stateOff")}`}
          </p>
        </div>
      </div>
      <button
        onClick={onToggle}
        className={`relative h-7 w-12 shrink-0 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-border)] focus:ring-offset-2 focus:ring-offset-[color:var(--surface-solid)] ${
          checked ? "bg-[color:var(--accent)]" : "bg-[color:var(--border-strong)]"
        }`}
        role="switch"
        aria-checked={checked}
      >
        <span
          className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-200 ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
