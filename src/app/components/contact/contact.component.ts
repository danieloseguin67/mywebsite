import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService, Translations, EmailData } from '../../services/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  translations: Translations;
  currentLang: string = 'en';
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
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
    // Validate form before submission
    if (!this.formData.name || !this.formData.email || !this.formData.subject || !this.formData.message) {
      this.formStatus = {
        show: true,
        success: false,
        message: this.translations.contact.requiredMessage
      };
      
      setTimeout(() => {
        this.formStatus.show = false;
      }, 5000);
      
      return;
    }

    // Call email service
    this.translationService.sendEmail(this.formData).subscribe({
      next: (response) => {
        this.formStatus = {
          show: true,
          success: true,
          message: this.translations.contact.successMessage
        };

        this.formData = { name: '', email: '', subject: '', message: '' };
        
        setTimeout(() => {
          this.formStatus.show = false;
        }, 5000);
      },
      error: (error) => {
        console.error('Error sending email:', error);

        this.formStatus = {
          show: true,
          success: false,
          message: this.translations.contact.errorMessage
        };
        
        setTimeout(() => {
          this.formStatus.show = false;
        }, 5000);
      }
    });
  }
}
