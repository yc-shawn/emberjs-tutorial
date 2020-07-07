import { helper } from '@ember/component/helper';

export default helper(function currency(params/*, hash*/) {
  const [ number ] = params;
  const dollars = Math.floor(number);
  let cents = Math.floor(number * 100 % 100);
  const sign = '$';

  if (cents.toString().length === 1) {
    cents = '0' + cents;
  }

  return `${sign}${dollars}.${cents}`;
});
