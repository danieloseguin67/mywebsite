import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, Translations } from '../../services/translation.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnInit {
  translations: Translations;

  constructor(private translationService: TranslationService) {
    this.translations = this.translationService.getTranslations();
  }

  ngOnInit(): void {
    this.translationService.currentLang$.subscribe(lang => {
      this.translations = this.translationService.getTranslations(lang);
    });
  }

  private isDesktop(): boolean {
    return window.innerWidth >= 1024;
  }

  openServiceDemo(): void {
    if (this.isDesktop()) {
      // https://servicesample.seguin.dev/#/
      window.open ('https://servicesample.seguin.dev/#/', '_blank', 'width=1200,height=700');
    } else {
      window.open ('https://servicesample.seguin.dev/#/', '_blank', 'width=400,height=700');
    }
  }

  openRestaurantDemo(): void {
    if (this.isDesktop()) {
      window.open ('https://restaurantsample.seguin.dev/#/', '_blank', 'width=1200,height=700');
    } else {
      window.open ('https://restaurantsample.seguin.dev/#/', '_blank', 'width=400,height=700');
    }
  }

  openManufacturingDemo(): void {
    if (this.isDesktop()) {
      // Add timestamp to prevent caching issues
      const timestamp = new Date().getTime();
      window.open ('https://manufacturingsample.seguin.dev/#/', '_blank', 'width=1200,height=700');
    } else {
      window.open ('https://manufacturingsample.seguin.dev/#/', '_blank', 'width=400,height=700');
    }
  }

  openChurchDemo(): void {
    if (this.isDesktop()) {
      window.open ('https://churchsample.seguin.dev/#/', '_blank', 'width=1200,height=700');
    } else {
      window.open ('https://churchsample.seguin.dev/#/', '_blank', 'width=400,height=700');
    }
  }

  openStoreDemo(): void {
    if (this.isDesktop()) {
      window.open ('https://storesample.seguin.dev/#/', '_blank', 'width=1200,height=700');
    } else {
      window.open ('https://storesample.seguin.dev/#/', '_blank', 'width=400,height=700');
    }
  }

  onImageError(event: any): void {
    console.log('Image failed to load:', event.target.src);
    // Fallback to a default image or handle the error
    event.target.src = './assets/service-preview.svg';
  }
}
