import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | counting', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:counting');
    assert.ok(route);
  });
});
