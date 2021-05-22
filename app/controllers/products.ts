import Controller from '@ember/controller';
import { Product } from 'emberjs-tutorial/routes/products';

export default class Products extends Controller {
  model: Product[] = [];

  get numberOfProducts(): number {
    return this.model.length;
  }

  get totalPrice(): number {
    return this.model.reduce((total: number, product: Product) => {
      return total + product.price;
    }, 0);
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'products': Products;
  }
}
