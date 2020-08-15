import maxMatch from './max-match';

const Test = {
  assertDeepEquals(a, b) {
    expect(a).toEqual(b);
  },
};

test('case #1', () => {
  Test.assertDeepEquals(maxMatch('goodluck'), ['good', 'luck']);
});

test('case #2', () => {
  Test.assertDeepEquals(maxMatch('ewingsa'), ['e', 'w', 'in', 'g', 's', 'a']); //'ewingsa' is not a valid word
});
