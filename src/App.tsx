import { useMemo, useState } from "react";
import {
  Dumbbell,
  Shuffle,
  AlertCircle,
  ChevronDown,
  Sparkles,
  Settings,
} from "lucide-react";
import {
  generateWorkout,
  DIFFICULTY_OPTIONS,
  type Difficulty,
  type Exercise,
} from "@/data/exercises";
import {
  generateCoachPrompt,
  estimateDuration,
  DEFAULT_COACH_SETTINGS,
  COACH_MODELS,
  type CoachSettings,
} from "@/data/aiCoach";
import { ExerciseCard } from "@/components/ExerciseCard";
import { CoachPanel } from "@/components/CoachPanel";
import { SettingsDrawer } from "@/components/SettingsDrawer";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useI18n } from "@/i18n/context";

type AppState = "empty" | "success" | "error";

export default function App() {
  const { t } = useI18n();
  const [difficulty, setDifficulty] = useState<Difficulty | "">("");
  const [workout, setWorkout] = useState<Exercise[] | null>(null);
  const [duration, setDuration] = useState(0);
  const [state, setState] = useState<AppState>("empty");
  const [spinning, setSpinning] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settings, setSettings] = useState<CoachSettings>(DEFAULT_COACH_SETTINGS);

  const coachPrompt = useMemo(() => {
    if (!workout || !difficulty) return "";
    return generateCoachPrompt(workout, difficulty, settings, t);
  }, [workout, difficulty, settings, t]);

  function handleSpin() {
    if (!difficulty) {
      setState("error");
      setWorkout(null);
      return;
    }
    setSpinning(true);
    setState("empty");
    setWorkout(null);
    setTimeout(() => {
      const w = generateWorkout(difficulty);
      setWorkout(w);
      setDuration(estimateDuration(w));
      setState("success");
      setSpinning(false);
    }, 650);
  }

  function handleSelect(value: string) {
    setDifficulty(value as Difficulty);
    if (state === "error") setState("empty");
  }

  function handleSettingsChange(next: CoachSettings) {
    setSettings(next);
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05060f] text-white">
      {/* ambient neon background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(120% 90% at 12% -5%, rgba(16,185,129,0.28), transparent 55%), radial-gradient(100% 85% at 88% 5%, rgba(139,92,246,0.28), transparent 55%), radial-gradient(90% 75% at 50% 115%, rgba(6,182,212,0.24), transparent 60%)",
          }}
        />
        <div
          className="neon-blob absolute -left-40 top-[-15%] h-[560px] w-[560px] rounded-full bg-emerald-500/30 blur-[150px]"
          style={{ animationDuration: "16s" }}
        />
        <div
          className="neon-blob absolute -right-32 top-[8%] h-[520px] w-[520px] rounded-full bg-violet-600/30 blur-[150px]"
          style={{ animationDuration: "21s", animationDelay: "-4s" }}
        />
        <div
          className="neon-blob absolute bottom-[-20%] left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/25 blur-[150px]"
          style={{ animationDuration: "24s", animationDelay: "-9s" }}
        />
        <div
          className="neon-blob absolute right-[18%] top-1/2 h-[340px] w-[340px] rounded-full bg-fuchsia-600/25 blur-[130px]"
          style={{ animationDuration: "19s", animationDelay: "-13s" }}
        />
        {/* neon glow line along the top */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
      </div>

      {/* grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 25%, transparent 78%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 25%, transparent 78%)",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center px-5 py-10 sm:px-8 sm:py-16">
        {/* header */}
        <header className="flex w-full max-w-md items-center justify-between">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 text-slate-950 shadow-lg shadow-emerald-500/30">
                <Dumbbell className="h-7 w-7" strokeWidth={2.5} />
              </div>
              <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                Workout <span className="text-emerald-400">Roulette</span>
              </h1>
            </div>
          </div>
          <button
            onClick={() => setSettingsOpen(true)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/80 text-slate-300 transition-all hover:border-emerald-400/40 hover:text-emerald-300 active:scale-95"
            aria-label={t("app.settingsAria")}
          >
            <Settings className="h-5 w-5" />
          </button>
        </header>
        <p className="mt-3 max-w-md text-center text-sm text-slate-400 sm:text-base">
          {t("app.subtitle")}
        </p>

        <LanguageSwitcher />

        {/* controls */}
        <div className="mt-10 w-full max-w-md">
          <label className="mb-2 block text-sm font-medium text-slate-300">
            {t("app.difficultyLabel")}
          </label>
          <div className="relative">
            <select
              value={difficulty}
              onChange={(e) => handleSelect(e.target.value)}
              className={`w-full appearance-none rounded-2xl border bg-slate-900/80 px-4 py-3.5 pr-12 text-base font-medium text-white outline-none transition-all ${
                state === "error"
                  ? "border-red-400/60 ring-1 ring-red-400/40"
                  : "border-white/10 focus:border-emerald-400/60 focus:ring-1 focus:ring-emerald-400/40"
              }`}
            >
              <option value="" disabled>
                {t("app.difficultyPlaceholder")}
              </option>
              {DIFFICULTY_OPTIONS.map((value) => (
                <option key={value} value={value} className="bg-slate-900">
                  {t(`difficulty.${value}`)}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          </div>

          {/* main action button */}
          <button
            onClick={handleSpin}
            disabled={spinning}
            className="group relative mt-5 flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-500 px-6 py-4 text-lg font-bold text-slate-950 shadow-xl shadow-emerald-500/30 transition-all hover:shadow-emerald-500/50 hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
            style={spinning ? { animation: "pulseGlow 1s ease-in-out infinite" } : undefined}
          >
            <Shuffle
              className={`h-6 w-6 transition-transform ${spinning ? "duration-700" : "duration-300 group-hover:rotate-180"}`}
              style={spinning ? { animation: "spinRoulette 0.65s linear infinite" } : undefined}
            />
            {spinning ? t("app.spinning") : t("app.spin")}
          </button>

          {/* error message */}
          {state === "error" && (
            <div
              className="mt-4 flex items-center gap-2.5 rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"
              style={{ animation: "shake 0.4s ease-in-out" }}
            >
              <AlertCircle className="h-5 w-5 shrink-0 text-red-400" />
              <span>{t("app.errorSelect")}</span>
            </div>
          )}
        </div>

        {/* output area */}
        <div className="mt-10 w-full">
          {state === "empty" && !workout && (
            <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-slate-900/40 px-6 py-16 text-center">
              <div
                className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-400 ring-1 ring-emerald-400/20"
                style={{ animation: "float 3s ease-in-out infinite" }}
              >
                <Sparkles className="h-9 w-9" />
              </div>
              <p className="mt-5 max-w-sm text-base text-slate-300">
                {t("app.emptyText")}
              </p>
              <p className="mt-1 text-xs text-slate-500">{t("app.emptyHint")}</p>
            </div>
          )}

          {state === "success" && workout && (
            <>
              <div className="mb-6 flex flex-col items-center gap-1 text-center">
                <p className="text-sm font-medium text-emerald-400">
                  {t("app.ready")}
                </p>
                <p className="text-xs text-slate-500">
                  {t("app.level", {
                    level: difficulty ? t(`difficulty.${difficulty}`) : "",
                  })}
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-3">
                {workout.map((ex, i) => (
                  <ExerciseCard key={`${ex.id}-${i}`} exercise={ex} index={i} />
                ))}
              </div>

              {settings.enabled && (
                <CoachPanel
                  prompt={coachPrompt}
                  durationMinutes={duration}
                  modelName={COACH_MODELS.find((model) => model.value === settings.model)?.label ?? t("coach.title")}
                />
              )}

              <div className="mt-8 flex justify-center">
                <button
                  onClick={handleSpin}
                  disabled={spinning}
                  className="group flex items-center gap-2.5 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-6 py-3.5 font-semibold text-emerald-300 transition-all hover:bg-emerald-400/20 hover:scale-105 active:scale-95 disabled:opacity-60"
                >
                  <Shuffle className="h-5 w-5 transition-transform group-hover:rotate-180" />
                  {t("app.spinAgain")}
                </button>
              </div>
            </>
          )}
        </div>

        <footer className="mt-auto pt-12 text-center text-xs text-slate-600">
          {t("app.footer")}
        </footer>
      </div>

      <SettingsDrawer
        open={settingsOpen}
        settings={settings}
        onChange={handleSettingsChange}
        onClose={() => setSettingsOpen(false)}
      />
    </div>
  );
}
