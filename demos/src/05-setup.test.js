describe('Group 1', () => {
  beforeEach(() => {
    console.log('Before Each test');
  });
  afterEach(() => {
    console.log('After Each test');
  });

  afterAll(() => {
    console.log('After all tests');
  });

  test('Case 1', () => {
    console.log('case 1');
    expect(1 + 1).toBe(2);
  });
  test('Case 2', () => {
    console.log('case 2');
    expect(1 + 2).toBe(3);
  });

  describe('Group 2', () => {
    beforeAll(() => {
      console.log('Before All');
    });
    test('Case 3', () => {
      console.log('case 3');
      expect(1 + 1).toBe(2);
    });
    test('Case 4', () => {
      console.log('case 4');
      expect(1 + 3).toBe(4);
    });
  });
});
