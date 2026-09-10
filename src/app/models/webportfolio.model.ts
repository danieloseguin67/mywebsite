export interface Webportfolio {
  name: string;
  description: string;
  tools: string[];
}

export interface WebportfolioData {
  en: Webportfolio[];
  fr: Webportfolio[];
}