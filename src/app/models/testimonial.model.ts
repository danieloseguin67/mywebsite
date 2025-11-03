export interface Testimonial {
  name: string;
  company: string;
  position: string;
  testimonial: string;
}

export interface TestimonialData {
  en: Testimonial[];
  fr: Testimonial[];
  es: Testimonial[];
}