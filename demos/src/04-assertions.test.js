// const { test, expect } = require('jest');

test('test obj', () => {
  const data = { name: 'Nico' };
  data.lastName = 'Molina';
  expect(data).toEqual({ name: 'Nico', lastName: 'Molina' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('Strings', () => {
  expect('Cristoph').toMatch(/stop/);
});

test('List / Arrays', () => {
  const numbrers = [1, 2, 3, 4];
  expect(numbrers).toContain(3);
});
