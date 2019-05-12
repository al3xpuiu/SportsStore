import {Product} from './product';
import {Injectable} from '@angular/core';

@Injectable()
export class Cart {

  public lines: Array<CartLine> = [];
  public itemCount: number = 0;
  public cartPrice: number = 0;

  addLine(product: Product, quantity: number = 1) {
    let line: CartLine | undefined = this.lines.find(line => line.product.id == product.id);
    if (line != undefined) {
      line.quantity += Number(quantity);
    } else {
      this.lines.push(new CartLine(product, quantity));
    }
    this.recalculate();
  }

  updateQuantity(product: Product, quantity: number) {
    let line: CartLine | undefined = this.lines.find(line => line.product.id == product.id);
    if (line != undefined) {
      line.quantity = Number(quantity);
    }
    this.recalculate()
  }

  removeLine(id: number) {
    let lineIndex: number = this.lines.findIndex(line => line.product.id == id);
    this.lines.splice(lineIndex, 1);
    this.recalculate();
  }

  clear() {
    this.lines =[];
    this.itemCount = 0;
    this.cartPrice = 0;
  }

  recalculate() {
    this.itemCount = 0;
    this.cartPrice = 0;
    this.lines.forEach((value => {
      this.itemCount += value.quantity;
      if (value.product.price) {
        value.lineTotal = value.product.price * value.quantity;
        this.cartPrice += (value.product.price * value.quantity);
      }
    }))
  }
}

export class CartLine {

  public lineTotal : number = 0;
  constructor(public product: Product,
              public quantity: number) {
  }
}
