import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";
import { action } from '@ember/object';

export default class ItemComponent extends Component {
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
    this.zoom = !this.zoom;
  }
}
