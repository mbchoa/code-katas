import digPow, { toDigitsArray } from './digpow';

describe('digPow', () => {
  it('case #1', () => {
    expect(digPow(89, 1)).toBe(1);
  });

  it('case #2', () => {
    expect(digPow(92, 1)).toBe(-1);
  });

  it('case #3', () => {
    expect(digPow(695, 2)).toBe(2);
  });

  it('case #4', () => {
    expect(digPow(46288, 3)).toBe(51);
  });
});

describe('toDigitsArray', () => {
  it('should return correct array of digits', () => {
    expect(toDigitsArray(1234)).toStrictEqual([1, 2, 3, 4]);
  });
});
