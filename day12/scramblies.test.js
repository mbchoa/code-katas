import scramble from './scramblies';

const Test = {
  caseIndex: 1,
  assertEquals(a, b) {
    test(`case #${this.caseIndex}`, () => {
      expect(a).toBe(b);
    });
    this.caseIndex++;
  },
};

describe('Example Tests', function () {
  Test.assertEquals(scramble('rkqodlw', 'world'), true);
  Test.assertEquals(scramble('cedewaraaossoqqyt', 'codewars'), true);
  Test.assertEquals(scramble('katas', 'steak'), false);
  Test.assertEquals(scramble('scriptjava', 'javascript'), true);
  Test.assertEquals(scramble('scriptingjava', 'javascript'), true);
  Test.assertEquals(scramble('scriptsjava', 'javascripts'), true);
  Test.assertEquals(scramble('jscripts', 'javascript'), false);
  Test.assertEquals(scramble('scriptjavx', 'javascript'), false);
  Test.assertEquals(scramble('aabbcamaomsccdd', 'commas'), true);
});
