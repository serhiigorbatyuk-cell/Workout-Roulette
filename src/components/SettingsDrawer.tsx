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
import { useI18n } from "@/i18n/context";

interface SettingsDrawerProps {
  open: boolean;
  settings: CoachSettings;
  onChange: (settings: CoachSettings) => void;
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

export function SettingsDrawer({ open, settings, onChange, onClose }: SettingsDrawerProps) {
  const { t } = useI18n();
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
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col border-l border-white/10 bg-slate-900/95 shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* header */}
        <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 text-slate-950 shadow-lg shadow-emerald-500/20">
              <Bot className="h-6 w-6" strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-sm font-bold text-white">{t("settings.title")}</p>
              <p className="text-xs text-slate-500">{t("settings.subtitle")}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-slate-400 ring-1 ring-white/10 transition-all hover:bg-white/10 hover:text-white active:scale-95"
            aria-label={t("settings.close")}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* body */}
        <div className="flex-1 overflow-y-auto px-5 py-5">
          {/* enable toggle */}
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3.5">
            <div>
              <p className="text-sm font-semibold text-white">{t("coach.title")}</p>
              <p className={`text-xs ${settings.enabled ? "text-emerald-300" : "text-slate-500"}`}>
                {settings.enabled ? t("settings.enabled") : t("settings.disabled")}
              </p>
            </div>
            <button
              onClick={() => onChange({ ...settings, enabled: !settings.enabled })}
              className={`relative h-7 w-12 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                settings.enabled ? "bg-emerald-500" : "bg-slate-700"
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
          <p className="mt-6 mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
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
                      ? "border-emerald-400/50 bg-emerald-400/10 ring-1 ring-emerald-400/30"
                      : "border-white/10 bg-slate-950/40 hover:border-white/20 hover:bg-slate-950/70"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Bot className={`h-5 w-5 shrink-0 ${active ? "text-emerald-400" : "text-slate-400"}`} />
                    <div className="min-w-0 flex-1">
                      <p className={`truncate text-sm font-medium ${active ? "text-white" : "text-slate-300"}`}>
                        {model.label}
                      </p>
                      <p className="text-xs text-slate-500">{model.provider} · free</p>
                    </div>
                    {active && <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow shadow-emerald-400/50" />}
                  </div>
                  <p className="mt-2 truncate pl-8 font-mono text-[10px] text-slate-600">{model.value}</p>
                </button>
              );
            })}
          </div>

          {/* tone */}
          <p className="mt-6 mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
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
                      ? "border-emerald-400/50 bg-emerald-400/10 ring-1 ring-emerald-400/30"
                      : "border-white/10 bg-slate-950/40 hover:border-white/20 hover:bg-slate-950/70"
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 shrink-0 ${active ? "text-emerald-400" : "text-slate-400"}`}
                  />
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${active ? "text-white" : "text-slate-300"}`}>
                      {t(`settings.tone.${opt.value}.label`)}
                    </p>
                    <p className="text-xs text-slate-500">
                      {t(`settings.tone.${opt.value}.desc`)}
                    </p>
                  </div>
                  {active && (
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow shadow-emerald-400/50" />
                  )}
                </button>
              );
            })}
          </div>

          {/* focus */}
          <p className="mt-6 mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
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
                      ? "border-emerald-400/50 bg-emerald-400/10 ring-1 ring-emerald-400/30"
                      : "border-white/10 bg-slate-950/40 hover:border-white/20 hover:bg-slate-950/70"
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 shrink-0 ${active ? "text-emerald-400" : "text-slate-400"}`}
                  />
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${active ? "text-white" : "text-slate-300"}`}>
                      {t(`settings.focus.${opt.value}.label`)}
                    </p>
                    <p className="text-xs text-slate-500">
                      {t(`settings.focus.${opt.value}.desc`)}
                    </p>
                  </div>
                  {active && (
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow shadow-emerald-400/50" />
                  )}
                </button>
              );
            })}
          </div>

          {/* toggles */}
          <p className="mt-6 mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
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
          <div className="mt-6 border-t border-white/5 pt-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold text-white">
                  <KeyRound className="h-4 w-4 text-emerald-400" />
                  {t("settings.api.title")}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  {t("settings.api.desc")}
                </p>
              </div>
              <button
                onClick={() => setShowKeyForm((current) => !current)}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20 transition-all hover:bg-emerald-400/20 active:scale-95"
                aria-label={t("settings.api.addAria")}
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            {showKeyForm && (
              <div className="mt-4 space-y-3 rounded-2xl border border-emerald-400/20 bg-slate-950/60 p-3">
                <select
                  value={provider}
                  onChange={(event) => setProvider(event.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-white outline-none focus:border-emerald-400/50"
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
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-white outline-none placeholder:text-slate-600 focus:border-emerald-400/50"
                />
                <input
                  value={keyValue}
                  onChange={(event) => setKeyValue(event.target.value)}
                  type="password"
                  placeholder={t("settings.api.valuePlaceholder")}
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-white outline-none placeholder:text-slate-600 focus:border-emerald-400/50"
                />
                <button
                  onClick={addApiKey}
                  disabled={!keyValue.trim()}
                  className="w-full rounded-xl bg-emerald-400 px-3 py-2.5 text-sm font-bold text-slate-950 transition-all hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {t("settings.api.add")}
                </button>
                <p className="text-[11px] leading-relaxed text-amber-300/80">
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
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/40 px-3 py-2.5"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-slate-400">
                        <KeyRound className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-semibold text-slate-200">{key.label}</p>
                        <p className="truncate font-mono text-[11px] text-slate-500">
                          {visible ? key.value : "••••••••••••••••"}
                        </p>
                      </div>
                      <button
                        onClick={() => setVisibleKeyId(visible ? null : key.id)}
                        className="text-slate-500 transition-colors hover:text-slate-200"
                        aria-label={visible ? t("settings.api.hide") : t("settings.api.show")}
                      >
                        {visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                      <button
                        onClick={() => removeApiKey(key.id)}
                        className="text-slate-500 transition-colors hover:text-red-400"
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
        <div className="border-t border-white/5 px-5 py-4">
          <button
            onClick={onClose}
            className="w-full rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-500 px-6 py-3 font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:brightness-110 active:scale-[0.98]"
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
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3">
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5 shrink-0 text-slate-400" />
        <div>
          <p className="text-sm font-medium text-slate-300">{label}</p>
          <p className={`text-xs ${checked ? "text-emerald-300" : "text-slate-500"}`}>
            {checked
              ? `${desc} · ${t("settings.stateOn")}`
              : `${desc} · ${t("settings.stateOff")}`}
          </p>
        </div>
      </div>
      <button
        onClick={onToggle}
        className={`relative h-7 w-12 shrink-0 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:ring-offset-2 focus:ring-offset-slate-900 ${
          checked ? "bg-emerald-500" : "bg-slate-700"
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
