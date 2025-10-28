import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, Translations } from '../../services/translation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  translations: Translations;

  constructor(private translationService: TranslationService) {
    this.translations = this.translationService.getTranslations();
  }

  ngOnInit(): void {
    this.translationService.currentLang$.subscribe(lang => {
      this.translations = this.translationService.getTranslations(lang);
    });
  }
}
