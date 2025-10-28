import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, Translations } from '../../services/translation.service';
import { DataService } from '../../services/data.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  translations: Translations;
  projects: Project[] = [];
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
      this.loadProjects();
    });
    this.loadProjects();
  }

  loadProjects(): void {
    this.dataService.getProjects().subscribe(data => {
      this.projects = data[this.currentLang as keyof typeof data] || data.en;
    });
  }

  getTechnologies(technology: string): string[] {
    return technology.split(',').map(t => t.trim());
  }
}
