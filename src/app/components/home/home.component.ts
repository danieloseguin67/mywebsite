import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslationService, Translations } from '../../services/translation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  translations: Translations;

  constructor(
    private translationService: TranslationService,
    private router: Router
  ) {
    this.translations = this.translationService.getTranslations();
  }

  ngOnInit(): void {
    this.translationService.currentLang$.subscribe(lang => {
      this.translations = this.translationService.getTranslations(lang);
    });
  }

  navigateTo(path: string, event: Event): void {
    event.preventDefault();
    this.router.navigateByUrl(path);
  }
}
