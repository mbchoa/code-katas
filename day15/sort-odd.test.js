import sortArray from './sort-odd';

describe('sort-odd', () => {
  test('case #1', () => {
    expect(sortArray([5, 3, 2, 8, 1, 4])).toEqual([1, 3, 2, 8, 5, 4]);
  });

  test('case #2', () => {
    expect(sortArray([5, 3, 1, 8, 0])).toEqual([1, 3, 5, 8, 0]);
  });

  test('case #3', () => {
    expect(sortArray([])).toEqual([]);
  });
});
