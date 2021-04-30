import Component from '@glimmer/component';
import { task } from 'ember-concurrency';
import { getRandomNumber } from '../utils/getRandNum';

export default class ExampleTwoComponent extends Component {

  @task
  *getNumberTask() {
    return yield getRandomNumber();
  }
}
