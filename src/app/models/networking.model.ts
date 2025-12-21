export interface NetworkingItem {
  name: string;
  description: string;
  url: string;
}

export interface NetworkingData {
  en: NetworkingItem[];
  fr: NetworkingItem[];
  es: NetworkingItem[];
}
