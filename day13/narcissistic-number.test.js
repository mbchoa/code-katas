import narcissistic from './narcissistic-number';

const Test = {
  assertEquals(a, b) {
    expect(a).toBe(b);
  },
};

describe('Narcissistic Function', function () {
  it('should find small numbers are all narcissistic', function () {
    Test.assertEquals(narcissistic(7), true, '7 is narcissistic');
  });

  it('should find these numbers are narcissistic', function () {
    Test.assertEquals(narcissistic(371), true, '371 is narcissistic');
  });
});
