import { Component, OnInit } from '@angular/core';
import {ProductRepository} from '../model/product-repository';
import {Product} from '../model/product';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private productRepository : ProductRepository) { }

  ngOnInit() {
  }

  get products(): Array<Product> {
    return this.productRepository.findAll();
  }

  get categories() : Array<string> {
    return this.productRepository.findAllCategories();
  }
}
