import getCount from './vowel-count';

const Test = {
  assertEquals(a, b) {
    expect(a).toEqual(b);
  },
};

describe('Case 1', function () {
  it('should be defined', function () {
    Test.assertEquals(getCount('abracadabra'), 5);
  });
});
