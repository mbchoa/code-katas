import spinWords from './spinning-words';

const Test = {
  assertEquals(a, b) {
    expect(a).toEqual(b);
  },
};

describe('test cases', () => {
  test('case #1', () => {
    Test.assertEquals(spinWords('Welcome'), 'emocleW');
  });
  test('case #2', () => {
    Test.assertEquals(spinWords('Hey fellow warriors'), 'Hey wollef sroirraw');
  });
  test('case #3', () => {
    Test.assertEquals(spinWords('This is a test'), 'This is a test');
  });
  test('case #4', () => {
    Test.assertEquals(
      spinWords('This is another test'),
      'This is rehtona test'
    );
  });
  test('case #5', () => {
    Test.assertEquals(
      spinWords('You are almost to the last test'),
      'You are tsomla to the last test'
    );
  });
  test('case #6', () => {
    Test.assertEquals(
      spinWords('Just kidding there is still one more'),
      'Just gniddik ereht is llits one more'
    );
  });
  test('case #7', () => {
    Test.assertEquals(
      spinWords('Seriously this is the last one'),
      'ylsuoireS this is the last one'
    );
  });
});
