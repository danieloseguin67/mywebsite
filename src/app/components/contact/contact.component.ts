import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService, Translations } from '../../services/translation.service';

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
    // Simulate form submission
    const messages = {
      en: 'Thank you for your message! I will get back to you soon.',
      fr: 'Merci pour votre message! Je vous répondrai bientôt.',
      es: '¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.'
    };

    this.formStatus = {
      show: true,
      success: true,
      message: messages[this.currentLang as keyof typeof messages]
    };

    this.formData = { name: '', email: '', subject: '', message: '' };
    
    setTimeout(() => {
      this.formStatus.show = false;
    }, 5000);
  }
}
