export interface Skill {
  name: string;
  description: string;
  experience: string;
}

export interface SkillData {
  en: Skill[];
  fr: Skill[];
  es: Skill[];
}
