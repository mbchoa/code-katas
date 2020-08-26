import moveZeros from './move-zeros';

const Test = {
  assertEquals(a, b) {
    expect(a).toBe(b);
  },
};

test('base case', () => {
  Test.assertEquals(
    JSON.stringify(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])),
    JSON.stringify([1, 2, 1, 1, 3, 1, 0, 0, 0, 0])
  );
});
