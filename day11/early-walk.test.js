import isValidWalk from './early-walk';

const Test = {
  expect(a, b) {
    expect(a).toBe(b);
  },
};

test('case 1', () => {
  Test.expect(
    isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']),
    true
  );
});
test('case 2', () => {
  Test.expect(
    isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']),
    false
  );
});
test('case 3', () => {
  Test.expect(isValidWalk(['w']), false);
});
test('case 4', () => {
  Test.expect(
    isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']),
    false
  );
});
