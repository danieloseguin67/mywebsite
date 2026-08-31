import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TranslationService, Translations } from '../../services/translation.service';
import { DataService } from '../../services/data.service';
import { DaasContent } from '../../models/daas.model';

@Component({
  selector: 'app-daas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './daas.component.html',
  styleUrl: './daas.component.css'
})
export class DaasComponent implements OnInit, OnDestroy {
  translations: Translations;
  content?: DaasContent;
  currentLang: string = 'en';
  private subscription = new Subscription();

  constructor(
    private translationService: TranslationService,
    private dataService: DataService,
    private router: Router
  ) {
    this.translations = this.translationService.getTranslations();
  }

  ngOnInit(): void {
    this.subscription.add(
      this.translationService.currentLang$.subscribe(lang => {
        this.currentLang = lang;
        this.translations = this.translationService.getTranslations(lang);
        this.loadContent();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  navigateToContact(event: Event): void {
    event.preventDefault();
    this.router.navigateByUrl('/contact');
  }

  private loadContent(): void {
    this.dataService.getDaas().subscribe(data => {
      this.content = data[this.currentLang as keyof typeof data] || data.en;
    });
  }
}