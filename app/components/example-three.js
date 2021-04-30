import Component from '@glimmer/component';
import { task, keepLatestTask } from 'ember-concurrency';
import { getRandomNumber } from '../utils/getRandNum';

export default class ExampleThreeComponent extends Component {

  // @task({ keepLatest: true })
  @keepLatestTask
  *getNumberTask() {
    const randNum = yield getRandomNumber();
    console.log('Received: ', randNum);
    return randNum;
  }
}
