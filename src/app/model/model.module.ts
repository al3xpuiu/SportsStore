import { NgModule } from '@angular/core';
import {ProductRepository} from './product-repository';
import {StaticDataSource} from './static-data-source';
import {Cart} from './cart';

@NgModule({
  providers: [ProductRepository, StaticDataSource, Cart],
})
export class ModelModule { }
