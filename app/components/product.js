import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ItemComponent extends Component {
  @service router;

  @tracked color = this.args.product.colors[0].color;

  @tracked zoom = false;

  get productImage() {
    const { image } = this.args.product.colors.find(({
      color
    }) => color === this.color);
    return image;
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
}
