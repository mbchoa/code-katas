import findUniq from './find-unique';

const Test = {
  assertEquals(a, b) {
    expect(a).toEqual(b);
  },
};

test('case #1', () => {
  Test.assertEquals(findUniq([0, 1, 0]), 1);
});
test('case #2', () => {
  Test.assertEquals(findUniq([1, 1, 1, 2, 1, 1]), 2);
});
test('case #3', () => {
  Test.assertEquals(findUniq([3, 10, 3, 3, 3]), 10);
});
