export interface Expertise {
  name: string;
  description: string;
  tools: string[];
}

export interface ExpertiseData {
  en: Expertise[];
  fr: Expertise[];
}