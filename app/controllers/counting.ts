import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import Counter from 'emberjs-tutorial/services/counter';
import { Router } from '@ember/routing';

export default class Counting extends Controller {
  @service declare counter: Counter;
  @service declare router: Router;

  @action
  increase() {
    this.counter.increaseCount();
  }

  @action
  decrease() {
    this.counter.decreaseCount();
  }

  @action
  backToHome() {
    this.router.transitionTo('/');
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'counting': Counting;
  }
}
