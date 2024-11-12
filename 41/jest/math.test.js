const sum = require('./math.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 5 + 8 to equal 13', () => {
  expect(sum(5, 8)).toBe(13);
});