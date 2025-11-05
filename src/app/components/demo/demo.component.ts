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
      window.open('./assets/demos/service/index.html', '_blank', 'width=1200,height=800');
    } else {
      alert('Mobile phone and tablet version of website available soon.');
    }
  }

  openRestaurantDemo(): void {
    if (this.isDesktop()) {
      window.open('./assets/demos/restaurant/index.html', '_blank', 'width=1200,height=800');
    } else {
      alert('Mobile phone and tablet version of website available soon.');
    }
  }

  openManufacturingDemo(): void {
    if (this.isDesktop()) {
      // Add timestamp to prevent caching issues
      const timestamp = new Date().getTime();
      window.open(`./assets/demos/manufacturing/index.html?t=${timestamp}`, '_blank', 'width=1200,height=800');
    } else {
      alert('Mobile phone and tablet version of website available soon.');
    }
  }

  openChurchDemo(): void {
    if (this.isDesktop()) {
      window.open ('https://churchsample.seguin.dev/#/', '_blank', 'width=400,height=700');
      //window.open('./assets/demos/church/index.html', '_blank', 'width=1200,height=800');
    } else {
      window.open ('https://churchsample.seguin.dev/#/', '_blank', 'width=400,height=700');
      //alert('Mobile phone and tablet version of website available soon.');
    }
  }

  openStoreDemo(): void {
    if (this.isDesktop()) {
      window.open('./assets/demos/store/index.html', '_blank', 'width=1200,height=800');
    } else {
      alert('Mobile phone and tablet version of website available soon.');
    }
  }

  onImageError(event: any): void {
    console.log('Image failed to load:', event.target.src);
    // Fallback to a default image or handle the error
    event.target.src = './assets/service-preview.svg';
  }
}
