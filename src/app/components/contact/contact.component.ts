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
      const errorMessages = {
        en: 'Please fill in all required fields.',
        fr: 'Veuillez remplir tous les champs obligatoires.',
        es: 'Por favor, complete todos los campos requeridos.'
      };
      
      this.formStatus = {
        show: true,
        success: false,
        message: errorMessages[this.currentLang as keyof typeof errorMessages]
      };
      
      setTimeout(() => {
        this.formStatus.show = false;
      }, 5000);
      
      return;
    }

    // Call email service
    this.translationService.sendEmail(this.formData).subscribe({
      next: (response) => {
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
      },
      error: (error) => {
        console.error('Error sending email:', error);
        
        const errorMessages = {
          en: 'Sorry, there was an error sending your message. Please try again later.',
          fr: 'Désolé, une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer plus tard.',
          es: 'Lo siento, hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.'
        };

        this.formStatus = {
          show: true,
          success: false,
          message: errorMessages[this.currentLang as keyof typeof errorMessages]
        };
        
        setTimeout(() => {
          this.formStatus.show = false;
        }, 5000);
      }
    });
  }
}
