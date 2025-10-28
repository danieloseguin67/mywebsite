import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, Translations } from '../../services/translation.service';
import { DataService } from '../../services/data.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  translations: Translations;
  products: Product[] = [];
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
      this.loadProducts();
    });
    this.loadProducts();
  }

  loadProducts(): void {
    this.dataService.getProducts().subscribe(data => {
      this.products = data[this.currentLang as keyof typeof data] || data.en;
    });
  }
}
