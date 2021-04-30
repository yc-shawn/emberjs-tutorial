import Component from '@glimmer/component';
import { task } from 'ember-concurrency';
import { action } from '@ember/object';
import { getRandomNumber } from '../utils/getRandNum';

export default class ExampleFourComponent extends Component {

  @task
  *getNumberTask() {
    const randNum = yield getRandomNumber();
    if (randNum > 50) {
      throw new Error('Something wrong!');
    }
    console.log('Received: ', randNum);
    return randNum;
  }

  @action
  cancel() {
    this.getNumberTask.cancelAll();
  }
}
