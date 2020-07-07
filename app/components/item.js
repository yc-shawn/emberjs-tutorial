import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ItemComponent extends Component {
  @service router;

  @tracked color = this.args.item.colors[0].color;

  @tracked zoom = false;

  get itemImage() {
    const { image } = this.args.item.colors.find(({
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

  @action
  onDetails() {
    this.router.transitionTo('item', this.args.item.id);
  }
}
