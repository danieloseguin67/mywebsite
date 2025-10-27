import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, Translations } from '../../services/translation.service';
import { DataService } from '../../services/data.service';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  translations: Translations;
  services: Service[] = [];
  currentLang: string = 'en';

  constructor(
    private translationService: TranslationService,
    private dataService: DataService
  ) {
    this.translations = this.translationService.getTranslations();
  }

  ngOnInit(): void {
    this.translationService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
      this.translations = this.translationService.getTranslations(lang);
      this.loadServices();
    });
    this.loadServices();
  }

  loadServices(): void {
    this.dataService.getServices().subscribe(data => {
      this.services = data[this.currentLang as keyof typeof data] || data.en;
    });
  }
}
