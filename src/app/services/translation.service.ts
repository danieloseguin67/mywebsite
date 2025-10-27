import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Translations {
  nav: {
    home: string;
    services: string;
    products: string;
    skills: string;
    projects: string;
    demo: string;
    about: string;
    contact: string;
  };
  home: {
    title: string;
    subtitle: string;
  };
  services: { title: string };
  products: { title: string };
  skills: { title: string };
  projects: { title: string };
  demo: {
    title: string;
    service: string;
    restaurant: string;
    manufacturing: string;
    store: string;
    church: string;
    placeholder: string;
  };
  about: {
    title: string;
    imageLabel: string;
    bio: string;
  };
  contact: {
    title: string;
    imageLabel: string;
    addressTitle: string;
    formTitle: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
  };
  footer: { rights: string };
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLangSubject = new BehaviorSubject<string>('en');
  public currentLang$ = this.currentLangSubject.asObservable();

  private translations: { [key: string]: Translations } = {
    en: {
      nav: {
        home: 'Home',
        services: 'Services',
        products: 'Products',
        skills: 'Skills',
        projects: 'Projects',
        demo: 'Demo',
        about: 'About Me',
        contact: 'Contact Me'
      },
      home: {
        title: 'Welcome to Daniel Seguin Consultant',
        subtitle: 'Senior IT Consultant - Delivering Excellence in Technology Solutions'
      },
      services: { title: 'Services' },
      products: { title: 'Products' },
      skills: { title: 'Skills' },
      projects: { title: 'Projects' },
      demo: {
        title: 'Demo Websites',
        service: 'Service Industry Website',
        restaurant: 'Restaurant Industry Website',
        manufacturing: 'Manufacturing Industry Website',
        store: 'Store Industry Website',
        church: 'Church Website',
        placeholder: 'Demo Coming Soon'
      },
      about: {
        title: 'About Me',
        imageLabel: 'Photo',
        bio: 'As a Senior IT Consultant with extensive experience in delivering innovative technology solutions, I specialize in helping businesses transform their operations through strategic technology implementation. With a proven track record across multiple industries, I bring deep expertise in software development, system architecture, and digital transformation. My passion lies in understanding client needs and delivering solutions that drive real business value.'
      },
      contact: {
        title: 'Contact Me',
        imageLabel: 'Contact',
        addressTitle: 'Address',
        formTitle: 'Send Me a Message',
        name: 'Name:',
        email: 'Email:',
        subject: 'Subject:',
        message: 'Message:',
        send: 'Send Message'
      },
      footer: { rights: 'All rights reserved.' }
    },
    fr: {
      nav: {
        home: 'Accueil',
        services: 'Services',
        products: 'Produits',
        skills: 'Compétences',
        projects: 'Projets',
        demo: 'Démo',
        about: 'À Propos',
        contact: 'Me Contacter'
      },
      home: {
        title: 'Bienvenue chez Daniel Seguin Consultant',
        subtitle: 'Consultant IT Senior - Excellence en Solutions Technologiques'
      },
      services: { title: 'Services' },
      products: { title: 'Produits' },
      skills: { title: 'Compétences' },
      projects: { title: 'Projets' },
      demo: {
        title: 'Sites Web de Démonstration',
        service: 'Site Web Industrie des Services',
        restaurant: 'Site Web Industrie de la Restauration',
        manufacturing: 'Site Web Industrie Manufacturière',
        store: 'Site Web Industrie du Commerce',
        church: 'Site Web d\'Église',
        placeholder: 'Démo Bientôt Disponible'
      },
      about: {
        title: 'À Propos de Moi',
        imageLabel: 'Photo',
        bio: 'En tant que consultant IT senior avec une vaste expérience dans la fourniture de solutions technologiques innovantes, je me spécialise dans l\'aide aux entreprises pour transformer leurs opérations grâce à une mise en œuvre technologique stratégique. Avec un historique éprouvé dans plusieurs industries, j\'apporte une expertise approfondie en développement logiciel, architecture système et transformation numérique. Ma passion réside dans la compréhension des besoins des clients et la fourniture de solutions qui génèrent une réelle valeur commerciale.'
      },
      contact: {
        title: 'Me Contacter',
        imageLabel: 'Contact',
        addressTitle: 'Adresse',
        formTitle: 'Envoyez-moi un Message',
        name: 'Nom:',
        email: 'Courriel:',
        subject: 'Sujet:',
        message: 'Message:',
        send: 'Envoyer le Message'
      },
      footer: { rights: 'Tous droits réservés.' }
    },
    es: {
      nav: {
        home: 'Inicio',
        services: 'Servicios',
        products: 'Productos',
        skills: 'Habilidades',
        projects: 'Proyectos',
        demo: 'Demo',
        about: 'Acerca de Mí',
        contact: 'Contáctame'
      },
      home: {
        title: 'Bienvenido a Daniel Seguin Consultant',
        subtitle: 'Consultor TI Senior - Ofreciendo Excelencia en Soluciones Tecnológicas'
      },
      services: { title: 'Servicios' },
      products: { title: 'Productos' },
      skills: { title: 'Habilidades' },
      projects: { title: 'Proyectos' },
      demo: {
        title: 'Sitios Web de Demostración',
        service: 'Sitio Web de Industria de Servicios',
        restaurant: 'Sitio Web de Industria de Restaurantes',
        manufacturing: 'Sitio Web de Industria Manufacturera',
        store: 'Sitio Web de Industria de Tiendas',
        church: 'Sitio Web de Iglesia',
        placeholder: 'Demo Próximamente'
      },
      about: {
        title: 'Acerca de Mí',
        imageLabel: 'Foto',
        bio: 'Como consultor TI senior con amplia experiencia en la entrega de soluciones tecnológicas innovadoras, me especializo en ayudar a las empresas a transformar sus operaciones a través de la implementación tecnológica estratégica. Con un historial comprobado en múltiples industrias, aporto una profunda experiencia en desarrollo de software, arquitectura de sistemas y transformación digital. Mi pasión radica en comprender las necesidades de los clientes y entregar soluciones que impulsen un valor comercial real.'
      },
      contact: {
        title: 'Contáctame',
        imageLabel: 'Contacto',
        addressTitle: 'Dirección',
        formTitle: 'Envíame un Mensaje',
        name: 'Nombre:',
        email: 'Correo Electrónico:',
        subject: 'Asunto:',
        message: 'Mensaje:',
        send: 'Enviar Mensaje'
      },
      footer: { rights: 'Todos los derechos reservados.' }
    }
  };

  constructor() {}

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
}
