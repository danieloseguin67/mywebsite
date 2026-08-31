import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService, Translations } from '../../services/translation.service';

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
  formData = {
    name: '',
    phone: '',
    email: '',
    ideaDescription: ''
  };
  formStatus: { show: boolean; success: boolean; message: string } = {
    show: false,
    success: false,
    message: ''
  };

  constructor(private translationService: TranslationService) {
    this.translations = this.translationService.getTranslations();
  }

  ngOnInit(): void {
    this.translationService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
      this.translations = this.translationService.getTranslations(lang);
    });
  }

  onSubmit(): void {
    if (!this.formData.name || !this.formData.phone || !this.formData.email || !this.formData.ideaDescription) {
      this.formStatus = {
        show: true,
        success: false,
        message: this.translations.bookCall.requiredMessage
      };

      setTimeout(() => {
        this.formStatus.show = false;
      }, 5000);

      return;
    }

    this.translationService.sendEmail({
      name: this.formData.name,
      email: this.formData.email,
      subject: 'Book a Call Request',
      message: `Phone: ${this.formData.phone}\n\nIdea description:\n${this.formData.ideaDescription}`
    }).subscribe({
      next: () => {
        this.formStatus = {
          show: true,
          success: true,
          message: this.translations.bookCall.successMessage
        };

        this.formData = { name: '', phone: '', email: '', ideaDescription: '' };

        setTimeout(() => {
          this.formStatus.show = false;
        }, 5000);
      },
      error: (error) => {
        console.error('Error sending book a call request:', error);

        this.formStatus = {
          show: true,
          success: false,
          message: this.translations.bookCall.errorMessage
        };

        setTimeout(() => {
          this.formStatus.show = false;
        }, 5000);
      }
    });
  }
}
