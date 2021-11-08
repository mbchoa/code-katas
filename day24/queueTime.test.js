import queueTime from './queueTime';

describe('queueTime', () => {
  it('case #1', () => {
    expect(queueTime([], 1)).toBe(0);
  });

  it('case #2', () => {
    expect(queueTime([1, 2, 3, 4], 1)).toBe(10);
  });

  it('case #3', () => {
    expect(queueTime([2, 2, 3, 3, 4, 4], 2)).toBe(9);
  });

  it('case #4', () => {
    expect(queueTime([1, 2, 3, 4, 5], 100)).toBe(5);
  });

  it('case #5', () => {
    expect(queueTime([10, 2, 3, 3], 2)).toBe(10);
  });

  it('case #6', () => {
    expect(queueTime([2, 3, 10], 2)).toBe(12);
  });
});
