import possibilities from './1-0-wildcard';

let sortFn = (a, b) => a.localeCompare(b);

const Test = {
  assertSimilar(a, b) {
    expect(a).toEqual(b);
  },
  describe,
};

Test.describe('Basic tests', function () {
  test('case #1', () => {
    Test.assertSimilar(
      possibilities('101?').sort(sortFn),
      ['1010', '1011'].sort(sortFn)
    );
  });

  test('case #2', () => {
    Test.assertSimilar(
      possibilities('1?1?').sort(sortFn),
      ['1010', '1110', '1011', '1111'].sort(sortFn)
    );
  });
});
