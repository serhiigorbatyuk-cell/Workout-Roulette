import type { Difficulty } from "@/data/exercises";
import type { Exercise } from "@/data/exercises";

export interface HistoryExercise {
  id: Exercise["id"];
  mode: Exercise["mode"];
  reps?: number;
  seconds?: number;
}

export interface HistoryEntry {
  id: string;
  date: string;
  difficulty: Difficulty;
  count: number;
  exercises: HistoryExercise[];
}

const STORAGE_KEY = "workout-roulette-history";
const MAX_ENTRIES = 30;

function isHistoryEntry(value: unknown): value is HistoryEntry {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof (value as HistoryEntry).id === "string" &&
    typeof (value as HistoryEntry).date === "string" &&
    typeof (value as HistoryEntry).difficulty === "string" &&
    Array.isArray((value as HistoryEntry).exercises)
  );
}

export function loadHistory(): HistoryEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isHistoryEntry) as HistoryEntry[];
  } catch {
    return [];
  }
}

export function addHistoryEntry(entry: HistoryEntry): HistoryEntry[] {
  const current = loadHistory();
  const next = [entry, ...current].slice(0, MAX_ENTRIES);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // localStorage may be unavailable
  }
  return next;
}

export function clearHistory(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // localStorage may be unavailable
  }
}

export function createHistoryEntry(
  difficulty: Difficulty,
  workout: Exercise[],
): HistoryEntry {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    date: new Date().toISOString(),
    difficulty,
    count: workout.length,
    exercises: workout.map((exercise) => ({
      id: exercise.id,
      mode: exercise.mode,
      reps: exercise.reps,
      seconds: exercise.seconds,
    })),
  };
}
