import { Component, OnInit } from '@angular/core';
import {OrderRepository} from '../../model/order-repository';
import {Order} from '../../model/order';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  orderSent: boolean = false;
  submitted: boolean = false;

  constructor(public orderRepository: OrderRepository,
              public order: Order) { }

  ngOnInit() {
  }

  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.orderRepository.saveOrder(this.order)
        .subscribe(order => {
          this.order.clear();
          this.orderSent = true;
          this.submitted = false;
        })
    }
  }

}
