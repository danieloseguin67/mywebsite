import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslationService, Translations } from '../../services/translation.service';

interface BookCallLabels {
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
  packageInterest?: string;
  projectType?: string;
  currentWebsite?: string;
}

@Component({
  selector: 'app-book-call',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-call.component.html',
  styleUrl: './book-call.component.css'
})
export class BookCallComponent implements OnInit {
  translations: Translations;
  currentLang: string = 'en';
  isWebSolutionBooking = false;
  formData = {
    name: '',
    phone: '',
    email: '',
    packageInterest: '',
    projectType: '',
    currentWebsite: '',
    ideaDescription: ''
  };
  formStatus: { show: boolean; success: boolean; message: string } = {
    show: false,
    success: false,
    message: ''
  };

  packageOptions = [
    'Starter Package - AI Web Presence',
    'Business Package - AI Website + SQL Server Database',
    'Advanced Package - AI Web App + SQL Server + API Integrations',
    'Not sure yet'
  ];

  constructor(
    private translationService: TranslationService,
    private route: ActivatedRoute
  ) {
    this.translations = this.translationService.getTranslations();
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.isWebSolutionBooking = params.get('type') === 'web-solution';
    });

    this.translationService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
      this.translations = this.translationService.getTranslations(lang);
    });
  }

  get labels(): BookCallLabels {
    if (!this.isWebSolutionBooking) {
      return this.translations.bookCall;
    }

    return (this.translations as any).webSolutionBookCall || {
      title: 'Book a call about your web solution',
      subtitle: 'Tell me what kind of website or web application you need, and I will follow up to discuss the best package, timeline, and next steps.',
      name: 'Name:',
      phone: 'Phone number:',
      email: 'Email:',
      packageInterest: 'Website development package:',
      projectType: 'What do you need built?',
      currentWebsite: 'Current website, if you have one:',
      ideaDescription: 'Describe your website goals:',
      send: 'Request a web solution call',
      requiredMessage: 'Please fill in all required fields.',
      successMessage: 'Thank you! I received your web solution request and will contact you soon to schedule a call.',
      errorMessage: 'Sorry, there was an error sending your request. Please try again later.'
    };
  }

  onSubmit(): void {
    if (!this.formData.name || !this.formData.phone || !this.formData.email || !this.formData.ideaDescription || (this.isWebSolutionBooking && !this.formData.packageInterest)) {
      this.formStatus = {
        show: true,
        success: false,
        message: this.labels.requiredMessage
      };

      setTimeout(() => {
        this.formStatus.show = false;
      }, 5000);

      return;
    }

    const message = this.isWebSolutionBooking
      ? `Phone: ${this.formData.phone}\n\nPackage interest: ${this.formData.packageInterest}\n\nProject type: ${this.formData.projectType || 'Not provided'}\n\nCurrent website: ${this.formData.currentWebsite || 'Not provided'}\n\nWebsite goals:\n${this.formData.ideaDescription}`
      : `Phone: ${this.formData.phone}\n\nIdea description:\n${this.formData.ideaDescription}`;

    this.translationService.sendEmail({
      name: this.formData.name,
      email: this.formData.email,
      subject: this.isWebSolutionBooking ? 'Web Solution Call Request' : 'Book a Call Request',
      message
    }).subscribe({
      next: () => {
        this.formStatus = {
          show: true,
          success: true,
          message: this.labels.successMessage
        };

        this.formData = { name: '', phone: '', email: '', packageInterest: '', projectType: '', currentWebsite: '', ideaDescription: '' };

        setTimeout(() => {
          this.formStatus.show = false;
        }, 5000);
      },
      error: (error) => {
        console.error('Error sending book a call request:', error);

        this.formStatus = {
          show: true,
          success: false,
          message: this.labels.errorMessage
        };

        setTimeout(() => {
          this.formStatus.show = false;
        }, 5000);
      }
    });
  }
}
