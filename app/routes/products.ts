import Route from '@ember/routing/route';

export interface Product {
  id: string;
  name: string;
  price: number;
}

export default class Products extends Route {
  async model(): Promise<Product[]> {
    const response = await fetch("/api/products.json");
    return response.json();
  }
}
