import Component from '@glimmer/component';

export default class ProductComponent extends Component {
  productImage = this.args.product.colors[0].image;
}
