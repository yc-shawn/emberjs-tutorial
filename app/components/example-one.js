import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { getRandomNumber } from '../utils/getRandNum';

export default class ExampleOneComponent extends Component {
  @tracked
  displayNumber = null;

  @tracked
  isLoading = false;

  @action
  async getRandNumber() {
    this.isLoading = true;
    const randNum = await getRandomNumber();
    this.displayNumber = randNum;
    this.isLoading = false;
  }
}
