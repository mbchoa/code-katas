import productFib from './prodFib';

describe('prodFib', () => {
  it('case #1', () => {
    expect(productFib(4895)).toStrictEqual([55, 89, true]);
  });
  it('case #2', () => {
    expect(productFib(5895)).toStrictEqual([89, 144, false]);
  });
  it('case #3', () => {
    expect(productFib(74049690)).toStrictEqual([6765, 10946, true]);
  });
  it('case #4', () => {
    expect(productFib(84049690)).toStrictEqual([10946, 17711, false]);
  });
  it('case #5', () => {
    expect(productFib(193864606)).toStrictEqual([10946, 17711, true]);
  });
  it('case #6', () => {
    expect(productFib(447577)).toStrictEqual([610, 987, false]);
  });
  it('case #7', () => {
    expect(productFib(602070)).toStrictEqual([610, 987, true]);
  });
});
