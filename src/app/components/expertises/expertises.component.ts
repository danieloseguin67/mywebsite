import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { TranslationService, Translations } from '../../services/translation.service';
import { DataService } from '../../services/data.service';
import { Expertise } from '../../models/expertise.model';

@Component({
  selector: 'app-expertises',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expertises.component.html',
  styleUrl: './expertises.component.css'
})
export class ExpertisesComponent implements OnInit, OnDestroy {
  translations: Translations;
  expertises: Expertise[] = [];
  currentLang: string = 'en';
  private subscription = new Subscription();

  constructor(
    private translationService: TranslationService,
    private dataService: DataService
  ) {
    this.translations = this.translationService.getTranslations();
  }

  ngOnInit(): void {
    this.subscription.add(
      this.translationService.currentLang$.subscribe(lang => {
        this.currentLang = lang;
        this.translations = this.translationService.getTranslations(lang);
        this.loadExpertises();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private loadExpertises(): void {
    this.dataService.getExpertises().subscribe(data => {
      this.expertises = data[this.currentLang as keyof typeof data] || data.en;
    });
  }
}