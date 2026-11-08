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
      className="group relative overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-2xl transition-all duration-300 hover:border-[color:var(--accent-border)] hover:shadow-accent"
      style={{ animation: `cardIn 0.5s ease-out ${index * 0.12}s both` }}
    >
      {/* accent glow */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[color:var(--accent-soft)] blur-3xl transition-colors duration-300 group-hover:bg-[color:var(--accent-soft-strong)]" />

      <div className="relative flex items-start justify-between">
        <div className="accent-gradient flex h-14 w-14 items-center justify-center rounded-2xl text-[color:var(--accent-ink)] shadow-accent-sm">
          <Icon className="h-7 w-7" strokeWidth={2.5} />
        </div>
        <span className="rounded-full bg-[color:var(--accent-soft)] px-3 py-1 text-xs font-semibold tracking-wide text-[color:var(--accent)] ring-1 ring-[color:var(--accent-border)]">
          {t("card.exercise", { n: index + 1 })}
        </span>
      </div>

      <h3 className="relative mt-5 text-xl font-bold text-[color:var(--text)]">
        {t(`exercises.${exercise.id}.name`)}
      </h3>
      <p className="relative mt-1 text-sm leading-relaxed text-[color:var(--text-muted)]">
        {t(`exercises.${exercise.id}.cue`)}
      </p>

      <div className="relative mt-5 flex items-center justify-between">
        {isTimeMode ? (
          <div className="flex items-baseline gap-2">
            <span
              className={`text-4xl font-black tabular-nums tracking-tight ${
                isDone ? "text-[color:var(--accent)]" : "text-[color:var(--text)]"
              }`}
            >
              {remaining.toString().padStart(2, "0")}
            </span>
            <span className="text-sm font-medium text-[color:var(--text-faint)]">
              {t("card.seconds")}
            </span>
          </div>
        ) : (
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black tabular-nums tracking-tight text-[color:var(--text)]">
              {exercise.reps}
            </span>
            <span className="text-sm font-medium text-[color:var(--text-faint)]">
              {t("card.reps")}
            </span>
          </div>
        )}

        {isTimeMode && (
          <button
            onClick={() => setRunning((r) => !r)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-[color:var(--accent)] ring-1 ring-[color:var(--accent-border)] transition-all hover:bg-[color:var(--accent-soft-strong)] hover:scale-105 active:scale-95"
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
        <div className="relative mt-4 h-1.5 w-full overflow-hidden rounded-full bg-[color:var(--border-soft)]">
          <div
            className="accent-gradient-x h-full rounded-full transition-all duration-1000 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
}
