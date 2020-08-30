import chooseBestSum from './best-travel';

const Test = {
  assertEquals(a, b) {
    expect(a).toBe(b);
  },
};

describe('chooseBestSum', () => {
  it('case #1', () => {
    const ts = [50, 55, 56, 57, 58];
    Test.assertEquals(chooseBestSum(163, 3, ts), 163);
  });

  it('case #2', () => {
    const ts = [50];
    Test.assertEquals(chooseBestSum(163, 3, ts), null);
  });

  it('case #3', () => {
    const ts = [91, 74, 73, 85, 73, 81, 87];
    Test.assertEquals(chooseBestSum(230, 3, ts), 228);
  });

  it('real case #1', () => {
    const ts = [91, 74, 73, 85, 73, 81, 87];
    Test.assertEquals(chooseBestSum(331, 4, ts), 331);
  });
});
