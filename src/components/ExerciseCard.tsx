import { useEffect, useState } from "react";
import type { Exercise } from "@/data/exercises";
import { Play, Pause, RotateCcw } from "lucide-react";
import { useI18n } from "@/i18n/context";

interface ExerciseCardProps {
  exercise: Exercise;
  index: number;
}

export function ExerciseCard({ exercise, index }: ExerciseCardProps) {
  const { t } = useI18n();
  const Icon = exercise.icon;
  const isTimeMode = exercise.mode === "time";
  const totalSeconds = exercise.seconds ?? 0;

  const [remaining, setRemaining] = useState(totalSeconds);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    setRemaining(totalSeconds);
    setRunning(false);
  }, [totalSeconds]);

  useEffect(() => {
    if (!running || !isTimeMode) return;
    if (remaining <= 0) {
      setRunning(false);
      return;
    }
    const id = setInterval(() => setRemaining((r) => r - 1), 1000);
    return () => clearInterval(id);
  }, [running, isTimeMode, remaining]);

  const progress = isTimeMode && totalSeconds > 0
    ? ((totalSeconds - remaining) / totalSeconds) * 100
    : 0;

  const isDone = isTimeMode && remaining === 0;

  return (
    <div
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-950/90 p-6 shadow-2xl transition-all duration-300 hover:border-emerald-400/40 hover:shadow-emerald-500/10"
      style={{ animation: `cardIn 0.5s ease-out ${index * 0.12}s both` }}
    >
      {/* accent glow */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-emerald-500/15 blur-3xl transition-opacity duration-300 group-hover:bg-emerald-500/25" />

      <div className="relative flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 text-slate-950 shadow-lg shadow-emerald-500/30">
          <Icon className="h-7 w-7" strokeWidth={2.5} />
        </div>
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-300 ring-1 ring-emerald-400/20">
          {t("card.exercise", { n: index + 1 })}
        </span>
      </div>

      <h3 className="relative mt-5 text-xl font-bold text-white">
        {t(`exercises.${exercise.id}.name`)}
      </h3>
      <p className="relative mt-1 text-sm leading-relaxed text-slate-400">
        {t(`exercises.${exercise.id}.cue`)}
      </p>

      <div className="relative mt-5 flex items-center justify-between">
        {isTimeMode ? (
          <div className="flex items-baseline gap-2">
            <span
              className={`text-4xl font-black tabular-nums tracking-tight ${
                isDone ? "text-emerald-400" : "text-white"
              }`}
            >
              {remaining.toString().padStart(2, "0")}
            </span>
            <span className="text-sm font-medium text-slate-500">
              {t("card.seconds")}
            </span>
          </div>
        ) : (
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black tabular-nums tracking-tight text-white">
              {exercise.reps}
            </span>
            <span className="text-sm font-medium text-slate-500">
              {t("card.reps")}
            </span>
          </div>
        )}

        {isTimeMode && (
          <button
            onClick={() => setRunning((r) => !r)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/30 transition-all hover:bg-emerald-400/20 hover:scale-105 active:scale-95"
            aria-label={running ? t("card.pause") : t("card.start")}
          >
            {isDone ? (
              <RotateCcw className="h-5 w-5" />
            ) : running ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5" />
            )}
          </button>
        )}
      </div>

      {isTimeMode && (
        <div className="relative mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-1000 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
}
