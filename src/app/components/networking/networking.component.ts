import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, Translations } from '../../services/translation.service';
import { DataService } from '../../services/data.service';
import { NetworkingItem } from '../../models/networking.model';

@Component({
  selector: 'app-networking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './networking.component.html',
  styleUrl: './networking.component.css'
})
export class NetworkingComponent implements OnInit {
  translations: Translations;
  networkingItems: NetworkingItem[] = [];
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
      this.loadNetworking();
    });
    this.loadNetworking();
  }

  loadNetworking(): void {
    this.dataService.getNetworking().subscribe(data => {
      this.networkingItems = data[this.currentLang as keyof typeof data] || data.en;
    });
  }

  openLink(url: string): void {
    window.open(url, '_blank');
  }
}
