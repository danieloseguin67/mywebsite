import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';
import enTranslations from '../../assets/i18n/en.json';
import frTranslations from '../../assets/i18n/fr.json';

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  timestamp: string;
}

export interface Translations {
  nav: {
    home: string;
    daas: string;
    expertises: string;
    daasProjects: string;
    webportfolio: string;
    services: string;
    products: string;
    skills: string;
    projects: string;
    demo: string;
    about: string;
    contact: string;
    testimonials: string;
    networking: string;
  };
  home: {
    title: string;
    subtitle: string;
    eyebrow: string;
    summaryTitle: string;
    summary: string;
    primaryCta: string;
    secondaryCta: string;
    expertisePreviewTitle: string;
    projectsPreviewTitle: string;
    testimonialsPreviewTitle: string;
    viewExpertises: string;
    viewProjects: string;
    viewTestimonials: string;
    rebuildTitle: string;
    rebuildMessage: string;
  };
  daas: {
    title: string;
    subtitle: string;
    modelTitle: string;
    phasesTitle: string;
    benefitsTitle: string;
    pricingTitle: string;
    deploymentTitle: string;
    supportTitle: string;
    ctaTitle: string;
    ctaText: string;
    primaryCta: string;
    secondaryCta: string;
  };
  expertises: { title: string; subtitle: string };
  services: { title: string };
  products: { title: string };
  skills: {
    title: string;
    constructionTitle: string;
    constructionMessage: string;
  };
  projects: {
    title: string;
    subtitle: string;
    technologyLabel: string;
    detailsLink: string;
    attachmentsTitle: string;
    backToProjects: string;
    notFoundTitle: string;
    notFoundMessage: string;
    constructionTitle: string;
    constructionMessage: string;
  };
  testimonials: { title: string; subtitle: string };
  networking: { title: string };
  webportfolio?: any;
  demo: {
    title: string;
    service: string;
    restaurant: string;
    manufacturing: string;
    store: string;
    church: string;
    placeholder: string;
    introduction: {
      title: string;
      paragraph1: string;
      paragraph2: string;
      callToAction: string;
    };
  };
  about: {
    title: string;
    imageLabel: string;
    bio: string;
    journeyTitle: string;
    journey: string;
    positioningTitle: string;
    positioning: string;
    visionTitle: string;
    vision: string;
    highlights: string[];
  };
  contact: {
    title: string;
    subtitle: string;
    imageLabel: string;
    addressTitle: string;
    contactOptionsTitle: string;
    emailTitle: string;
    emailValue: string;
    linkedinTitle: string;
    linkedinValue: string;
    linkedinUrl: string;
    bookCallTitle: string;
    bookCallValue: string;
    formTitle: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    requiredMessage: string;
    successMessage: string;
    errorMessage: string;
  };
  bookCall: {
    title: string;
    subtitle: string;
    name: string;
    phone: string;
    email: string;
    ideaDescription: string;
    send: string;
    requiredMessage: string;
    successMessage: string;
    errorMessage: string;
  };
  footer: { rights: string; tagline: string };
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLangSubject = new BehaviorSubject<string>('en');
  public currentLang$ = this.currentLangSubject.asObservable();

  private translations: { [key: string]: Translations } = {
    en: enTranslations as Translations,
    fr: frTranslations as Translations
  };

  constructor(private http: HttpClient) {
    // Initialize EmailJS with your public key from environment
    if (environment.emailjs.publicKey !== 'YOUR_ACTUAL_PUBLIC_KEY') {
      emailjs.init(environment.emailjs.publicKey);
    }
  }

  setLanguage(lang: string): void {
    this.currentLangSubject.next(lang);
  }

  getCurrentLanguage(): string {
    return this.currentLangSubject.value;
  }

  getTranslations(lang?: string): Translations {
    const currentLang = lang || this.currentLangSubject.value;
    return this.translations[currentLang] || this.translations['en'];
  }

  sendEmail(emailData: EmailData): Observable<EmailResponse> {
    // EmailJS Implementation
    // You need to:
    // 1. Sign up at https://emailjs.com/
    // 2. Create an email service (Gmail, Outlook, etc.)
    // 3. Create an email template
    // 4. Replace the placeholders below with your actual values
    
    const templateParams = {
      from_name: emailData.name,
      from_email: emailData.email,
      subject: emailData.subject,
      message: emailData.message,
      to_email: 'daniel@seguin.dev' // Your email address
    };

    // Replace these with your actual EmailJS values from environment:
    const SERVICE_ID = environment.emailjs.serviceId;
    const TEMPLATE_ID = environment.emailjs.templateId;

    // Check if EmailJS is properly configured
    if (SERVICE_ID === 'YOUR_ACTUAL_SERVICE_ID' || TEMPLATE_ID === 'YOUR_ACTUAL_TEMPLATE_ID') {
      console.error('❌ EmailJS not configured! Please set up your SERVICE_ID and TEMPLATE_ID');
      console.log('📧 To set up EmailJS:');
      console.log('1. Go to https://emailjs.com/ and create an account');
      console.log('2. Add an email service (Gmail, Outlook, etc.)');
      console.log('3. Create an email template');
      console.log('4. Get your Service ID, Template ID, and Public Key');
      console.log('5. Update the values in this service');
      
      return of({
        success: false,
        message: 'Email service not configured. Please contact administrator.',
        timestamp: new Date().toISOString()
      });
    }

    // Send email using EmailJS
    const emailPromise = emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
    
    return from(emailPromise).pipe(
      map((response: any) => ({
        success: true,
        message: 'Email sent successfully!',
        timestamp: new Date().toISOString()
      } as EmailResponse)),
      catchError((error: any) => {
        console.error('EmailJS Error:', error);
        return of({
          success: false,
          message: 'Failed to send email. Please try again later.',
          timestamp: new Date().toISOString()
        } as EmailResponse);
      })
    );
  }

  // Alternative method using backend API (recommended for production)
  sendEmailViaBackend(emailData: EmailData): Observable<EmailResponse> {
    // This method would call your backend API
    // Example implementation:
    return this.http.post<EmailResponse>('/api/send-email', emailData);
  }
}
