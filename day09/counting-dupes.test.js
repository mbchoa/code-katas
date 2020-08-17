import duplicateCount from './counting-dupes';

const Test = {
  assertEquals(a, b) {
    expect(a).toEqual(b);
  },
};

test('case #1', () => {
  Test.assertEquals(duplicateCount(''), 0);
});

test('case #2', () => {
  Test.assertEquals(duplicateCount('abcde'), 0);
});

test('case #3', () => {
  Test.assertEquals(duplicateCount('aabbcde'), 2);
});

test('case #4', () => {
  Test.assertEquals(duplicateCount('aabBcde'), 2, 'should ignore case');
});

test('case #5', () => {
  Test.assertEquals(duplicateCount('Indivisibility'), 1);
});

test('case #6', () => {
  Test.assertEquals(
    duplicateCount('Indivisibilities'),
    2,
    'characters may not be adjacent'
  );
});
