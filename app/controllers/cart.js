import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class CartController extends Controller {
  @service cart;

  get subtotal() {
    return 100;
  }

  get tax() {
    return this.subtotal * 0.09;
  }

  get total() {
    return this.subtotal + this.tax;
  }
}
