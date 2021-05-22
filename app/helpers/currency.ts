import Helper from '@ember/component/helper';

export default class Currency extends Helper {
  compute(params: any[]) {
    const [number] = params;
    const sign = '$';
    return `${sign} ${number}`;
  }
}
