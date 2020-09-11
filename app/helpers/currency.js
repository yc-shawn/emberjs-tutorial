import Helper from '@ember/component/helper';

export default class currency extends Helper {
  compute(params, hash = {}) {
    // {{currency 25}}
    const [number] = params;
    const {
      sign = '$'
    } = hash;
    const dollars = Math.floor(number);
    let cents = Math.floor(number * 100 % 100);

    if (cents.toString().length === 1) {
      cents = '0' + cents;
    }

    return `${sign}${dollars}.${cents}`;
  }
}
