import Route from '@ember/routing/route';

export default class ItemRoute extends Route {
  async model(params) {
    const response = await fetch('/api/items.json');
    const { data } = await response.json();
    const { item_id } = params;
    return data.find(({ id }) => id === item_id);
  }
}
