QUnit.module('penjumlahan', function() {
  QUnit.test('2 angka', function(assert) {
    assert.equal(penjumlahan(1, 2), 3);
    assert.equal(penjumlahan(10, 20), 30);
  });
});