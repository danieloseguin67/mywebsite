import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, Translations } from '../../services/translation.service';
import { DataService } from '../../services/data.service';
import { Testimonial } from '../../models/testimonial.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  testimonials: Testimonial[] = [];
  translations!: Translations;
  private subscription = new Subscription();

  constructor(
    private translationService: TranslationService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.translationService.currentLang$.subscribe(() => {
        this.loadTranslations();
        this.loadTestimonials();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private loadTranslations(): void {
    this.translations = this.translationService.getTranslations();
  }

  private loadTestimonials(): void {
    const currentLang = this.translationService.getCurrentLanguage();
    this.dataService.getTestimonials(currentLang).subscribe({
      next: (data: Testimonial[]) => {
        this.testimonials = data;
      },
      error: (error: any) => {
        console.error('Error loading testimonials:', error);
      }
    });
  }
}