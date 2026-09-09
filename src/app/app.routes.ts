import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DaasComponent } from './components/daas/daas.component';
import { ExpertisesComponent } from './components/expertises/expertises.component';
import { ServicesComponent } from './components/services/services.component';
import { ProductsComponent } from './components/products/products.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { DemoComponent } from './components/demo/demo.component';
import { WebPortfolioComponent } from './components/web-portfolio/web-portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { NetworkingComponent } from './components/networking/networking.component';
import { ContactComponent } from './components/contact/contact.component';
import { BookCallComponent } from './components/book-call/book-call.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'developer-as-a-service', component: DaasComponent },
  { path: 'expertises', component: ExpertisesComponent },
  { path: 'projets-daas', component: ProjectsComponent },
  { path: 'projets-daas/:slug', component: ProjectDetailComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'web-portfolio', component: WebPortfolioComponent },
  { path: 'web-porfolio', redirectTo: '/web-portfolio', pathMatch: 'full' },
  { path: 'networking', component: NetworkingComponent },
  { path: 'demo', redirectTo: '/web-portfolio', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'book-a-call', component: BookCallComponent }
];
