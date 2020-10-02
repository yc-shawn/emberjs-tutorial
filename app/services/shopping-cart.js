import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

class Item {
  @tracked count;

  name;
  color;
  image;
  price;

  constructor(item) {
    this.count = item.count;
    this.name = item.name;
    this.color = item.color;
    this.image = item.image;
    this.price = item.price;
  }
}
export default class ShoppingCartService extends Service {
  @tracked itemList = [];

  addItem(item) {
    const existingItem = this.itemList.find(({ name, color}) => {
      return name === item.name && color === item.color;
    });

    if (existingItem) {
      existingItem.count += 1;
    } else {
      this.itemList = [...this.itemList, new Item({
        ...item,
        count: 1,
      })];
    }

  }
}
