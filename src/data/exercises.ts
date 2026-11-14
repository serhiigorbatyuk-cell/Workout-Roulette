import {
  Dumbbell,
  Heart,
  Activity,
  Flame,
  Zap,
  Wind,
  Footprints,
  PersonStanding,
  Armchair,
  Timer,
  type LucideIcon,
} from "lucide-react";

export type Difficulty = "beginner" | "intermediate" | "pro";

export type ExerciseId =
  | "squat"
  | "plank"
  | "pushup"
  | "jumpingJacks"
  | "lunges"
  | "highKnees"
  | "crunch"
  | "gluteBridge"
  | "burpee"
  | "plankJacks"
  | "legRaises"
  | "jumpSquat"
  | "superman"
  | "mountainClimber"
  | "tPushup";

export interface Exercise {
  id: ExerciseId;
  icon: LucideIcon;
  /** "reps" shows a rep count; "time" shows a countdown timer */
  mode: "reps" | "time";
  /** reps count when mode === "reps" */
  reps?: number;
  /** seconds when mode === "time" */
  seconds?: number;
}

interface DifficultyPreset {
  repsScale: number;
  timeScale: number;
  pool: Omit<Exercise, "reps" | "seconds">[];
}

const POOL: Omit<Exercise, "reps" | "seconds">[] = [
  { id: "squat", icon: PersonStanding, mode: "reps" },
  { id: "plank", icon: Activity, mode: "time" },
  { id: "pushup", icon: Armchair, mode: "reps" },
  { id: "jumpingJacks", icon: Footprints, mode: "time" },
  { id: "lunges", icon: PersonStanding, mode: "reps" },
  { id: "highKnees", icon: Heart, mode: "time" },
  { id: "crunch", icon: Flame, mode: "reps" },
  { id: "gluteBridge", icon: Zap, mode: "time" },
  { id: "burpee", icon: Dumbbell, mode: "reps" },
  { id: "plankJacks", icon: Wind, mode: "time" },
  { id: "legRaises", icon: Heart, mode: "reps" },
  { id: "jumpSquat", icon: Zap, mode: "reps" },
  { id: "superman", icon: Wind, mode: "time" },
  { id: "mountainClimber", icon: Footprints, mode: "time" },
  { id: "tPushup", icon: Armchair, mode: "reps" },
];

const BEGINNER_EXCLUDED: ExerciseId[] = ["burpee", "jumpSquat", "tPushup"];

const PRESETS: Record<Difficulty, DifficultyPreset> = {
  beginner: {
    repsScale: 10,
    timeScale: 20,
    pool: POOL.filter((e) => !BEGINNER_EXCLUDED.includes(e.id)),
  },
  intermediate: {
    repsScale: 15,
    timeScale: 35,
    pool: POOL,
  },
  pro: {
    repsScale: 25,
    timeScale: 50,
    pool: POOL,
  },
};

function scaleReps(base: number, difficulty: Difficulty): number {
  const preset = PRESETS[difficulty];
  return Math.round((base * preset.repsScale) / 10);
}

const BASE_REPS: Partial<Record<ExerciseId, number>> = {
  squat: 12,
  pushup: 8,
  lunges: 10,
  crunch: 12,
  burpee: 8,
  jumpSquat: 10,
  tPushup: 8,
  legRaises: 14,
};

export function generateWorkout(
  difficulty: Difficulty,
  count: number = 3,
  timeSeconds?: number,
): Exercise[] {
  const preset = PRESETS[difficulty];
  const shuffled = [...preset.pool].sort(() => Math.random() - 0.5);
  const safeCount = Math.max(1, Math.min(count, preset.pool.length));
  const picked = shuffled.slice(0, safeCount);
  const seconds = timeSeconds ?? preset.timeScale;

  return picked.map((base) => {
    if (base.mode === "reps") {
      const baseReps = BASE_REPS[base.id] ?? 10;
      return { ...base, reps: scaleReps(baseReps, difficulty) };
    }
    return { ...base, seconds };
  });
}

export const DIFFICULTY_OPTIONS: Difficulty[] = [
  "beginner",
  "intermediate",
  "pro",
];

export const TIMER_ICON = Timer;
