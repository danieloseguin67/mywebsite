import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data.service';
import { Project } from '../../models/project.model';
import { TranslationService, Translations } from '../../services/translation.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  translations: Translations;
  project?: Project;
  currentLang: string = 'en';
  private slug: string = '';
  private subscription = new Subscription();

  get detailParagraphs(): string[] {
    const detail = this.project?.detailPlaceholder;

    if (!detail) {
      return [];
    }

    return Array.isArray(detail) ? detail : [detail];
  }

  get projectAttachments(): { title: string; url: string }[] {
    return (this.project?.attachments || []).filter(attachment =>
      attachment.title.trim() && attachment.url.trim()
    );
  }

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private translationService: TranslationService
  ) {
    this.translations = this.translationService.getTranslations();
  }

  ngOnInit(): void {
    this.subscription.add(
      this.route.paramMap.subscribe(params => {
        this.slug = params.get('slug') || '';
        this.loadProject();
      })
    );

    this.subscription.add(
      this.translationService.currentLang$.subscribe(lang => {
        this.currentLang = lang;
        this.translations = this.translationService.getTranslations(lang);
        this.loadProject();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private loadProject(): void {
    if (!this.slug) {
      this.project = undefined;
      return;
    }

    this.dataService.getProjects().subscribe(data => {
      const projects = data[this.currentLang as keyof typeof data] || data.en;
      this.project = projects.find(project => project.slug === this.slug);
    });
  }
}