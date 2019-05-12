import { Component, OnInit } from '@angular/core';
import {ProductRepository} from '../model/product-repository';
import {Product} from '../model/product';
import {Cart} from '../model/cart';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  private selectedCategory : string | null = null;
  productsPerPage : number = 4;
  selectedPage : number = 1;

  constructor(private productRepository : ProductRepository, private cart: Cart) { }

  ngOnInit() {
  }

  get products(): Array<Product | undefined> {
    let pageIndex : number = (this.selectedPage - 1) * this.productsPerPage;
    let myProducts : Array<Product | undefined> = this.productRepository.findByCategory(this.selectedCategory).slice(pageIndex, pageIndex + this.productsPerPage);
    return myProducts}

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

  changePage(newPage : number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize : string) {
    this.productsPerPage = Number(newSize);
    this.changePage(1)
  }

  get pageCount() : Array<number>{
    return Array(Math.ceil(this.productRepository.findByCategory(this.selectedCategory).length/this.productsPerPage));
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
  }
}
