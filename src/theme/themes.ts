export type ThemeId = "violet" | "emerald" | "sunset" | "light";

export interface ThemeOption {
  id: ThemeId;
  swatch: string;
}

export const THEMES: ThemeOption[] = [
  { id: "violet", swatch: "linear-gradient(135deg, #8b5cf6, #d946ef)" },
  { id: "emerald", swatch: "linear-gradient(135deg, #10b981, #06b6d4)" },
  { id: "sunset", swatch: "linear-gradient(135deg, #f97316, #f43f5e)" },
  { id: "light", swatch: "linear-gradient(135deg, #e2e8f0, #ffffff)" },
];
