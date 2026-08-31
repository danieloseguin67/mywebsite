import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslationService, Translations } from '../../services/translation.service';
import { DataService } from '../../services/data.service';
import { Expertise } from '../../models/expertise.model';
import { Project } from '../../models/project.model';
import { Testimonial } from '../../models/testimonial.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  translations: Translations;
  expertises: Expertise[] = [];
  projects: Project[] = [];
  testimonials: Testimonial[] = [];
  currentLang: string = 'en';

  constructor(
    private translationService: TranslationService,
    private dataService: DataService,
    private router: Router
  ) {
    this.translations = this.translationService.getTranslations();
  }

  ngOnInit(): void {
    this.translationService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
      this.translations = this.translationService.getTranslations(lang);
      this.loadPreviewData();
    });
  }

  navigateTo(path: string, event: Event): void {
    event.preventDefault();
    this.router.navigateByUrl(path);
  }

  private loadPreviewData(): void {
    this.dataService.getExpertises().subscribe(data => {
      this.expertises = (data[this.currentLang as keyof typeof data] || data.en).slice(0, 3);
    });

    this.dataService.getProjects().subscribe(data => {
      this.projects = (data[this.currentLang as keyof typeof data] || data.en).slice(0, 3);
    });

    this.dataService.getTestimonials(this.currentLang).subscribe(data => {
      this.testimonials = data.slice(0, 2);
    });
  }
}
