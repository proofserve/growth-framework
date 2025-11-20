export type SkillLevel = 0 | 1 | 2 | 3 | 4 | 5;

export interface Milestone {
  summary: string;
  signals: string[];
  examples: string[];
}

export interface Track {
  displayName: string;
  category: string;
  description: string;
  milestones: Milestone[];
}

export interface Tracks {
  [key: string]: Track;
}

export interface SkillLevels {
  [trackId: string]: SkillLevel;
}

export interface LevelInfo {
  label: string;
  minPoints: number;
  maxPoints: number;
}

