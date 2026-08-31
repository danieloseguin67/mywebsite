export interface DaasPhase {
  title: string;
  description: string;
}

export interface DaasContent {
  model: string;
  phases: DaasPhase[];
  benefits: string[];
  pricing: string;
  deployment: string;
  support: string;
}

export interface DaasData {
  en: DaasContent;
  fr: DaasContent;
}