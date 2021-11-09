import isPangram from './isPangram';

describe('isPangram', () => {
  it('case #1', () => {
    var string = 'The quick brown fox jumps over the lazy dog.';
    expect(isPangram(string)).toBe(true);
  });

  it('case #2', () => {
    var string = 'This is not a pangram.';
    expect(isPangram(string)).toBe(false);
  });

  it('case #3', () => {
    var string = 'ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ';
    expect(isPangram(string)).toBe(true);
  });
});
