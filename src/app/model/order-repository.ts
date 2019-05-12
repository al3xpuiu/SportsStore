import {Order} from './order';
import {StaticDataSource} from './static-data-source';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class OrderRepository {

  private orders: Array<Order> = [];


  constructor(private dataSource: StaticDataSource) {
  }

  getOrders() : Array<Order> {
    return this.orders;
  }

  saveOrder(order: Order) : Observable<Order> {
    return this.dataSource.saveOrder(order);
  }
}
