import descendingOrder from './descending-order';

describe('should pass base cases', () => {
  it('case #1', () => {
    expect(descendingOrder(0)).toBe(0);
  });
  it('case #2', () => {
    expect(descendingOrder(1)).toBe(1);
  });
  it('case #3', () => {
    expect(descendingOrder(123456789)).toBe(987654321);
  });
});
