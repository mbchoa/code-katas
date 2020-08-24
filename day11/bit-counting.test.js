import countBits from './bit-counting';

const Test = {
  assertEquals(a, b) {
    expect(a).toBe(b);
  },
};

test('case 1', () => {
  Test.assertEquals(countBits(4), 1);
});
test('case 2', () => {
  Test.assertEquals(countBits(0), 0);
});
test('case 3', () => {
  Test.assertEquals(countBits(7), 3);
});
test('case 4', () => {
  Test.assertEquals(countBits(9), 2);
});
test('case 5', () => {
  Test.assertEquals(countBits(10), 2);
});
