import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslationService, Translations } from '../../services/translation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  translations: Translations;
  currentLang: string = 'en';
  menuOpen: boolean = false;

  constructor(private translationService: TranslationService) {
    this.translations = this.translationService.getTranslations();
  }

  ngOnInit(): void {
    this.translationService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
      this.translations = this.translationService.getTranslations(lang);
    });
  }

  changeLanguage(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.translationService.setLanguage(selectElement.value);
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
