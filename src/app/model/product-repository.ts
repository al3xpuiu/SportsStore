import {Injectable} from '@angular/core';
import {Product} from './product';
import {StaticDataSource} from './static-data-source';

@Injectable()
export class ProductRepository {
  private products: Array<Product> = [];
  private categories: Array<string | undefined> = [];

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

  findById(id : number) : Product | undefined {
    return this.products.find(product => product.id == id);
  }

  findAllCategories() : Array<string | undefined> {
    return this.categories;
  }

  findByCategory(category : string | null) : Array<Product | undefined> {
    return this.products.filter((value => category == null || value.category == category));
  }
}

