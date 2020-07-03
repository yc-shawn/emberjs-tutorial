import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ItemComponent extends Component {
  @service router;

  @tracked color = 'red';

  @tracked zoom = false;

  get itemImage() {
    switch(this.color) {
      case 'red':
        return '/assets/images/beats-solo-red.png';
      case 'black':
        return '/assets/images/beats-solo-black.png';
      default:
        return '';
    }
  }

  @action
  updateColor(color) {
    this.color = color;
  }

  @action
  toggleZoom() {
    if (this.args.isDetails) {
      this.zoom = !this.zoom;
    }
  }

  @action
  onDetails() {
    this.router.transitionTo('item', 1);
  }
}
