import Route from '@ember/routing/route';

export default class ItemRoute extends Route {
  model(params) {
    const {
      item_id
    } = params;
    return item_id;
  }
}
