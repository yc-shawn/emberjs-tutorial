import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CartService extends Service {
  @tracked cart = [];

  add() {
    this.cart.push({});
  }

  remove() {
    this.cart.pop();
  }
}
