import {Injectable} from '@angular/core';
import {Product} from './product';
import {StaticDataSource} from './static-data-source';

@Injectable()
export class ProductRepository {
  private products: Array<Product>;
  private categories: Array<string>;

  constructor(private dataSource : StaticDataSource) {

    dataSource.getProducts().subscribe(data => {
      this.products = data;
      this.categories = data
        .map(p => p.category)
        .filter((value, index, array) => array.indexOf(value) == index)
        .sort();
    });
  }

  findAll() : Array<Product> {
    return this.products;
  }

  findById(id : number) : Product {
    return this.products.find(product => product.id == id);
  }

  findAllCategories() : Array<string> {
    return this.categories;
  }
}

