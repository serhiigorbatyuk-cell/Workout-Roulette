import type { Exercise, Difficulty } from "@/data/exercises";
import type { TFunction } from "@/i18n/translations";

export type CoachModel =
  | "nvidia/nemotron-3.5-super-vl:free"
  | "dots-studio/dots-3-note-preview:free"
  | "nvidia/nemotron-3.5-lightning:free"
  | "nvidia/nemotron-3.5-content-safety:free";

export const COACH_MODELS: { value: CoachModel; label: string; provider: string }[] = [
  { value: "nvidia/nemotron-3.5-super-vl:free", label: "Nemotron 3.5 Super VL", provider: "NVIDIA" },
  { value: "dots-studio/dots-3-note-preview:free", label: "Dots3-Note Preview", provider: "Dots Studio" },
  { value: "nvidia/nemotron-3.5-lightning:free", label: "Nemotron 3.5 Lightning", provider: "NVIDIA" },
  { value: "nvidia/nemotron-3.5-content-safety:free", label: "Nemotron 3.5 Content Safety", provider: "NVIDIA" },
];

export interface CoachSettings {
  model: CoachModel;
  enabled: boolean;
  tone: "encouraging" | "strict" | "calm";
  focus: "technique" | "intensity" | "recovery";
  includeWarmup: boolean;
  includeMotivation: boolean;
}

export const DEFAULT_COACH_SETTINGS: CoachSettings = {
  model: "nvidia/nemotron-3.5-super-vl:free",
  enabled: true,
  tone: "encouraging",
  focus: "technique",
  includeWarmup: true,
  includeMotivation: true,
};

interface WorkoutStats {
  totalReps: number;
  totalTime: number;
  hasTimed: boolean;
  hasReps: boolean;
}

function analyze(workout: Exercise[]): WorkoutStats {
  let totalReps = 0;
  let totalTime = 0;
  for (const ex of workout) {
    if (ex.mode === "reps") totalReps += ex.reps ?? 0;
    else totalTime += ex.seconds ?? 0;
  }
  return {
    totalReps,
    totalTime,
    hasTimed: workout.some((e) => e.mode === "time"),
    hasReps: workout.some((e) => e.mode === "reps"),
  };
}

const WARMUP_KEYS = ["warmup.0", "warmup.1", "warmup.2"] as const;
const MOTIVATION_KEYS = [
  "motivation.0",
  "motivation.1",
  "motivation.2",
  "motivation.3",
  "motivation.4",
] as const;

function pick<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateCoachPrompt(
  workout: Exercise[],
  difficulty: Difficulty,
  settings: CoachSettings = DEFAULT_COACH_SETTINGS,
  t: TFunction,
): string {
  const stats = analyze(workout);
  const label = t(`difficulty.${difficulty}`);

  const parts: string[] = [];
  parts.push(t("prompt.title", { level: label }));
  parts.push(t(`prompt.tone.${settings.tone}`));

  if (settings.includeWarmup) {
    parts.push(t("prompt.warmup", { text: t(pick(WARMUP_KEYS)) }));
  }

  const exerciseNames = workout
    .map((exercise) => t(`exercises.${exercise.id}.name`))
    .join(", ");
  parts.push(t("prompt.complex", { names: exerciseNames }));
  parts.push(t(`pacing.${difficulty}`));

  const tipId = workout[0]?.id ?? workout[Math.floor(workout.length / 2)]?.id;
  const tip = tipId
    ? t(`exercises.${tipId}.tip`)
    : t(`exercises.plank.tip`);
  parts.push(t("prompt.technique", { tip }));
  parts.push(t(`prompt.focus.${settings.focus}`));

  const totalLoad =
    stats.hasReps && stats.hasTimed
      ? t("prompt.loadMixed", {
          reps: stats.totalReps,
          seconds: stats.totalTime,
        })
      : stats.hasReps
        ? t("prompt.loadReps", { reps: stats.totalReps })
        : t("prompt.loadTime", { seconds: stats.totalTime });
  parts.push(totalLoad);

  if (settings.includeMotivation) {
    parts.push(t("prompt.motivation", { text: t(pick(MOTIVATION_KEYS)) }));
  }

  return parts.join("\n");
}

export function estimateDuration(workout: Exercise[]): number {
  let seconds = 0;
  for (const ex of workout) {
    if (ex.mode === "time") seconds += ex.seconds ?? 0;
    else seconds += (ex.reps ?? 0) * 2.5;
  }
  return Math.max(1, Math.round(seconds / 60));
}
