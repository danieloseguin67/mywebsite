import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

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
    services: string;
    products: string;
    skills: string;
    projects: string;
    demo: string;
    about: string;
    contact: string;
    testimonials: string;
  };
  home: {
    title: string;
    subtitle: string;
    news1: string;
    news2: string;
    news3: string;
    news4: string;
    news5: string;
    news6: string;
  };
  services: { title: string };
  products: { title: string };
  skills: { title: string };
  projects: { title: string };
  testimonials: { title: string };
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
        contact: 'Contact Me',
        testimonials: 'Customer Testimonials'
      },
      home: {
        title: 'Welcome to Daniel Seguin Consultant',
        subtitle: 'Senior IT Consultant - Delivering Excellence in Technology Solutions',
        news1: '🌟 Specialist in Enterprise Application Development – PowerBuilder, Informix 4GL, Java, .NET, Python, PowerShell, Unix/Linux Shells',
        news2: '🎯 Currently delivering mission-critical solutions at PSPC as a PowerBuilder Developer',
        news3: '🚀 On a journey to become a Microsoft Power Platform and Azure Solutions Architect',
        news4: '💡 Passionate about creating intuitive user experiences and clean, maintainable code',
        news5: '🔗 Integrating cutting-edge technologies like AI and Cloud to deliver robust, scalable solutions',
        news6: '✅ Helping organizations modernize legacy systems and embrace digital transformation'
      },
      services: { title: 'Services' },
      products: { title: 'Products' },
      skills: { title: 'Skills' },
      projects: { title: 'Projects' },
      testimonials: { title: 'Customer Testimonials' },
      demo: {
        title: 'Demo Websites',
        service: 'Service Industry Website',
        restaurant: 'Restaurant Industry Website',
        manufacturing: 'Manufacturing Industry Website',
        store: 'Store Industry Website',
        church: 'Church Website',
        placeholder: 'Demo Coming Soon',
        introduction: {
          title: 'Professional Website Design for Every Industry',
          paragraph1: 'Your website is more than just an online presence—it\'s your brand\'s first impression. I specialize in creating modern, responsive, and visually appealing websites tailored to your business needs. Whether you run a service company, restaurant, manufacturing firm, retail store, or a community organization, I design websites that combine functionality, aesthetics, and user experience to help you stand out.',
          paragraph2: 'Explore my demo websites below to see how I bring ideas to life across different industries. Each design is crafted to be easy to navigate, mobile-friendly, and optimized for performance, ensuring your visitors have a seamless experience.',
          callToAction: 'Ready to elevate your online presence? Let\'s build a website that works for you.'
        }
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
        contact: 'Me Contacter',
        testimonials: 'Témoignages Clients'
      },
      home: {
        title: 'Bienvenue chez Daniel Seguin Consultant',
        subtitle: 'Consultant IT Senior - Excellence en Solutions Technologiques',
        news1: '🌟 Spécialiste en Développement d\'Applications d\'Entreprise – PowerBuilder, Informix 4GL, Java, .NET, Python, PowerShell, Unix/Linux Shells',
        news2: '🎯 Actuellement en mission critique à SPAC en tant que Développeur PowerBuilder',
        news3: '🚀 En route pour devenir Architecte de Solutions Microsoft Power Platform et Azure',
        news4: '💡 Passionné par la création d\'expériences utilisateur intuitives et de code propre et maintenable',
        news5: '🔗 Intégration de technologies de pointe comme l\'IA et le Cloud pour des solutions robustes et évolutives',
        news6: '✅ Aide les organisations à moderniser les systèmes hérités et à adopter la transformation numérique'
      },
      services: { title: 'Services' },
      products: { title: 'Produits' },
      skills: { title: 'Compétences' },
      projects: { title: 'Projets' },
      testimonials: { title: 'Témoignages Clients' },
      demo: {
        title: 'Sites Web de Démonstration',
        service: 'Site Web Industrie des Services',
        restaurant: 'Site Web Industrie de la Restauration',
        manufacturing: 'Site Web Industrie Manufacturière',
        store: 'Site Web Industrie du Commerce',
        church: 'Site Web d\'Église',
        placeholder: 'Démo Bientôt Disponible',
        introduction: {
          title: 'Conception de Sites Web Professionnels pour Chaque Industrie',
          paragraph1: 'Votre site web est bien plus qu\'une simple présence en ligne—c\'est la première impression de votre marque. Je me spécialise dans la création de sites web modernes, adaptatifs et visuellement attrayants, conçus sur mesure selon les besoins de votre entreprise. Que vous dirigiez une entreprise de services, un restaurant, une firme manufacturière, un magasin de détail ou une organisation communautaire, je conçois des sites web qui combinent fonctionnalité, esthétique et expérience utilisateur pour vous aider à vous démarquer.',
          paragraph2: 'Explorez mes sites web de démonstration ci-dessous pour voir comment je donne vie aux idées à travers différentes industries. Chaque design est conçu pour être facile à naviguer, compatible avec les appareils mobiles et optimisé pour la performance, garantissant à vos visiteurs une expérience fluide.',
          callToAction: 'Prêt à élever votre présence en ligne? Construisons ensemble un site web qui fonctionne pour vous.'
        }
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
        contact: 'Contáctame',
        testimonials: 'Testimonios de Clientes'
      },
      home: {
        title: 'Bienvenido a Daniel Seguin Consultant',
        subtitle: 'Consultor TI Senior - Ofreciendo Excelencia en Soluciones Tecnológicas',
        news1: '🌟 Especialista en Desarrollo de Aplicaciones Empresariales – PowerBuilder, Informix 4GL, Java, .NET, Python, PowerShell, Unix/Linux Shells',
        news2: '🎯 Actualmente entregando soluciones de misión crítica en PSPC como Desarrollador PowerBuilder',
        news3: '🚀 En camino a convertirse en Arquitecto de Soluciones de Microsoft Power Platform y Azure',
        news4: '💡 Apasionado por crear experiencias de usuario intuitivas y código limpio y mantenible',
        news5: '🔗 Integrando tecnologías de vanguardia como IA y Cloud para entregar soluciones robustas y escalables',
        news6: '✅ Ayudando a las organizaciones a modernizar sistemas heredados y adoptar la transformación digital'
      },
      services: { title: 'Servicios' },
      products: { title: 'Productos' },
      skills: { title: 'Habilidades' },
      projects: { title: 'Proyectos' },
      testimonials: { title: 'Testimonios de Clientes' },
      demo: {
        title: 'Sitios Web de Demostración',
        service: 'Sitio Web de Industria de Servicios',
        restaurant: 'Sitio Web de Industria de Restaurantes',
        manufacturing: 'Sitio Web de Industria Manufacturera',
        store: 'Sitio Web de Industria de Tiendas',
        church: 'Sitio Web de Iglesia',
        placeholder: 'Demo Próximamente',
        introduction: {
          title: 'Diseño de Sitios Web Profesionales para Cada Industria',
          paragraph1: 'Su sitio web es más que solo una presencia en línea—es la primera impresión de su marca. Me especializo en crear sitios web modernos, responsivos y visualmente atractivos, adaptados a las necesidades de su negocio. Ya sea que dirija una empresa de servicios, restaurante, firma manufacturera, tienda minorista o una organización comunitaria, diseño sitios web que combinan funcionalidad, estética y experiencia del usuario para ayudarle a destacarse.',
          paragraph2: 'Explore mis sitios web de demostración a continuación para ver cómo doy vida a las ideas en diferentes industrias. Cada diseño está elaborado para ser fácil de navegar, compatible con dispositivos móviles y optimizado para el rendimiento, asegurando que sus visitantes tengan una experiencia perfecta.',
          callToAction: '¿Listo para elevar su presencia en línea? Construyamos un sitio web que funcione para usted.'
        }
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
