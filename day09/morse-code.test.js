import decodeMorse from './morse-code';

const Test = {
  assertEquals(a, b) {
    expect(a).toEqual(b);
  },
};

test('base case', () => {
  Test.assertEquals(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE');
});
