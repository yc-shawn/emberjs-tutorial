import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | product/details', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('price', {
      original: 50,
      current: 30,
    })
    this.set('onChangeColor', function(color) {
      assert.equal(color, 'red');
    })
    this.set('colors', [{ color: 'red'}]);
    await render(hbs `
      <Product::Details
        @price={{this.price}}
        @colors={{this.colors}}
        @onChangeColor={{this.onChangeColor}}
        @isDetails={{true}}
      />
    `);
    assert.dom('[data-test-original-price]').hasText('$50.00');
    assert.dom('[data-test-current-price]').hasText('$30.00');

    await click('[data-test-color]')
  });
});
