export interface Product {
  name: string;
  description: string;
  comingSoon: boolean;
}

export interface ProductData {
  en: Product[];
  fr: Product[];
  es: Product[];
}
