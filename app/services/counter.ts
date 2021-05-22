import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class Counter extends Service {
  @tracked count: number = 0;

  increaseCount() {
    this.count++;
  }

  decreaseCount() {
    this.count--;
  }
}
// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'counter': Counter;
  }
}
