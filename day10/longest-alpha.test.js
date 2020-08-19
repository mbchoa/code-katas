import longest from './longest-alpha';

const assert = {
  strictEqual(a, b) {
    expect(a).toEqual(b);
  },
};

const sampleTests = [
  ['asd', 'as'],
  ['nab', 'ab'],
  ['abcdeapbcdef', 'abcde'],
  ['asdfaaaabbbbcttavvfffffdf', 'aaaabbbbctt'],
  ['asdfbyfgiklag', 'fgikl'],
  ['z', 'z'],
  ['zyba', 'z'],
];

describe('Sample Tests', function () {
  // it('case #1', () => {
  //   expect(longest(sampleTests[0][0])).toEqual(sampleTests[0][1]);
  // });
  for (const [input, expected] of sampleTests) {
    it(`input: ${JSON.stringify(input)}`, function () {
      assert.strictEqual(longest(input), expected);
    });
  }
});
