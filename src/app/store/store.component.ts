import { Component, OnInit } from '@angular/core';
import {ProductRepository} from '../model/product-repository';
import {Product} from '../model/product';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  private selectedCategory : string | null = null;

  constructor(private productRepository : ProductRepository) { }

  ngOnInit() {
  }

  get products(): Array<Product | undefined> {
    return this.productRepository.findByCategory(this.selectedCategory);
  }

  get categories() : Array<string | undefined> {
    return this.productRepository.findAllCategories();
  }

  changeCategory(newCategory?: string) {
    if (newCategory) {
      this.selectedCategory = newCategory;
    } else {
      this.selectedCategory = null;
    }
  }
}
