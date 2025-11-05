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

  openServiceDemo(): void {
    // display message for user to to advise demo will be available soon
    alert('Service demo will be available soon.');
    //window.open('./assets/demos/service/index.html', '_blank', 'width=1200,height=800');
  }

  openRestaurantDemo(): void {
    alert('Restaurant demo will be available soon.');
    //window.open('./assets/demos/restaurant/index.html', '_blank', 'width=1200,height=800');
  }

  openManufacturingDemo(): void {
    // Add timestamp to prevent caching issues
    alert ('Manufacturing demo will be available soon.');
    //const timestamp = new Date().getTime();
    //window.open(`./assets/demos/manufacturing/index.html?t=${timestamp}`, '_blank', 'width=1200,height=800');
  }

  openChurchDemo(): void {
    alert ('Church demo will be available soon.');
    //window.open('./assets/demos/church/index.html', '_blank', 'width=1200,height=800');
  }

  openStoreDemo(): void {
    alert ('Store demo will be available soon.');
    //window.open('./assets/demos/store/index.html', '_blank', 'width=1200,height=800');
  }

  onImageError(event: any): void {
    console.log('Image failed to load:', event.target.src);
    // Fallback to a default image or handle the error
    event.target.src = './assets/service-preview.svg';
  }
}
