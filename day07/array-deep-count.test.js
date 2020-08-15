import deepCount from './array-deep-count';

const Test = {
  assertEquals(a, b) {
    expect(a).toEqual(b);
  },
};

test('case #1', () => {
  Test.assertEquals(deepCount([]), 0, 'Expected 0');
});

test('case #2', () => {
  Test.assertEquals(deepCount([1, 2, 3]), 3, 'Expected 3');
});

test('case #3', () => {
  Test.assertEquals(deepCount(['x', 'y', ['z']]), 4, 'Expected 4');
});

test('case #4', () => {
  Test.assertEquals(deepCount([1, 2, [3, 4, [5]]]), 7, 'Expected 7');
});

test('case #5', () => {
  Test.assertEquals(deepCount([[[[[[[[[]]]]]]]]]), 8, 'Expected 8');
});

test.only('test #6', () => {
  Test.assertEquals(deepCount([[[]], 0, [[]]]), 5);
});
