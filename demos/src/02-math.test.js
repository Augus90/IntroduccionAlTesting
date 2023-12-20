const { sum, multiply, divide, difference } = require('./02-math');

describe('Test for math', () => {
  describe('Test for add', () => {
    test('adds 1 + 2 should be 3', () => {
      const result = sum(1, 2);

      expect(result).toBe(3);
    });
  });

  describe('Test for substract', () => {
    test('substract 4 - 2 should be 2', () => {
      const result = difference(4, 2);

      expect(result).toBe(2);
    });
  });
  describe('Test for multiply', () => {
    test('multiply 2 * 3 should be 6', () => {
      const result = multiply(2, 3);

      expect(result).toBe(6);
    });
  });
  describe('Test for divide', () => {
    test('Divide 10 / 2 should be 5', () => {
      const result = divide(10, 2);

      expect(result).toBe(5);
    });

    test('Divide especial cases', () => {
      const result = divide(1, 0);

      expect(result).toBeNull();
    });
  });
});
