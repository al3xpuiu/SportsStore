import { NgModule } from '@angular/core';
import {ProductRepository} from './product-repository';
import {StaticDataSource} from './static-data-source';

@NgModule({
  providers: [ProductRepository, StaticDataSource],
})
export class ModelModule { }
