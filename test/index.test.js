const { XO } = require('../src/index');

describe('the XO canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('XO', () => {
  it('should return false for input equal to "o"', () => {
    expect(XO('o')).toBe(false);
  });
});
