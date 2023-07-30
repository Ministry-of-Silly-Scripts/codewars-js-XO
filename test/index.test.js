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

  it('should return true for input equal to "xo"', () => {
    expect(XO('xo')).toBe(true);
  });

  it('should return false for input equal to "xxo"', () => {
    expect(XO('xxo')).toBe(false);
  });

  it('should return true for input equal to "xxoo"', () => {
    expect(XO('xxoo')).toBe(true);
  });

  it('should return true for input equal to "ooxXm"', () => {
    expect(XO('ooxXm')).toBe(true);
  });
});
