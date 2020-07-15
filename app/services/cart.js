import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

class CartItem {
  @tracked count = 0;

  constructor(id, name, price, image, color, count) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.color = color;
    this.count = count;
  }
}

export default class CartService extends Service {
  @tracked cartList = [];

  add(item, color) {
    const existingItem = this.cartList.find(cartItem => {
      return cartItem.id === item.id && cartItem.color === color;
    });
    if (existingItem) {
      existingItem.count += 1;
    } else {
      const colorInfo = item.colors.find(c => c.color === color);
      this.cartList = [...this.cartList, new CartItem (
        item.id,
        item.name,
        item.price,
        colorInfo.image,
        colorInfo.color,
        1,
      )];
    }
  }

  remove(item) {
    const index = this.cartList.indexOf(item);
    const cartList = this.cartList;
    cartList.splice(index, 1);
    this.cartList = cartList;
  }
}
