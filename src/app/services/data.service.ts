import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ServiceData } from '../models/service.model';
import { ProductData } from '../models/product.model';
import { SkillData } from '../models/skill.model';
import { ProjectData } from '../models/project.model';
import { TestimonialData, Testimonial } from '../models/testimonial.model';
import { NetworkingData } from '../models/networking.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getServices(): Observable<ServiceData> {
    return this.http.get<ServiceData>('assets/data/services.json');
  }

  getProducts(): Observable<ProductData> {
    return this.http.get<ProductData>('assets/data/products.json');
  }

  getSkills(): Observable<SkillData> {
    return this.http.get<SkillData>('assets/data/skills.json');
  }

  getProjects(): Observable<ProjectData> {
    return this.http.get<ProjectData>('assets/data/projects.json');
  }

  getTestimonials(language: string = 'en'): Observable<Testimonial[]> {
    return this.http.get<TestimonialData>('assets/data/testimonials.json').pipe(
      map((data: TestimonialData) => data[language as keyof TestimonialData] || data.en)
    );
  }

  getNetworking(): Observable<NetworkingData> {
    return this.http.get<NetworkingData>('assets/data/networking.json');
  }
}
