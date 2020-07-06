import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CartService extends Service {
  @tracked cartList = [];

  add() {
    this.cartList = [...this.cartList, {}];
    console.log(this.cartList);
  }

  remove() {
    this.cartList.pop();
  }
}
