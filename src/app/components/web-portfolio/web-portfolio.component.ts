import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslationService, Translations } from '../../services/translation.service';

export interface WebPortfolioItem {
  id: string;
  category: 'services' | 'hospitality' | 'industrial' | 'retail' | 'community' | 'clients';
  image: string;
  demoUrl: string;
}

interface WebsitePackage {
  level: string;
  badge: string;
  title: string;
  price: string;
  delivery: string;
  database: string;
  externalServices: string[];
  cms: string;
  includes: string[];
  excludes: string[];
  theme: 'starter' | 'business' | 'advanced';
}

interface PackageComparisonFeature {
  feature: string;
  starter: string;
  business: string;
  advanced: string;
}

@Component({
  selector: 'app-web-portfolio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './web-portfolio.component.html',
  styleUrl: './web-portfolio.component.css'
})
export class WebPortfolioComponent implements OnInit {
  translations: Translations;
  selectedCategory: string = 'all';
  showDevelopmentPackages = false;

  websiteDevelopmentPackages: WebsitePackage[] = [
    {
      level: '1. Starter Package',
      badge: 'AI Web Presence',
      title: 'Starter Package - AI Web Presence',
      price: '$450-$900',
      delivery: '48-72 hours',
      database: 'None',
      externalServices: ['None'],
      cms: 'None',
      includes: [
        '3-5 page modern responsive website',
        'AI-accelerated development',
        'Basic SEO',
        'Contact form',
        'Deployment to chosen hosting',
        '1-2 revisions'
      ],
      excludes: [
        'Database integration',
        'CMS / admin dashboard',
        'Third-party API integrations',
        'Hosting fees (Azure, AWS, or any web hosting provider billed separately)'
      ],
      theme: 'starter'
    },
    {
      level: '2. Business Package',
      badge: 'AI Website + SQL Server Database',
      title: 'Business Package - AI Website + SQL Server Database',
      price: '$1,200-$2,500',
      delivery: '5-7 days',
      database: 'SQL Server',
      externalServices: ['None'],
      cms: 'Basic CMS (custom admin panel)',
      includes: [
        'Everything in Starter',
        '5-10 pages',
        'SQL Server database integration',
        'Admin dashboard (CRUD)',
        'Authentication (email/password)',
        'Basic CMS for content updates',
        'Blog module',
        'Google Analytics + Search Console',
        '30 days support'
      ],
      excludes: [
        'Third-party API integrations (Stripe, Dataverse, etc.)',
        'Fully custom UI/UX design',
        'Role-based access control',
        'Hosting fees (Azure, AWS, or any web hosting provider billed separately)'
      ],
      theme: 'business'
    },
    {
      level: '3. Advanced Package',
      badge: 'AI Web App + SQL Server + API Integrations',
      title: 'Advanced Package - AI Web App + SQL Server + API Integrations',
      price: '$2,500-$5,000',
      delivery: '10-14 days',
      database: 'SQL Server',
      externalServices: ['Stripe', 'Power Platform Dataverse', 'Any custom API-enabled service'],
      cms: 'Full CMS (advanced admin panel)',
      includes: [
        'Everything in Business Package',
        'Fully custom UI/UX',
        'REST or GraphQL API integrations',
        'External services (Stripe, Dataverse, or any API-enabled system)',
        'Role-based access control',
        'Advanced dashboards + reporting',
        'Automated workflows (email, SMS, webhooks)',
        '45-60 days support'
      ],
      excludes: [
        'Ongoing content writing / copywriting',
        'Paid ad campaign management',
        'Hosting fees (Azure, AWS, or any web hosting provider billed separately)'
      ],
      theme: 'advanced'
    }
  ];

  packageComparisonFeatures: PackageComparisonFeature[] = [
    { feature: 'SQL Server', starter: 'No', business: 'Yes', advanced: 'Yes' },
    { feature: 'CMS', starter: 'No', business: 'Basic', advanced: 'Full' },
    { feature: 'API Integrations', starter: 'No', business: 'No', advanced: 'Stripe, Dataverse, Custom APIs' },
    { feature: 'Delivery', starter: '2-3 days', business: '5-7 days', advanced: '10-14 days' },
    { feature: 'Price', starter: '$450-$900', business: '$1,200-$2,500', advanced: '$2,500-$5,000' }
  ];

  portfolioItems: WebPortfolioItem[] = [
    {
      id: 'service',
      category: 'services',
      image: './assets/service-preview.svg',
      demoUrl: 'https://servicesample.seguin.dev/#/'
    },
    {
      id: 'restaurant',
      category: 'hospitality',
      image: './assets/restaurant-preview.svg',
      demoUrl: 'https://restaurantsample.seguin.dev/#/'
    },
    {
      id: 'manufacturing',
      category: 'industrial',
      image: './assets/manufacturing-preview.svg',
      demoUrl: 'https://manufacturingsample.seguin.dev/#/'
    },
    {
      id: 'store',
      category: 'retail',
      image: './assets/store-preview.svg',
      demoUrl: 'https://storesample.seguin.dev/#/'
    },
    {
      id: 'church',
      category: 'community',
      image: './assets/church-preview.svg',
      demoUrl: 'https://churchsample.seguin.dev/#/'
    },
    {
      id: 'realestate',
      category: 'clients',
      image: './assets/realestate-preview.svg',
      demoUrl: 'https://realestatewebcompanion.seguin.dev/#/listings'
    },
    {
      id: 'daniel-portfolio',
      category: 'clients',
      image: './assets/daniel-preview.svg',
      demoUrl: 'https://daniel.seguin.dev/#/home'
    },
    {
      id: 'roxane',
      category: 'clients',
      image: './assets/roxane-preview.svg',
      demoUrl: 'https://roxanebelanger.com/#/home'
    },
    {
      id: 'grocery',
      category: 'clients',
      image: './assets/grocery-preview.svg',
      demoUrl: 'https://danieloseguin67.github.io/groceryapp/'
    },
    {
      id: 'montreal4rent',
      category: 'clients',
      image: './assets/montreal4rent-preview.svg',
      demoUrl: 'https://montreal4rent.com/'
    }
  ];

  constructor(private translationService: TranslationService) {
    this.translations = this.translationService.getTranslations();
  }

  ngOnInit(): void {
    this.translationService.currentLang$.subscribe(lang => {
      this.translations = this.translationService.getTranslations(lang);
    });
  }

  filterCategory(category: string): void {
    this.selectedCategory = category;
  }

  toggleDevelopmentPackages(): void {
    this.showDevelopmentPackages = !this.showDevelopmentPackages;
  }

  get filteredItems(): WebPortfolioItem[] {
    if (this.selectedCategory === 'all') {
      return this.portfolioItems;
    }
    return this.portfolioItems.filter(item => item.category === this.selectedCategory);
  }

  private isDesktop(): boolean {
    return window.innerWidth >= 1024;
  }

  openDemo(url: string): void {
    if (this.isDesktop()) {
      window.open(url, '_blank', 'width=1280,height=800,resizable=yes,scrollbars=yes');
    } else {
      window.open(url, '_blank');
    }
  }

  onImageError(event: any): void {
    event.target.src = './assets/service-preview.svg';
  }
}
